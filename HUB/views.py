from telnetlib import LOGOUT
from django.shortcuts import render, redirect
from django.template import context


from HUB.forms import *
from HUB.square import *
from HUB.models import *
from django.contrib import messages

from django.contrib.auth import authenticate, login, logout

from HUB.decorators import unauthenticated_user

# Create your views here.
def home(request):

    context = {}
    return render(request, 'home.html', context)

def menu(request):
    #Queries
    all_food = Food.objects.all()
    all_coffee = Coffees.objects.all()
    
    #forms
    order_item_form = OrderItemForm()

    #OrderItem Logic
    if request.method == 'POST':
        obj = request.POST.get('id')
        OI_form = order_item_form(request.POST)
        if OI_form.is_valid():
            instance = OI_form.save()
            if obj in all_coffee:
                instance.coffee = obj
            elif obj in all_food:
                instance.food = obj
            instance.save()
            return redirect('cart-page')

    context = {
        'all_coffee': all_coffee, 
        'all_food': all_food
        }
    return render(request, 'menu.html', context)

def cart(request):
    #Query
    cart_items = OrderItem.objects.all()

    #form
    order_form = OrderForm()

    context = {
        'cart_items': cart_items
    }
    return render(request, 'cart.html', context)

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