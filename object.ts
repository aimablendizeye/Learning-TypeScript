class Product  {
    name:string;
    price :number;
  constructor(name:string, price:number) {
    this.name = name;
    this.price = price;
  }
  
  displaying = ():void => {
    console.log(`product is ${this.name}`)
    console.log(`You are supporsed to pay ${this.price} $`)
  }
  calculate  ():string {
    return `The total price is:${this.price * 40}`;
  }
}
const product1 = new Product ("Carrot", 56)
product1.displaying()
console.log(product1.calculate())