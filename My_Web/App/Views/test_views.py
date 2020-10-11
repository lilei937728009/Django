from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt

from App.Models.test_models import Users
from random import randint
from django.http import HttpResponse


# Create your views here.

"""测试视图"""
def test_Login(request):
    return render(request, "login/login.html")

def test_AddUser(request):
    randnum = randint(1, 500)
    user = Users()
    user.u_name = f"a+{randnum}"
    user.u_age = randnum
    user.u_account_number = f"{randnum}"
    user.u_password = f"{randnum}"
    user.save()
    context ={
        "user_name":user.u_name
    }
    return render(request, "test/test.html",context=context)

def test_SeeUserName(request):

    users = Users.objects.all()
    context ={"users":users}
    return render(request,"test/see_users_name.html",context=context)


def test_ClearUser(request):
    user = Users.objects.all()
    user.delete()
    return HttpResponse("Clear Success")

@csrf_exempt
def login(request):
    if request.method == "POST":
        account = request.POST.get("account")
        password = request.POST.get("password")
        return HttpResponse(f"{account}&{password}")
    else:
        return HttpResponse("你发送了个GET请求")