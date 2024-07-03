from django.test import TestCase
from django.urls import reverse
from rest_framework.test import APIClient
from rest_framework import status

class CheckoutAPITests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.add_item_url = reverse('add-item')
        self.total_url = reverse('total')

    def test_add_single_item(self):
        response = self.client.post(self.add_item_url, {'items': ['A']}, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_add_multiple_items(self):
        response = self.client.post(self.add_item_url, {'items': ['A', 'B', 'C', 'D']}, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    #AAABBD
    def test_get_total(self):
        self.client.post(self.add_item_url, {'items': ['A', 'A', 'A', 'B', 'B', 'D']}, format='json')
        response = self.client.get(self.total_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['total'], 190)

    #AAABB
    def test_add_and_get_total(self):
        self.client.post(self.add_item_url, {'items': ['A','A','A', 'B','B']}, format='json')
        response = self.client.get(self.total_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['total'], 175)

    #AAAAA
    def test_add_and_get_total_2(self):
        self.client.post(self.add_item_url, {'items': ['A','A','A', 'A','A']}, format='json')
        response = self.client.get(self.total_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['total'], 230)    

    #CHECK EMPTY ITEMS
    def test_empty_cart_and_get_total(self):
        self.client.post(self.add_item_url, {'items': []}, format='json')
        response = self.client.get(self.total_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)


