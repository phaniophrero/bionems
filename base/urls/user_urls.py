from django.urls import path
from base.views.user_views import RegisterView, LoadUserView
from base.views import user_views as views
from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView, TokenVerifyView

urlpatterns = [
    path('token/', TokenObtainPairView.as_view()),
    path('token/refresh/', TokenRefreshView.as_view()),
    path('token/verify/', TokenVerifyView.as_view()),

    # URLS for NEXTjs
    path('sign-up/', RegisterView.as_view()),
    path('user/', LoadUserView.as_view()),
    path('user-list/', views.getUsers, name="users"),

    # path('login/', views.MyTokenObtainPairView.as_view(),
        #  name='token_obtain_pair'),

    # path('register/', views.registerUser, name="register"),
    # path('email-verify/', views.VerifyEmail.as_view(), name="email-verify"),

    # path('profile/', views.getUserProfile, name="users-profile"),
    # path('profile/update', views.updateUserProfile, name="users-profile-update"),
    # path('', views.getUsers, name="users"),

    # path('<str:pk>/', views.getUserById, name="user"),

    # path('update/<str:pk>/', views.updateUser, name="user-update"),

    # path('delete/<str:pk>/', views.deleteUser, name="user-delete"),

]