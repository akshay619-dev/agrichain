from django.urls import path
from .views import AddItemView, TotalView

urlpatterns = [
    path('add-item/', AddItemView.as_view(), name='add-item'),
    path('total/', TotalView.as_view(), name='total'),
]
