print("Hello world\n" * 4 + "I love python\n" * 4)

month = int(input("Enter a month (1-12): "))

if month in [3, 4, 5]:
    season = "Spring"
elif month in [6, 7, 8]:
    season = "Summer"
elif month in [9, 10, 11]:
    season = "Autumn"
elif month in [12, 1, 2]:
    season = "Winter"
else:
    season = "Invalid month"

print(f"Month {month} is in {season}.")