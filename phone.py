class phone:
    def __init__(self,brand,model_name,price):
        self.brand = brand
        self.model_name = model_name
        self.price = price
    def make_a_call(self,phone_number):
        print(f"calling{phone_number}...")
    def full_name(self):
        return f"{self.brand} {self.model_name}"
    
class smartphone(phone):
    def __init__(self,brand,model_name,price,ram,im,rc):
       # phone.__init__(self,brand,model_name,price)
       super().__init__(brand,model_name,price)
       self.ram = ram
       self.im = im
       self.rc = rc
       
    def full_name(self):
    

phone=phone('nokia','1100','1000')
smartphone=smartphone('oneplus','s',30000,'6 GB','64 GB','20mp')
print(phone.full_name())
print(smartphone.full_name())
print(help(smartphone))