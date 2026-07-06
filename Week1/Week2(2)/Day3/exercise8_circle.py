import math


class Circle:
    def __init__(self, radius):
        self.radius = radius

    @property
    def diameter(self):
        return self.radius * 2

    @diameter.setter
    def diameter(self, diameter):
        self.radius = diameter / 2

    def area(self):
        return math.pi * self.radius ** 2

    def __str__(self):
        return f'Circle with radius: {self.radius}, diameter: {self.diameter}'

    def __repr__(self):
        return f'Circle with radius: {self.radius}, diameter: {self.diameter}'

    def __add__(self, other):
        return Circle(self.radius + other.radius)

    def __gt__(self, other):
        return self.radius > other.radius

    def __eq__(self, other):
        return self.radius == other.radius

    def __lt__(self, other):
        return self.radius < other.radius


c1 = Circle(5)
c2 = Circle(10)
c3 = Circle(5)

print(c1)
# Circle with radius: 5, diameter: 10

c4 = Circle(0)
c4.diameter = 8
print(c4)
# Circle with radius: 4.0, diameter: 8.0

print(c1.area())
# 78.53981633974483

c5 = c1 + c2
print(c5)
# Circle with radius: 15, diameter: 30

print(c1 > c2)
# False

print(c1 == c3)
# True

circles = [c2, c1, c4, c5, c3]
sorted_circles = sorted(circles)
print(sorted_circles)
