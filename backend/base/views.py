from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import NoteSerializer
from .models import Note

@api_view(['GET'])
def getNotes(request):
    notes = Note.objects.all()
    serializer = NoteSerializer(notes, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getNote(request,pk):
    note = Note.objects.get(id=pk)
    serializer = NoteSerializer(note, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def createNote(request):
    serializer = NoteSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data) 
    return Response('Failed to create note!')

@api_view(['PUT'])
def updateNote(request,pk):
    note = Note.objects.get(id=pk)
    serializer = NoteSerializer(instance=note,data=request.data, many=False)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data) 
    return Response('Failed to create note!')

@api_view(['DELETE'])
def deleteNote(request,pk):
    note = Note.objects.get(id=pk)
    note.delete()
    return Response('Note deleted successfully!')