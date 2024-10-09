from django.shortcuts import render
from rest_framework import generics
from .models import *
from .serializers import *

# Create your views here.
class  UsuarioViewSet(generics.ListCreateAPIView):
    queryset = Usuario.objets.all()
    serializer_class = UsuarioSerializer

class  AlumnoViewSet(generics.ListCreateAPIView):
    queryset = Alumno.objets.all()
    serializer_class = AlumnoSerializer 