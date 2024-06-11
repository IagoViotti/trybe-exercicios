from events.models import Event
from django.shortcuts import render


# Create your views here.
def index(request):
    context = {'company': 'Trybe', 'events': Event.objects.all()}
    return render(request, 'home.html', context)


def about(request):
    return render(request, 'about.html')
