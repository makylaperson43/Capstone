from unicodedata import category
from django.db.models.deletion import CASCADE
from django.contrib.auth.models import User
from django.db import models
from django.forms import CharField
from djmoney.models.fields import MoneyField

class Product(models.Model):
    class Meta:
        abstract = True
    name = models.CharField(max_length=200)
    desc = models.CharField(max_length=200)

    def __str__(self):
        return self.category + " - " + self.name

class Coffees(Product):
    CATEGORIES = (
        ('Brewed Coffees', 'Brewed Coffees'),
        ('Espresso', 'Espresso'),
        ('Specialty Drinks', 'Specialty Drinks'),
        ('Blended Coffees', 'Blended Coffees')
    )

    category = models.TextField(choices=CATEGORIES)
    price1 = MoneyField(max_digits=10, decimal_places=2, default_currency='USD')
    price2 = MoneyField(max_digits=10, decimal_places=2, default_currency='USD')
    price3 = MoneyField(max_digits=10, decimal_places=2, default_currency='USD')
    add_in = models.CharField(max_length=30, null=True, blank=True)

class Food(Product):
    CATEGORIES = (
        ('Breakfast', 'Breakfast'),
        ('Salads', 'Salads'),
        ('Pastries & More', 'Pastries & More'),
        ('Sandwiches & Wraps', 'Sandwiches & Wraps')
    )

    category = models.TextField(choices=CATEGORIES)
    price = MoneyField(max_digits=10, decimal_places=2, default_currency='USD')
    price2 = MoneyField(max_digits=10, decimal_places=2, default_currency='USD', null=True)
    add_ins = models.CharField(max_length=30, null=True, blank=True)

class OrderItem(models.Model):
    coffee = models.ForeignKey(Coffees, on_delete=models.CASCADE, null=True)
    food = models.ForeignKey(Food, on_delete=models.CASCADE, null=True)
    quantity = models.IntegerField(default=1, null=True, blank=True)
    price = MoneyField(max_digits=10, decimal_places=2, default_currency='USD')
    date_added = models.DateTimeField(auto_now_add=True)

class Order(models.Model):
    customer_name = models.CharField(max_length=200, default="")
    items = models.ManyToManyField(OrderItem)
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.customer_name + "'s order"

    def allItems(self):
        return self.items.all()

    def total(self):
        return sum([item.product.price for item in self.items.all()])