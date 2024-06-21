// Product.ts

interface Product {
  id: number;
  name: string;
  price: number;
  getCategory(): string;
}

class Electronics implements Product {
  id: number;
  name: string;
  price: number;
  warranty: number; // warranty in months

  constructor(id: number, name: string, price: number, warranty: number) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.warranty = warranty;
  }

  getCategory(): string {
    return "Electronics";
  }
}

class Groceries implements Product {
  id: number;
  name: string;
  price: number;
  expiryDate: Date;

  constructor(id: number, name: string, price: number, expiryDate: Date) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.expiryDate = expiryDate;
  }

  getCategory(): string {
    return "Groceries";
  }
}

// Example usage
const laptop = new Electronics(1, "Laptop", 1500, 24);
const apple = new Groceries(2, "Apple", 1, new Date("2023-12-31"));

console.log(laptop);
console.log(apple);
console.log(laptop.getCategory()); // Output: Electronics
console.log(apple.getCategory()); // Output: Groceries
