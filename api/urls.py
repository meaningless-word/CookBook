from django.urls import path, include
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register(r'cuisine', views.CuisuneViewSet)
router.register(r'category', views.CategoryViewSet)
router.register(r'recipe', views.RecipeViewSet)
print(router.urls)

urlpatterns = [
    path('api/', include(router.urls), name='api'), 
]