
from django.forms import ModelForm

from HUB.models import OrderItem, Order

class OrderItemForm(ModelForm):
    class Meta:
        model = OrderItem
        fields = '__all__'

class OrderForm(ModelForm):
    class Meta:
        model = Order
        fields = '__all__'
        exclude = ['user']
