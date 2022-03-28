from attr import fields
from django.forms import ModelForm
from HUB.models import Order
from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm


class OrderForm(ModelForm):
    class Meta:
        model = Order
        fields = '__all__'
        exclude = ['user']

class CreateUserForm(UserCreationForm):
    class Meta:
        model = User
        fields = ['username', 'email', 'password1', 'password2']