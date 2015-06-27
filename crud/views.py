from crud.models import Person
from django.http.response import HttpResponse, HttpResponseRedirect
from django.template import loader, Context, RequestContext

def index(request):
#     t = loader.get_template('index.html')
#     c =  Context({'message': 'Hello world!'}) 
#     return HttpResponse(t.render(c))
    t = loader.get_template('index.html')
    allPersons = Person.objects.all() 
    c = Context({'people':allPersons})
    return HttpResponse(t.render(c)) 

def insert(request):
    if request.method == "POST":                                                                                                                                                                                                    
        p = Person(
                   name = request.POST['name'],
                   phone = request.POST['phone'],
                   age = request.POST['age'])
        p.save()
        
    t = loader.get_template('insert.html')
    c = RequestContext(request)
    return HttpResponse(t.render(c))
    
def delete(request, person_id):
    p = Person.objects.get(pk=person_id)
    p.delete()
    return HttpResponseRedirect('/')
    
def edit(request, person_id):
    p = Person.objects.get(pk=person_id)       
    if request.method == "POST":                                                                                                                                                                                
        p.name = request.POST['name']
        p.phone = request.POST['phone']
        p.age = request.POST['age']
        p.save()
    t = loader.get_template('insert.html')
    c = RequestContext(request, {'person':p})
    return HttpResponse(t.render(c))