class laptop:
    count_instance=0
    discount_per=10
    def __init__(self,brand,model,price):
        laptop.count_instance +=1
        self.brand = brand
        self.model = model
        self.price = price

    def apply_discount(self):
        off_price=(laptop.discount_per/100)*self.price
        return self.price-off_price
        
laptop.discount_per=5
p1=laptop('hp','yut65',56000)
print(p1.price)
print(p1.apply_discount())
print(p1.__dict__)
print(laptop.count_instance)
