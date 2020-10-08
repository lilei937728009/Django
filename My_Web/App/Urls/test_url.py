# -*- coding: utf-8 -*-
'''
Created To By [xiao lei] 2020-10-06-15:57
'''


from django.urls import path
from App.Views import test_views

"""测试路由"""
urlpatterns = [
    path("",test_views.test_Login),
    path("test_AddUser",test_views.test_AddUser),
    path("test_ClearUser",test_views.test_ClearUser),
    path("test_SeeUserName",test_views.test_SeeUserName),
]