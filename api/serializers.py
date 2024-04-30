from rest_framework import serializers
from .models import (Cuisine, Category, Recipe)

class CuisuneSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cuisine
        fields = ['id', 'title']
        
        
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'title']
        
        
class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = ['id', 'title', 'ingredients', 'preparative', 'cuisine', 'category']