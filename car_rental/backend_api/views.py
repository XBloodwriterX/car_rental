from django.shortcuts import render
from rest_framework import status
from rest_framework.views import APIView
from .models import *
from .serializer import *
from rest_framework.response import Response

# Create your views here.

class ClientView(APIView):
    def get(self, request):
        output = [
            {
                "id": output.id,
                "first_name": output.first_name,
                "last_name": output.last_name,
                "age": output.age,
                "PESEL": output.PESEL,
                "telephone_number": output.telephone_number,
                "email": output.email,
                "locality": output.locality,
                "street": output.street,
                "zip_code": output.zip_code,
                "notes": output.notes
            } for output in Client.objects.all()
        ]
        return Response(output)

    def post(self, request):
        serializer = ClientSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)

class CarView(APIView):
    def get(self, request):
        output = [
            {
                "id": output.id,
                "license_plate": output.license_plate,
                "mark": output.mark,
                "model": output.model,
                "VIN": output.VIN,
                "price_per_hour": output.price_per_hour,
                "is_useful": output.is_useful,
                "notes": output.notes
            } for output in Car.objects.all()
        ]
        return Response(output)

    def post(self, request):
        serializer = CarSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)

class RentalView(APIView):
    def get(self, request):
        output = [
            {
                "id": output.id,
                "client_id": output.client_id,
                "car_id": output.car_id,
                "rental_date": output.rental_date,
                "return_term": output.rental_term,
                "return_date": output.return_date,
                "rental_cost": output.rental_cost
            } for output in Rental.objects.all()
        ]
        return Response(output)

    def post(self, request):
        serializer = RentalSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)