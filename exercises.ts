


interface Malleable {
    name: string;
    age: number;
    email: string;
}

interface futureMalliable extends Malleable {
      marks(user:string , age:number):void
}

let user: Malleable = {
    name: "Aimable",
    age: 24,
    email: "demo@gmail.com"
};

console.log(user.name)