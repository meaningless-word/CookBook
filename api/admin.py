from django.contrib import admin
from .models import (Cuisine, Category, Recipe)

# Register your models here.
admin.site.register(Category)
admin.site.register(Cuisine)
admin.site.register(Recipe)