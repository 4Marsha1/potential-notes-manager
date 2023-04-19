from django.urls import path
from .views import getNotes, createNote, getNote, deleteNote, updateNote

urlpatterns = [
    path('', view=getNotes),
    path('create/', view=createNote),
    path('note/<int:pk>/', view=getNote),
    path('delete/<int:pk>/', view=deleteNote),
    path('update/<int:pk>/', view=updateNote),
]