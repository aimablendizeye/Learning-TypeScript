
// Create Mappet type that makes all the properties optional 


interface Person {
    id : number;
    name : string;
    age : number;
    address : string;
}

type PartialPerson = {
     [P in keyof Person]?: Person[P]
}

function getUserInf (value: PartialPerson){
    if (typeof value.name === "string"){
        return value.name.length;
    }
}