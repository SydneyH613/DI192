# Exercise 1: Quizz

**What is a class?**
A class is a blueprint for creating objects. It defines the attributes (data) and methods (behavior) that its instances will have.

**What is an instance?**
An instance is a specific object created from a class. Each instance has its own copy of the class's attributes, but shares the methods defined by the class.

**What is encapsulation?**
Encapsulation is bundling data and the methods that operate on that data together inside a class, while restricting direct access to some of the object's internal details (e.g., using private/protected attributes).

**What is abstraction?**
Abstraction means hiding complex implementation details and only exposing the essential features/interface of an object, so the user of a class doesn't need to know how it works internally to use it.

**What is inheritance?**
Inheritance allows a class (child/subclass) to acquire the attributes and methods of another class (parent/superclass), enabling code reuse and the creation of specialized versions of existing classes.

**What is multiple inheritance?**
Multiple inheritance is when a class inherits from more than one parent class at the same time, combining the attributes and methods of all of them.

**What is polymorphism?**
Polymorphism is the ability of different classes to be treated through the same interface, where each class provides its own implementation of a shared method (e.g., different classes each defining their own `speak()` method that behaves differently).

**What is method resolution order or MRO?**
Method Resolution Order is the order in which Python searches through a class's parent classes to find a method or attribute, especially important in multiple inheritance. Python uses the C3 linearization algorithm, and the order can be viewed with `ClassName.__mro__` or `ClassName.mro()`.
