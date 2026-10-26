


//  challenge 1 


type Shape =
  |{ kind: "circle"; radius: number }
  |{ kind: "square"; size: number }
  |{ kind: "triangle"; base: number; height: number };

function area(s: Shape): number {
  switch (s.kind) {
    case "circle":
      return Math.PI * s.radius ** 2;
    case "square":
      return s.size ** 2;
    case "triangle":
        return s.base * s.height;   

    default:
        return 0;    
  }
}

// The triangle case is missing, so the function can return undefined. Add the case. To catch this in future, add a default that assigns s to a never variable.



// challenge 2 


interface User { 
    id: number; 
    name: string 
}

async function fetchUser(id: number): Promise<User> {
  const res = await fetch(`/api/users/${id}`);
  return res.json();
}

// An async function must return Promise<User>, not User. Also, res.json() returns Promise<any>, so consider as Promise<User> or validating the data.


// Challenge 3 


const config = { mode: "dark", retries: 3 } as const;

const newConfig = {
    ...config,
    retries : 5
}

// as const makes every property readonly, so the assignment errors. Remove as const or don’t reassign.
