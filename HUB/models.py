
from django.db import models
from djmoney.models.fields import MoneyField
from django.conf import settings

class OrderItem(models.Model):
    name = models.CharField(max_length=200)
    price = MoneyField(max_digits=10, decimal_places=2, default_currency='USD')
    extra = models.TextField(max_length=200, null=True)
    quantity = models.IntegerField(default=1)

    def __str__(self):
        return self.name


class Order(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    items = models.ManyToManyField(OrderItem)
    total = MoneyField(max_digits=10, decimal_places=2, default_currency='USD')

    def __str__(self):
        return self.user + " - " + self.id