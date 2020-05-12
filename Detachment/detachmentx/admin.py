from django.contrib import admin
from .models import Product
from .models import User

# Register your models here.

class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'stock')


admin.site.register(Product, ProductAdmin)

class UserAdmin(admin.ModelAdmin):
    list_display = ('name', 'name')


admin.site.register(User, UserAdmin)
