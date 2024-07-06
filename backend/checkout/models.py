class Product:
    def __init__(self, name, unit_price):
        self.name = name
        self.unit_price = unit_price

class SpecialPrice:
    def __init__(self, quantity, price):
        self.quantity = quantity
        self.price = price

class Checkout:
    def __init__(self):
        self.products = {
            'A': Product('A', 50),
            'B': Product('B', 30),
            'C': Product('C', 20),
            'D': Product('D', 15)
        }
        self.special_prices = {
            'A': SpecialPrice(3, 130),
            'B': SpecialPrice(2, 45)
        }
        self.items = {}

    def validate_item(self, item):
        if item not in self.products:
            return "Error: Invalid item"
           
    def add_item(self, item):
        if item not in self.products:
            return False
        if item in self.items:
            self.items[item] += 1
        else:
            self.items[item] = 1
        return True    

    def calculate_total(self):
        total = 0
        for item, count in self.items.items():
            product = self.products[item]
            if item in self.special_prices:
                special_price = self.special_prices[item]
                total += (count // special_price.quantity) * special_price.price
                total += (count % special_price.quantity) * product.unit_price
            else:
                total += count * product.unit_price
        return total