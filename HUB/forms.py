
from django.forms import ModelForm
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm

from HUB.models import CoffeeOrder

class CreateUserForm(UserCreationForm):
    class Meta:
        model = User
        fields = ['username', 'email', 'password1', 'password2']

class CoffeeOrderForm(ModelForm):
    class Meta:
        model = CoffeeOrder
        fields = '__all__'
        exclude = ['price']