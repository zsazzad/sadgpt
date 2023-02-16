from django.shortcuts import render

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
import random


# Create your views here.

def chatview(request):
    return render(request,'index.html')

@csrf_exempt
def chatgpt(request):
    if request.method == "POST":
        message = json.loads(request.body)["message"]
        num_string = random.randint(1,10)
        guau_string = ["Guau "]
        for i in range(num_string):
            guau_string.append("guau")
        guau_string = " ".join(guau_string)
        return JsonResponse({"message": guau_string})