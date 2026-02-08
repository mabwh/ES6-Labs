class Shape
{
    constructor()
    {
        if (this.constructor == Shape)
        {
            throw new Error("can not take instance from abstract class Shape");
        }
    }

    calcArea()
    {
        throw new Error("Method not implemented");
    }

    calcPerim()
    {
        throw new Error("Method not implemented");
    }

    toString()
    {
        throw new Error("Method not implemented");
    }

}

class Rectangle extends Shape
{
    constructor(length = 0, width = 0)
    {
        super();
        this.length = length;
        this.width = width;
    }

    calcArea()
    {
        return this.length * this.width;
    }

    calcPerim()
    {
        return (this.length + this.width) * 2;
    }

    toString()
    {
        return `Rectangle length: ${this.length} Rectangle width: ${this.width} Rectangle area: ${this.calcArea()}`;
    }
}

class Square extends Shape
{
    constructor(side = 0)
    {
        super();
        this.side = side;
    }

    calcArea()
    {
        return this.side * this.side;
    }

    calcPerim()
    {
        return (this.side) * 4;
    }

    toString()
    {
        return `Square side length: ${this.side} Square area: ${this.calcArea()}`;
    }
}

class Circle extends Shape
{
    constructor(radius = 0)
    {
        super();
        this.radius = radius;
    }

    calcArea()
    {
        return this.radius * this.radius * 3.14;
    }

    calcPerim()
    {
        return 2 * 3.14 * this.radius;
    }

    toString()
    {
        return `Circle radius: ${this.side} Circle area: ${this.calcArea()}`;
    }
}

export {Shape, Rectangle, Square, Circle};