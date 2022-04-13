from telnetlib import LOGOUT
from django.shortcuts import render, redirect
from django.template import context
from django.views.generic import View
from requests import request


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

class MenuView(View):
    #forms
    coffee_form = CoffeeOrderForm()
    # food_form = FoodOrderForm()

    def get(self, request, *args, **kwargs):
        all_coffee = Coffee.objects.all()
        all_food = Food.objects.all()
        context = {
            'all_coffee': all_coffee,
            'all_food': all_food
        }
        return render(request, 'menu.html', context)

    def Coffee_post(self, request, *args, **kwargs):
        obj = request.POST.get('id')
        CForm = CoffeeOrderForm(request.POST)
        if CForm.is_valid():
            instance = CForm.save()
            if CForm.size == 'small':
                instance.price = obj.s_price
            elif CForm.size == 'medium':
                instance.price = obj.m_price
            elif CForm.size == 'large':
                instance.price = obj.l_price
            instance.save()
            messages.info(request, "Added to Cart")
            return redirect('menu-page')



def gallery(request):

    context = {}
    return render(request, 'gallery.html', context)

def about(request):
    context = {}
    return render(request, 'about.html', context)

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

