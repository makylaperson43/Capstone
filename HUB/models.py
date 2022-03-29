from email.policy import default
from django.db.models.deletion import CASCADE
from django.conf import settings
from django.contrib.auth.models import User
from django.db import models
from djmoney.models.fields import MoneyField

# Create your models here.
# class 

class Product(models.Model):
    name = models.CharField(max_length=20, null=True)
    description = models.CharField(max_length=200, null=True)
    price = MoneyField(decimal_places=2, default=0, default_currency='USD', max_digits=11)

    def __str__(self):
        return self.name

class Order(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, default=1, on_delete=CASCADE, null=True)
    product = models.OneToOneField(Product, on_delete=CASCADE, null=True)
    quantity = models.PositiveIntegerField(null=True)
    date_created = models.DateTimeField(auto_now_add=True, null=True)

    def __str__(self):
        return self.user.username + ": " + str(self.date_created)
