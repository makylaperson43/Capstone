import imp
import json
import ast
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from django.views.decorators.csrf import csrf_exempt
from django.urls import reverse

from HUB import decorators

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
    user = request.user
    POST_COMPLETE = False
    #POST
    if request.method == "POST":
        if user.is_anonymous:
            HttpResponse("Please sign in.")
            return redirect('login-page')
        else:
            user_order = Order(user=user)
            user_order.save()

            #JSON Data
            data = request.body
            new_data = ast.literal_eval(data.decode('utf-8'))


            x = 0
            while x < len(new_data.keys()):
                obj_title = new_data[x]["title"]
                obj_price = new_data[x]["price"]
                obj_quantity = new_data[x]["quantity"]
                obj_extra = new_data[x]["extra"]
                # total += float(obj_price.replace("$", ""))
                m = OrderItem(order=user_order, title=obj_title, price=obj_price, quantity=obj_quantity, extra=obj_extra)
                m.save()
                x += 1 

    context = {}
    return render(request, 'cart.html', context)

def gallery(request):

    context = {}
    return render(request, 'gallery.html', context)


#-------------------
#Paypal payments
#-------------------
def paypalPayments(request, total):
    
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
