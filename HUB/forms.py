from attr import fields
from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm

from HUB.models import Order, OrderItem

class CreateUserForm(UserCreationForm):
    class Meta:
        model = User
        fields = ['username', 'email', 'password1', 'password2']

class OrderItemForm(forms.Form):
    class Meta:
        model = OrderItem
        fields = ['__all__']