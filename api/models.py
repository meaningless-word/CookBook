from django.db import models

# Create your models here.
class Cuisine(models.Model):
    title = models.CharField(max_length=30, unique=True, verbose_name="Кухня")
    
    class Meta:
        ordering = ['title',]
    
    def __str__(self):
        return f'{self.title}'
    

class Category(models.Model):
    title = models.CharField(max_length=30, unique=True, verbose_name="")
    
    class Meta:
        ordering = ['title',]
    
    def __str__(self):
        return f'{self.title}'
    
class Recipe(models.Model):
    title = models.CharField(max_length=255, default="", verbose_name="Блюдо")
    ingredients = models.TextField()
    preparative = models.TextField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    cuisine = models.ForeignKey(Cuisine, on_delete=models.CASCADE)
    
    def __str__(self):
        return f'from:{self.cuisine.id}\ncat.:{self.category.id}\n{self.title}'
