from rest_framework.serializers import ModelSerializer
from .models import Client, Car, Rental

class ClientSerializer(ModelSerializer):
    class Meta:
        model = Client
        fields = ('first_name', 'last_name', 'age', 'PESEL', 'telephone_number', 'email', 'locality', 'street', 'zip_code')

class CarSerializer(ModelSerializer):
    class Meta:
        model = Car
        fields = '__all__'

class RentalSerializer(ModelSerializer):
    class Meta:
        model = Rental
        fields = '__all__'