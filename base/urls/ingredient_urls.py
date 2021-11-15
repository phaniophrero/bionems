from django.urls import path
from base.views import ingredient_views as views


urlpatterns = [
    path('', views.getIngredients, name="ingredients"),
]