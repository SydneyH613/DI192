text = "hello, world"
print (text.replace('world', 'Python'))
print(text)
print(text.count('1'))
print('Ha' * 3)

multiline = """
line 1
line 2
"""
print(multiline)
print(text[0])
print(text[-1])



age = 25
temp = 25
year = 2026
print(type(year))

price = 19.99
pi = 3.14159
print(type(pi))

#Booleans - True/False
is_sunny = True 
is_raining = False

print(type(is_sunny))
print( 5 > 3)
print(10<5)
print(5 != 3)

# ==
# !=
# >
# <
# >=
# <=


# Logical Operators - and / or / not
print (True and True) 
print (True or False)
print (False or True) 
print (True and False)



# type casting
str_num = "100"
print(int(str_num) + 1)
num=42
print(str(num) + ' is the answer')
print(bool(1))
print(bool(0))
print(bool(-1))
name = 'Alice'
age = 25
height = 186.5
is_student = True
max_attemps = 5

a,b,c = 1,2,3
print(a,b,c)
a, b = b, a
print(a)

# incrementing
counter = 0
counter = counter + 1
counter += 1
print(counter)

# string formating 
first = 'John' 
last = 'Due'
text1 = "hello," + " " + first + " " + last
print(text1)
text3 = "hello, {} {}". format(last, first)
print(text3)

text4 = f"hello, {first} {last}"
print(text4)

price = 19.99
quantity = 3
total = f"Total: ${price *quantity}"
print(total)

pi = 3.14159
print(f"{pi:.2f}")

name = input("What is your name? ")
print(f"Hello, {name}")
age = input("what is your age?")
print(f"My age is, {age}")

age=input
if age >= 18:
    print("You can vote!")

elif age < 18:
    print("You cannot Vote")

