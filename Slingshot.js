class SlingShot {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.image1 = loadImage("sprites/sling1.png");
        this.image2 = loadImage("sprites/sling2.png");
        this.image3 = loadImage("sprites/sling3.png");

        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    attach(body) {
        this.sling.bodyA = body;
    }

    fly() {
        this.sling.bodyA = null;
    }

    display() {
        if (this.sling.bodyA) {
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke("#301608");
            if (pointA.x < 220) {
                strokeWeight(7);
                line(pointA.x - 15, pointA.y, pointB.x - 15, pointB.y);
                line(pointA.x - 15, pointA.y, pointB.x + 15, pointB.y);
                image(this.image3, pointA.x - 30, pointA.y - 10, 15, 30);
            }
            else {
                strokeWeight(7);
                line(pointA.x + 15, pointA.y, pointB.x - 15, pointB.y);
                line(pointA.x + 15, pointA.y, pointB.x + 15, pointB.y);
                image(this.image3, pointA.x + 23, pointA.y - 10, 15, 30);
            }
            pop();
        }
        image(this.image1, 200, 70, 38 * 0.75, 199 * 0.75);
        image(this.image2, 180, 70, 42 * 0.75, 123 * 0.75);
    }
}