from django.db import models

# Create your models here.

class Product(models.Model):
    name = models.CharField('name', max_length=100)
    price = models.DecimalField('price', decimal_places=2, max_digits=6)
    stock = models.IntegerField('stock amount')

class User(models.Model):
    name = models.CharField('name', max_length=110)