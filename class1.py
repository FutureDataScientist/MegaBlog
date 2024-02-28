class Person:
    def __init__(self,first_name,last_name,age):
        self.first_name = first_name    
        self.last_name = last_name
        self.age=age
    def full_name(self):
        return f"{self.first_name,self.last_name}"
    def is_above_18(self):
        return self.age >18
p1=Person('harsh','shukla',24)
t=p1.full_name()
print(t)
m=p1.is_above_18()
print(m)
class circle:
    pi=3.14
    def __init__(self,radius):
        self.radius=radius
    def calc_circumference(self):
        return 2*circle.pi*self.radius

c=circle(4)
c1=circle(5)
print(c.calc_circumference())
