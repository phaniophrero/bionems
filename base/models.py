from django.contrib.postgres.fields import ArrayField
from django.db import models
from django.urls import reverse
from django.contrib.auth.models import User
from django.utils.text import slugify

# Create your models here.


class Category(models.Model):
    name = models.CharField(max_length=200, null=True, blank=True)
    slug = models.SlugField(default="", unique=True, null=True, blank=True, db_index=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super(Category, self).save(*args, **kwargs)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'Categories'

    # def get_absolute_url(self):
    #     return reverse("store:category_list", args={self.slug})

    def __str__(self):
        return self.name





class Product(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    image = models.ImageField(null=True, blank=True,
                              default='/placeholder-img.png')
    brand = models.CharField(max_length=200, null=True, blank=True)
    # category = models.CharField(max_length=200, null=True, blank=True)
    # category = models.ForeignKey(Category,on_delete=models.SET_NULL,null=True)
    category = models.ManyToManyField(Category, related_name='products')
    slug = models.SlugField(default="", null=True, blank=True, db_index=True)
    # ingredient = models.ForeignKey('Ingredient', on_delete=models.CASCADE, null=True,related_name='product_ingredient')
    ingredients = models.ManyToManyField('Ingredient',related_name='product_ingredient', blank=True)
    description = models.TextField(null=True, blank=True)
    rating = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    numReviews = models.IntegerField(null=True, blank=True, default=0)
    price = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    # conuntInStock = models.IntegerField(null=True, blank=True, default=0)
    createdAt = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True, editable=False)

    # def get_absolute_url(self):
    #     return reverse("store:product:detail", args={self.slug})

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super(Product, self).save(*args, **kwargs)

    # def __str__(self):
    #     return self.name

    def __str__(self):
        return f"{self.name} by: {self.user}"



class Ingredient(models.Model):
    name = models.CharField(max_length=200, null=True, blank=False)
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='for_product', default=None)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return f"{self.name} for: {self.product.slug}"


class Review(models.Model):
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    rating = models.IntegerField(null=True, blank=True, default=0)
    comment = models.TextField(null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.rating)


# class DashboardNavbarItem(models.Model):
#     name = models.CharField(max_length=200, null=True, blank=True)
#     path = models.CharField(max_length=200, null=True, blank=True)
#     image = models.FileField(null=True, blank=True)
#     createdAt = models.DateTimeField(auto_now_add=True)
#     _id = models.AutoField(primary_key=True, editable=False)

#     def __str__(self):
#         return self.name
