from .models import *
from rest_framework import serializers

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ['nombre', 'apellido','edad']

class AlumnoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Alumno
        fields = "__all__"