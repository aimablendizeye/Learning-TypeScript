
        occupation: 'Astronaut'
    }
];

export function logPerson(user:any):void {
    console.log(` - ${user.name}, ${user.age}`);
}

console.log('Users:');
users.forEach(logPerson);