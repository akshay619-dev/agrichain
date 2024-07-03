class Checkout:
    unit_prices = {
        'A': 50,
        'B': 30,
        'C': 20,
        'D': 15
    }

    special_prices = {
        'A': (3, 130),
        'B': (2, 45)
    }

    def __init__(self):
        self.items = {}

    def add_item(self, item):
        if item in self.items:
            self.items[item] += 1
        else:
            self.items[item] = 1

    def calculate_total(self):
        total = 0
        for item, count in self.items.items():
            if item in Checkout.special_prices:
                special_count, special_price = Checkout.special_prices[item]
                total += (count // special_count) * special_price
                total += (count % special_count) * Checkout.unit_prices[item]
            else:
                total += count * Checkout.unit_prices[item]
        return total
