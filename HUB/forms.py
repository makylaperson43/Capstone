
from django.forms import ModelForm

from HUB.models import  Order

class OrderForm(ModelForm):
    class Meta:
        model = Order
        fields = '__all__'
        exclude = ['total']
