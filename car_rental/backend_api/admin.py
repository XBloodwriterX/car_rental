from django.contrib import admin

from backend_api.models import *

# Register your models here.
@admin.register(Car)
class CarAdmin(admin.ModelAdmin):
    list_display = ('id', 'licence_plate', 'mark', 'model', 'VIN', 'price_per_hour', 'is_useful', 'notes')

@admin.register(Client)
class ClientAdmin(admin.ModelAdmin):
    list_display = ('id', 'first_name', 'last_name', 'age', 'PESEL', 'telephone_number', 'email', 'locality', 'street',
                    'zip_code', 'notes')
    search_fields = ('id', 'first_name', 'last_name', 'age', 'PESEL', 'telephone_number', 'email', 'locality', 'street',
                    'zip_code')

@admin.register(Rental)
class RentalAdmin(admin.ModelAdmin):
    list_display = ('id', 'client_id', 'car_id', 'rental_date', 'return_term', 'return_date', 'rental_cost')
