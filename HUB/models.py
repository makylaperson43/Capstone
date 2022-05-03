from django.db import models
from djmoney.models.fields import MoneyField
from django.conf import settings

class Order(models.Model):
    customer_name = models.CharField(max_length=200)
    total = models.CharField(max_length=10, default=None)

    def __str__(self):
        return self.user + " - " + self.id

class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    price = models.CharField(max_length=10, default=None)
    quantity = models.IntegerField(default=1)
    extra = models.TextField(max_length=200, null=True)

    def __str__(self):
        return self.title