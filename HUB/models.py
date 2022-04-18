
from os import name
from tkinter import CASCADE
from django.db import models
from django.forms import DateField, DateTimeField
from djmoney.models.fields import MoneyField
from django.conf import settings

# #Coffee Models
# class Coffee(models.Model):
#     CATEGORIES = (
#         ('Brewed Coffees', 'Brewed Coffees'),
#         ('Espresso', 'Espresso'),
#         ('Specialty Drinks', 'Specialty Drinks'),
#         ('Blended Coffees', 'Blended Coffees')
#     )
#     id = models.AutoField(primary_key=True)
#     category = models.TextField(choices=CATEGORIES)
#     name = models.CharField(max_length=200)
#     desc = models.TextField(max_length=200)
#     s_price = MoneyField(max_digits=10, decimal_places=2, default_currency='USD')
#     m_price = MoneyField(max_digits=10, decimal_places=2, default_currency='USD')
#     l_price = MoneyField(max_digits=10, decimal_places=2, default_currency='USD')

#     def __str__(self):
#         return self.name

# class CoffeeOrder(models.Model):
#     coffee = models.ForeignKey(Coffee, on_delete=models.CASCADE)
#     size = models.CharField(max_length=200)
#     add_in = models.TextField(max_length=200)
#     price = MoneyField(max_digits=10, decimal_places=2, default_currency='USD')

# #Food Models
# class Food(models.Model):
#     CATEGORIES = (
#         ('Breakfast', 'Breakfast'),
#         ('Salads', 'Salads'),
#         ('Pastries & More', 'Pastries & More'),
#         ('Sandwiches & Wraps', 'Sandwiches & Wraps')
#     )
#     id = models.AutoField(primary_key=True)
#     category = models.TextField(choices=CATEGORIES)
#     name = models.CharField(max_length=200)
#     desc = models.TextField(max_length=200)
#     price = MoneyField(max_digits=10, decimal_places=2, default_currency='USD')

#     def __str__(self):
#         return self.name

# class FoodOrder(models.Model):
#   food = models.ForeignKey(Food, on_delete=models.CASCADE)
#   add_in = models.TextField(max_length=200)

# #Order
# class OrderItem(models.Model):
#     Coffee = models.OneToOneField(CoffeeOrder, on_delete=models.CASCADE, null=True)
#     Food = models.OneToOneField(FoodOrder, on_delete=models.CASCADE, null=True)

# class Order(models.Model):
#     order_code = models.CharField(max_length=10)
#     user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
#     items = models.ManyToManyField(OrderItem)
#     date_ordered = models.DateField(auto_now=True)

#     def all_items(self):
#         return self.items.all()

#     def __str__(self):
#         return '{0} - {1}'.format(self.user, self.order_code)

class OrderItem(models.Model):
    name = models.CharField(max_length=200)
    desc = models.CharField(max_length=200)
    price = MoneyField(max_digits=10, decimal_places=2, default_currency='USD')
    extra = models.TextField(max_length=200, null=True)

    def __str__(self):
        return self.name


class Order(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=CASCADE)
    items = models.ManyToManyField(OrderItem)
    total = MoneyField(max_digits=10, decimal_places=2, default_currency='USD')

    def __str__(self):
        return self.user + " - " + self.id