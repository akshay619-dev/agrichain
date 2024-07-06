from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Checkout

checkout = Checkout()

class AddItemView(APIView):
    def post(self, request):
        global checkout  
        checkout = Checkout()
        items_string = request.data.get('items', []) 
        if not items_string:
            return Response({'message': 'No items provided'}, status=status.HTTP_400_BAD_REQUEST)
        
        items = list(items_string)  
        for item in items:
            if not isinstance(item, str):
                return Response({'message': 'Invalid item type'}, status=status.HTTP_400_BAD_REQUEST)

            if checkout.validate_item(item):
                return Response({'message': 'Item not found in products'}, status=status.HTTP_400_BAD_REQUEST)
            
            checkout.add_item(item)
        return Response({"message": "Items added successfully"}, status=status.HTTP_200_OK)

class TotalView(APIView):
    def get(self, request):
        total = checkout.calculate_total()
        return Response({"total": total}, status=status.HTTP_200_OK)
