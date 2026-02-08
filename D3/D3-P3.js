//3)

function* FibonacciSeriesMaxCount(maxCount)
{
    let count = 0;
    let maxNotReched = true;
    let current = 1, previous = 0, next = current + previous;

    while(maxNotReched)
    {
        if(count == maxCount)
            maxNotReched = false;
        else
        {
            yield previous;
            ++count;
            current = next;
            previous = current - previous;
            next = current + previous;
        }
    }
}

function* FibonacciSeriesMaxValue(maxValue)
{
    let maxNotReched = true;
    let current = 1, previous = 0, next = current + previous;

    while(maxNotReched)
    {
        if(previous >= maxValue)
            maxNotReched = false;
        else
        {
            yield previous;
            current = next;
            previous = current - previous;
            next = current + previous;
        }
    }
}


let arr = [];
//arr[Symbol.iterator] = FibonacciSeriesMaxCount;
arr[Symbol.iterator] = FibonacciSeriesMaxValue;

//let iter = arr[Symbol.iterator](8);
// let result = iter.next();
// while(!result.done)
// {
//     console.log(result.value);
//     result = iter.next();
// }

for (let value of arr[Symbol.iterator](23))
{
    console.log(value);
}



//4)

let Employee = {
    name: 'Mohammad',
    age: 25,
    address: 'Mallawi-AlMinya'
}

Employee.numOfKeys = Object.keys(Employee).length;
Employee.i = 0;

Employee[Symbol.iterator] = function() 
{
    let keys = Object.keys(this);
    return {
        next: () =>
        {
            if(this.i == this.numOfKeys)
            {
                this.i = 0;
                return {value: undefined, done: true};
            }
            else{
                return {value: this[keys[this.i++]], done: false};
            }

        }
    }
}

for (let it of Employee)
{
    console.log(it);
}