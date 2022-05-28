from django.shortcuts import render
from django.http import HttpResponse

def index(request) :
    my_dict = { 'inject_var' : "This is an injected content"}
    return render(request,'index.html',context=my_dict)

def tictactoe(request) :
    return render(request,'tictactoe.html')

def wordle(request) :
    return render(request,'wordle.html')