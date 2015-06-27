from django.db import models
from django.contrib import admin

class Person(models.Model):
    name = models.CharField(max_length=200)
    phone = models.CharField(max_length=15)
    age = models.IntegerField()
    
    class Meta:
        app_label = 'crud'
    
admin.site.register(Person)