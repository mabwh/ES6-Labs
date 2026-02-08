let employee = {
    name: '',
    address: '',
    age: ''
}

let proxy = new Proxy(employee, {
    set(target, prop, value)
    {
        switch (prop)
        {
            case 'name':
                if(typeof value === 'string'
                     && value.length >= 7)
                    {
                        Reflect.set(target, prop, value);
                    }
                break;
            case 'address':
                    if(typeof value === 'string')
                    {
                        Reflect.set(target, prop, value);
                    }
                break;
            case 'age':
                    if(typeof value === 'number' 
                        && value >= 25 
                        && value <= 60)
                    {
                        Reflect.set(target, prop, value);        
                    } 
                break;
        }
    }
});

console.log(employee.name, employee.age, employee.address);

proxy.name = 'Ali';
proxy.age = 13;
proxy.address = 555;
console.log(employee.name, employee.age, employee.address);


proxy.name = 'Mohammad';
proxy.age = 25;
proxy.address = 'Mallawi-AlMinya';
console.log(employee.name, employee.age, employee.address);

