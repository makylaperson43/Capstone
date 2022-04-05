from email.policy import default
from os import name
from django.db.models.deletion import CASCADE
from django.conf import settings
from django.contrib.auth.models import User
from django.db import models
from djmoney.models.fields import MoneyField

# Create your models here.

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

#Coffee Models
#--------------------------------
#Brewed Coffees
class brewed_types(models.Model):
    name = models.CharField(max_length=20)

    def __str__(self):
        return self.name

class brewed_sizes(models.Model):
    name = models.CharField(max_length=10)

    def __str__(self):
        return self.name

class Brewed(models.Model):
    type = models.OneToOneField(brewed_types, on_delete=CASCADE, null=True)
    size = models.OneToOneField(brewed_sizes, on_delete=CASCADE, null=True)
    desc = models.TextField(max_length=200)

    def __str__(self):
        return self.type + " " + self.size

#--------------------------------
#Espresso
class espresso_types(models.Model):
    name = models.CharField(max_length=20)

    def __str__(self):
        return self.name

class espresso_sizes(models.Model):
    name = models.CharField(max_length=10)

    def __str__(self):
        return self.name

class Espresso(models.Model):
    type = models.OneToOneField(espresso_types, on_delete=CASCADE, null=True)
    size = models.OneToOneField(espresso_sizes, on_delete=CASCADE, null=True)
    desc = models.TextField(max_length=200)

    def __str__(self):
        return self.type + " " + self.size

#--------------------------------
#Blended Coffees
class blended_types(models.Model):
    name = models.CharField(max_length=20)

    def __str__(self):
        return self.name

class blended_sizes(models.Model):
    name = models.CharField(max_length=10)

    def __str__(self):
        return self.name

class Blended(models.Model):
    type = models.OneToOneField(blended_types, on_delete=CASCADE, null=True)
    size = models.OneToOneField(blended_sizes, on_delete=CASCADE, null=True)
    desc = models.TextField(max_length=200)

    def __str__(self):
        return self.type + " " + self.size

#--------------------------------
#Specialty Drinks
class specialty_types(models.Model):
    name = models.CharField(max_length=20)

    def __str__(self):
        return self.name

class specialty_sizes(models.Model):
    name = models.CharField(max_length=10)

    def __str__(self):
        return self.name

class Specialty(models.Model):
    type = models.OneToOneField(specialty_types, on_delete=CASCADE, null=True)
    size = models.OneToOneField(specialty_sizes, on_delete=CASCADE, null=True)
    desc = models.TextField(max_length=200)

    def __str__(self):
        return self.type + " " + self.size
#-----------------------------------------
#Other Item Models \/