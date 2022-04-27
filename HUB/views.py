from django.urls import reverse
import uuid
from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from django.template import context

#Paypal imports
from paypal.standard.forms import PayPalPaymentsForm

from HUB.forms import *
from HUB.models import *
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from HUB.decorators import unauthenticated_user

#Core Function Views
def home(request):

    context = {}
    return render(request, 'home.html', context)

def cart1(request):

    context = {}
    return render(request, 'cart.html', context)

def gallery(request):

    context = {}
    return render(request, 'gallery.html', context)

def about(request):
    context = {}
    return render(request, 'about.html', context)

#Paypal payments
def paypalPayments(request):
    host = request.get_host()
    paypal_dict = {
        'business': settings.PAYPAL_RECEIVER_EMAIL,
        'amount': '20.00',
        'item_name': 'Product 1',
        'invoice': str(uuid.uuid4()),
        'currency_code': 'USD',
        'notify_url': f'http://{host}{reverse("paypal-ipn")}',
        'return_url': f'http://{host}{reverse("paypal-return")}',
        'cancel_return': f'http://{host}{reverse("paypal-cancel")}',
    }
    form = PayPalPaymentsForm(initial=paypal_dict)
    context = {'payform': form}
    return render(request, 'payment.html', context)

def paypal_return(request):
    messages.success(request, "You made a payment!")
    return redirect('menu-page')

def paypal_cancel(request):
    messages.success(request, "Your order was canceled")
    return redirect('menu-page')

#User Authentication
@unauthenticated_user
def registerPage(request):
    form = UserCreationForm()

    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('login-page')

    context = {'form': form}
    return render(request, 'register.html', context)

@unauthenticated_user
def loginPage(request):
    if request.method == "POST":
        username = request.POST.get('username')
        password = request.POST.get('password')

        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            return redirect('home-page')   
        else:
            messages.info(request, 'Username or Password is incorrect')
    
    context = {}
    return render(request, 'login.html', context)

def logoutUser(request):
    logout(request)
    return redirect('login-page')


def payment(request):
    context = {}
    return render(request, 'payment.html', context)
