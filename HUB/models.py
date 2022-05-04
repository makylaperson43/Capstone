from django.db import models
from django.conf import settings
from django.utils import timezone

class Order(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, default=1)
    date = models.DateField(default=timezone.now)
    is_paid_for = models.BooleanField(default=False)

    def __str__(self):
        return self.user.username + " - " + str(self.id)

class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE, default="")
    title = models.CharField(max_length=200)
    price = models.CharField(max_length=10, default=None)
    quantity = models.IntegerField(default=1)
    extra = models.TextField(max_length=200, null=True)

    def __str__(self):
        return self.title