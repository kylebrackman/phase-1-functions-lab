function distanceFromHqInBlocks(x) {
    if (x >= 42) {
        return (x - 42);
    }
    if (x < 42) {
        return (42 - x);
    }
}

function distanceFromHqInFeet(a) {
    return (distanceFromHqInBlocks(a) * 264);
}

function distanceTravelledInFeet(a, b) {
    if (a > b) {
        return ((a - b) * 264);
    }
    else if (b > a) {
        return ((b - a) * 264);
    }      
}

function calculatesFarePrice(a,b) {
    if (distanceTravelledInFeet(a,b) < 400) {
        return 0
    }
    else if (distanceTravelledInFeet(a,b) > 400 && distanceTravelledInFeet(a,b) <= 2000) {
        return (distanceTravelledInFeet(a,b) - 400) * .02
    }
    else if (distanceTravelledInFeet(a,b) > 2000 && distanceTravelledInFeet(a,b) < 2500) {
        return 25;
    }
    else if (distanceTravelledInFeet(a,b) > 2500) {
        return "cannot travel that far"
    }
}