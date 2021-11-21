from django.shortcuts import render
from rest_framework import permissions
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from base.serializers import UserSerializerNext
from base.serializers import UserSerializer, UserSerializerWithToken
from rest_framework.views import APIView

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from rest_framework import generics, status

# Create your views here.


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

        serializer = UserSerializerWithToken(self.user).data
        for k, v in serializer.items():
            data[k] = v

        return data


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer



# For Nextjs User Auth

class RegisterView(APIView):
    permission_classes = (permissions.AllowAny, )

    def post(self, request):
        try:
            data = request.data

            first_name = data['first_name']
            last_name = data['last_name']
            username = data['username']
            email = data['email']
            # de adaugat isAdmin
            # isAdmin= data['isAdmin']
            password = data['password']
            # re_password = data['re_password']

            # if password == re_password:
            if len(password) >= 8:
                if not User.objects.filter(username=username).exists():
                    user = User.objects.create_user(
                        first_name=first_name,
                        last_name=last_name,
                        email=email,
                        username=username,
                        password=password,
                    )
                    user.save()

                    if User.objects.filter(username=username).exists():
                        return Response({"success": "Account created successfully."}, status=status.HTTP_201_CREATED)

                    else:
                        return Response({"error": 'Something went wrong when trying to create account.'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

                else:
                    return Response({"error": 'Username already exists.'}, status=status.HTTP_400_BAD_REQUEST)

            else:
                return Response({"error": 'Passwords must be at least 8 characters long.'}, status=status.HTTP_400_BAD_REQUEST)

            # else:
            #     return Response({"error": 'Passwords do not match.'}, status=status.HTTP_400_BAD_REQUEST)

        except:
            return Response({"error": "Something went wrong when trying to register account."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class LoadUserView(APIView):
    def get(self, request, format=None):
        try:
            user = request.user
            user = UserSerializerNext(user)

            return Response({"user": user.data}, status=status.HTTP_200_OK)

        except:
            return Response({"error": "Something went wrong when trying to load user."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)



@api_view(['GET'])
@permission_classes([IsAdminUser])
def getUsers(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)


# @api_view(['POST'])
# def registerUser(request):
#     data = request.data
#     try:
#         user = User.objects.create(
#             first_name=data['name'],
#             username=data['email'],
#             email=data['email'],
#             password=make_password(data['password'])
#         )

#         serializer = UserSerializerWithToken(user, many=False)
#         return Response(serializer.data)

#     except:
#         message = {'detail': 'User with this email already exists'}
#         return Response(message, status=status.HTTP_400_BAD_REQUEST)


# class VerifyEmail(generics.GenericAPIView):
#     def post(self, request):
#         try:
#             data = request.data
#             user_obj = User.objects.get(email = data.get('email'))
#             otp = data.get('otp')

#             if user_obj.otp == otp:
#                 user_obj.is_email_verified = True
#                 user_obj.save()
#                 return Response({'status': 200, 'message': 'your OTP is verified'})

#             return Response({'status' : 403, 'message': 'your OTP is wrong'})

#         except Exception as e:
#             print(e)
#         return Response({'status': 404, 'error': 'something went wrong'})



# @api_view(['PUT'])
# @permission_classes([IsAuthenticated])
# def updateUserProfile(request):
#     user = request.user
#     serializer = UserSerializerWithToken(user, many=False)

#     data = request.data
#     user.first_name = data['name']
#     user.username = data['email']
#     user.email = data['email']

#     if data['password'] != '':
#         user.password = make_password(data['password'])

#     user.save()

#     return Response(serializer.data)


# @api_view(['GET'])
# @permission_classes([IsAuthenticated])
# def getUserProfile(request):
#     user = request.user
#     serializer = UserSerializer(user, many=False)
#     return Response(serializer.data)


# @api_view(['GET'])
# @permission_classes([IsAdminUser])
# def getUsers(request):
#     users = User.objects.all()
#     serializer = UserSerializer(users, many=True)
#     return Response(serializer.data)


# @api_view(['GET'])
# @permission_classes([IsAdminUser])
# def getUserById(request, pk):
#     user = User.objects.get(id=pk)
#     serializer = UserSerializer(user, many=False)
#     return Response(serializer.data)


# @api_view(['PUT'])
# @permission_classes([IsAuthenticated])
# def updateUser(request, pk):
#     user = User.objects.get(id=pk)

#     data = request.data

#     user.first_name = data['name']
#     user.username = data['email']
#     user.email = data['email']
#     user.is_staff = data['isAdmin']

#     user.save()

#     serializer = UserSerializer(user, many=False)

#     return Response(serializer.data)


# @api_view(['DELETE'])
# @permission_classes([IsAdminUser])
# def deleteUser(request, pk):
#     userForDeletion = User.objects.get(id=pk)
#     userForDeletion.delete()
#     return Response("L'utilisateur a été supprimé")
