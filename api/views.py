from django.shortcuts import render
from rest_framework import viewsets
from drf_spectacular.utils import OpenApiParameter, extend_schema_view, extend_schema

from . import serializers
from . import models

#Create your views here.
@extend_schema_view(
    list=extend_schema(
        summary="Список кухонь",
    ),
    retrieve=extend_schema(
        summary="кухня по id",
        parameters=[
            OpenApiParameter(name='id', location='path', type=int, required=True, description='id записи'),
        ]
    ),
)
class CuisuneViewSet(viewsets.ModelViewSet):
    queryset = models.Cuisine.objects.all()
    serializer_class = serializers.CuisuneSerializer


@extend_schema_view(
    list=extend_schema(
        summary="Список категорий",
        parameters=[
            OpenApiParameter(name='cuisine', location='query', type=int, required=False, allow_blank=True, description='список категорий, рецепты которых созаржатся в указанной "кухне"'),
        ]
    ),
    retrieve=extend_schema(
        summary="категория по id",
        parameters=[
            OpenApiParameter(name='id', location='path', type=int, required=True, description='id записи'),
        ]
    ),
)
class CategoryViewSet(viewsets.ModelViewSet):
    queryset = models.Category.objects.all()
    serializer_class = serializers.CategorySerializer
    
    def get_queryset(self):
        queryset = models.Category.objects.all()
        cuisine_id = self.request.query_params.get('cuisine')
        if cuisine_id:
            queryset = models.Category.objects.filter(id__in=models.Recipe.objects.filter(cuisine_id=cuisine_id).values('category')) 
        return queryset
    
    
@extend_schema_view(
    list=extend_schema(
        summary="Список рецептов",
        parameters=[
            OpenApiParameter(name='cuisine', location='query', type=int, required=False, allow_blank=True, description='фильтр по полю "кухня"'),
            OpenApiParameter(name='category', location='query', type=int, required=False, allow_blank=True, description='фильтр по полю "категория"')
        ]
    ),
    retrieve=extend_schema(
        summary="рецепт по id",
        parameters=[
            OpenApiParameter(name='id', location='path', type=int, required=True, description='id записи'),
        ]
    ),
)
class RecipeViewSet(viewsets.ModelViewSet):
    queryset = models.Recipe.objects.all()
    serializer_class = serializers.RecipeSerializer
    
    def get_queryset(self):
        queryset = models.Recipe.objects.all()
        cuisine_id = self.request.query_params.get('cuisine')
        if cuisine_id:
            queryset = queryset.filter(cuisine__id=cuisine_id)
        category_id = self.request.query_params.get('category')
        if category_id:
            queryset = queryset.filter(category__id=category_id)
        return queryset

