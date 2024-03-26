from rest_framework.serializers import ModelSerializer
from .models import Client, Car, Rental

class ClientSerializer(ModelSerializer):
    class Meta:
        model = Client
        fields = '__all__'

class CarSerializer(ModelSerializer):
    class Meta:
        model = Car
        fields = '__all__'

class RentalSerializer(ModelSerializer):
    class Meta:
        model = Rental
        fields = '__all__'