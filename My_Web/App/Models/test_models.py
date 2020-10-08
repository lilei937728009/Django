from django.db import models

# Create your models here.

class Users(models.Model):
    u_name = models.CharField(max_length=8)
    u_age = models.IntegerField(default=1)
    u_account_number = models.CharField(max_length=16)
    u_password = models.CharField(max_length=12)
    #u_lv = models.IntegerField(default=0)

