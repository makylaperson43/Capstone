from unicodedata import category
from django.db.models.deletion import CASCADE
from django.contrib.auth.models import User
from django.db import models
from djmoney.models.fields import MoneyField

CATEGORIES = (
    ('Brewed Coffees', 'Brewed Coffees'),
    ('Espresso', 'Espresso'),
    ('Specialty Drinks', 'Specialty Drinks'),
    ('Blended Coffees', 'Blended Coffees'),
    ('Breakfast', 'Breakfast'),
    ('Salads', 'Salads'),
    ('Pastries & More', 'Pastries & More'),
    ('Sandwiches & Wraps', 'Sandwiches & Wraps')
)

class Product(models.Model):
    name = models.CharField(max_length=200)
    desc = models.CharField(max_length=200)
    category = models.TextField(choices=CATEGORIES)
    price1 = MoneyField(max_digits=10, decimal_places=2, default_currency='USD')
    price2 = MoneyField(max_digits=10, decimal_places=2, default_currency='USD', null=True)
    price3 = MoneyField(max_digits=10, decimal_places=2, default_currency='USD', null=True)

    def __str__(self):
        return self.category + " - " + self.name

class Order(models.Model):
    customer_name = models.CharField(max_length=200, default="")
    date = models.DateTimeField(auto_now_add=True)
    complete = models.BooleanField(default=False)

    def __str__(self):
        return self.customer_name + "'s order"

class OrderItem(models.Model):
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, blank=True, null=True)
    order = models.ForeignKey(Order, on_delete=CASCADE, blank=True, null=True)
    quantity = models.IntegerField(default=0, null=True, blank=True)
    date_added = models.DateTimeField(auto_now_add=True)