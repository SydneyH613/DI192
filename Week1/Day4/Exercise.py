# What are you learning?

def display_message():
    print("I am learning about functions in Python.")

display_message()

# What is your favorite book?

def favorite_book(title):
    print(f"One of my favorite books is {title}")

favorite_book("The Hobbit")

# Some Geography

def describe_city(city, country=None):
    if not country:             
        country = "Unknown"
    print(f"{city} is in {country}.")

describe_city("New York")
describe_city("Sydney", "Australia")

# Random

import random 

def number():
    generated_number = random.randint(1,100)
    while True:
        user_input = input("please guess a number from 1-100: ")
        if user_input == str(generated_number):
            print("Success!")
            break
        else:
            print(f"Fail: your number: {user_input}, random number: {generated_number}")
            break
number()


# Personalized Shirts

def make_shirt(size, text):
    size = input("What size do you need?")
    text = input("What text do you want on the shirt?")
    print(f"You have ordered a size {size} with the text: {text}.")

make_shirt("size", "text")   

# Magicians

magician_names = [
    "Harry Houdined",
    "David Blaine",
    "Criss Angel", 
]


# Temperature Advice

import random

def get_random_temp():
    return random.randint(-10, 40)

def main():
    temp = get_random_temp()
    print(f"The temperature right now is {temp} degrees Celsius.")
    
    if temp < 0:
        print("Brrr, that's freezing! Wear some extra layers today.")
    elif 0 <= temp <= 16:
        print("Quite chilly! Don't forget your coat.")
    elif 16 < temp <= 23:
        print("Nice weather.")
    elif 23 < temp <= 32:
        print("A bit warm, stay hydrated.")
    else:  # temp > 32
        print("It's really hot! Stay cool.")

main()




    
