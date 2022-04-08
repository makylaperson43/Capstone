from telnetlib import LOGOUT
from django.shortcuts import render, redirect
from django.template import context


from HUB.forms import *
from HUB.square import *
from HUB.models import *
from django.contrib import messages

from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import Group
from django.contrib.auth.forms import UserCreationForm
from HUB.decorators import unauthenticated_user
from dataclasses import dataclass

# @dataclass
# class Product:
#     name: str
#     img: str
#     price: int

# Create your views here.
def home(request):

    context = {}
    return render(request, 'home.html', context)

def cart(request):
    
    all_food = Food.objects.all()
    all_coffee = Coffees.objects.all()
    context = {'all_products': all_coffee, 'all_food': all_food}
    return render(request, 'store.html', context)

def addToCart(request):

    return render(request, 'store.html', context)

def removeFromCart(request):

    return render(request, 'store.html', context)

def gallery(request):

    context = {}
    return render(request, 'gallery.html', context)

#User Authentication
@unauthenticated_user
def registerPage(request):
    form = CreateUserForm()

    if request.method == 'POST':
        form = CreateUserForm(request.POST)
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


def aboutUs(request):
    context = {}
    return render(request, 'about.html', context)