from django.shortcuts import render
from django.template import context

# Create your views here.
def home(request):

    context = {}
    return render(request, 'home.html', context)