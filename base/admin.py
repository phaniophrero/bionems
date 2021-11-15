from django.contrib import admin
from .models import *

# Register your models here.

# admin.site.register(Product)
admin.site.register(Category)
# admin.site.register(Ingredient)
admin.site.register(Review)
# admin.site.register(DashboardNavbarItem)

class ProductIngredientAdmin(admin.StackedInline):
    model = Ingredient

@admin.register(Product)
class PostAdmin(admin.ModelAdmin):
    inlines = [ProductIngredientAdmin]

    class Meta:
        model = Product


@admin.register(Ingredient)
class ProductIngredientAdmin(admin.ModelAdmin):
    pass