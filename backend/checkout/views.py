from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Checkout

checkout = Checkout()

class AddItemView(APIView):
    def post(self, request):
        global checkout  
        checkout = Checkout()
        items_string = request.data.get('items', '')  
        items = list(items_string)  
        for item in items:
            checkout.add_item(item)
        return Response({"message": "Items added successfully"}, status=status.HTTP_200_OK)

class TotalView(APIView):
    def get(self, request):
        total = checkout.calculate_total()
        return Response({"total": total}, status=status.HTTP_200_OK)
