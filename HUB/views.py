from django.urls import reverse
import uuid
import json
from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from django.views.decorators.csrf import csrf_exempt

#Paypal imports
from paypal.standard.forms import PayPalPaymentsForm

from HUB.forms import *
from HUB.models import *
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from HUB.decorators import unauthenticated_user

#Core Function Views
#-------------------
def home(request):

    context = {}
    return render(request, 'home.html', context)

@csrf_exempt
def cart1(request):
    #Forms
    item_form = OrderItemForm()
    
    #POST
    if request.method == "POST":
        #JSON Data
        data = json.loads(request.body)
        
        #Order Item Create
        item_form = OrderItemForm(request.POST)
        if item_form.is_valid():
            instance = item_form.save()
            instance.name = data.title
            instance.price = data.price
            instance.extra = data.extra
            instance.quantity = data.quantity
            instance.save()

    

    context = {}
    return render(request, 'cart.html', context)

def gallery(request):

    context = {}
    return render(request, 'gallery.html', context)

def about(request):
    context = {}
    return render(request, 'about.html', context)
#-------------------
#Paypal payments
#-------------------
def paypalPayments(request):
    
    return render(request, 'payment.html', context={})
#-------------------
#User Authentication
#-------------------
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
#-------------------
