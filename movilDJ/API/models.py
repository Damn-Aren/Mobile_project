from django.db import models

# Create your models here.

class Usuario(models.Model):
    id= models.AutoField(primary_key= True)
    nombre= models.CharField(max_length=45, null= False)
    apellido= models.CharField(max_length=50, null= False)
    edad= models.IntegerField()

    def __str__(self):
        return self.nombre

class Alumno(models.Model):
    id= models.AutoField(primary_key= True)
    nombre= models.CharField(max_length=45, null= False)
    apellido= models.CharField(max_length=50, null= False)
    rut= models.CharField(max_length=9, null= False)

    def __str__(self):
        return self.nombre+" "+self.apellido