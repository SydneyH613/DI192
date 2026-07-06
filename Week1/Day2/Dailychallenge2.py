from datetime import datetime

# Ask for birthdate
birthdate_input = input("Enter your birthdate (DD/MM/YYYY): ")

# Convert string to date
birthdate = datetime.strptime(birthdate_input, "%d/%m/%Y")

# Calculate age
today = datetime.today()
age = today.year - birthdate.year

# Adjust if birthday hasn't happened yet this year
if (today.month, today.day) < (birthdate.month, birthdate.day):
    age -= 1

# Number of candles = last digit of age
candles = age % 10

# Function to print cake
def print_cake(candle_count):
    candle_line = "       " + "_" * 3 + "i" * candle_count + "_" * 3
    print(candle_line)
    print("      |:H:a:p:p:y:|")
    print("    __|___________|__")
    print("   |^^^^^^^^^^^^^^^^^|")
    print("   |:B:i:r:t:h:d:a:y:|")
    print("   |                 |")
    print("   ~~~~~~~~~~~~~~~~~~~")

# Check leap year
def is_leap_year(year):
    return (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)

# Print cake (twice if leap year)
if is_leap_year(birthdate.year):
    print_cake(candles)
    print()  # space between cakes
    print_cake(candles)
else:
    print_cake(candles)

