from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from .models import Category,  Ingredient, Product, Review


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

    # def get__name(self, obj):
    #     return obj.name


class IngredientSerializer(serializers.ModelSerializer):
    ingredients = serializers.SlugRelatedField(many=False, read_only=True,slug_field='slug')

    class Meta:
        model = Ingredient
        fields = '__all__'



class ProductSerializer(serializers.ModelSerializer):
    reviews = serializers.SerializerMethodField(read_only=True)
    ingredients = serializers.StringRelatedField(read_only=True, many=True)
    category = serializers.SlugRelatedField(read_only=True,slug_field='slug')

    class Meta:
        model = Product
        fields = '__all__'

    # override the category field from id to name
    # def to_representation(self, instance):
    #     rep = super(ProductSerializer, self).to_representation(instance)
    #     rep['category'] = instance.category.name
    #     return rep


    def get_reviews(self, obj):
        reviews = obj.review_set.all()
        serializer = ReviewSerializer(reviews, many=True)
        return serializer.data



class UserSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(read_only=True)
    _id = serializers.SerializerMethodField(read_only=True)
    isAdmin = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['id', '_id', 'username', 'email', 'name', 'isAdmin']

    def get__id(self, obj):
        return obj.id

    def get_isAdmin(self, obj):
        return obj.is_staff

    def get_name(self, obj):
        name = obj.first_name
        if name == '':
            name = obj.email

        return name


class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['id', '_id', 'username', 'email', 'name', 'isAdmin', 'token']

    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)


# class DashboardNavbarItemSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = DashboardNavbarItem
#         fields = '__all__'


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'



# Serializer for Nextjs
class UserSerializerNext(serializers.ModelSerializer):
    isAdmin = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields= ['id','first_name', 'last_name', 'email', 'username', 'isAdmin']


    def get_idAdmin(self, obj):
        return obj.is_staff
