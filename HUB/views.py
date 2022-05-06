import imp
import json
import ast
from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from django.urls import reverse
from django.views.decorators.csrf import csrf_exempt
from HUB import decorators
from django.http import HttpResponseRedirect

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
    if request.user.is_authenticated:
        #POST
        if request.method == "POST":
            #JSON Data
            data = request.body
            new_data = ast.literal_eval(data.decode('utf-8'))

            customer = request.user
            user_order = Order(user=customer)
            user_order.save()

            x = 0
            while x < len(new_data.keys()):
                obj_title = new_data[x]["title"]
                obj_price = new_data[x]["price"]
                obj_quantity = new_data[x]["quantity"]
                obj_extra = new_data[x]["extra"]
                total = round(float(obj_price.replace("$", "")))
                m = OrderItem(order=user_order, title=obj_title, price=total, quantity=obj_quantity, extra=obj_extra)
                m.save()
                x += 1
            
            return redirect('checkout-page')

    return render(request, 'cart.html')

def checkout(request):

    context = {}
    return render(request, 'checkout.html', context)

def gallery(request):

    context = {}
    return render(request, 'gallery.html', context)


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
