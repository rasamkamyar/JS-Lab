


function division(input1, input2) {
    let conclusion = input1 / input2;
    return conclusion;
};



function multiply(firstnumber, secondnumber) {
    let result = firstnumber * secondnumber;
    return result;
};

function average(a, b, c) {
    let result = (a + b + c) / 3;
    return result;
}




function BMICalc(weight, height) {
    return weight / (height * height);
};


function showStatus(BMIIndex) {
    if (BMIIndex <= 18) {
        return "underweight"
    };

    if (BMIIndex > 18 && BMIIndex < 25) {
        return "normal"
    };

    if (BMIIndex >= 25) {
        return "overweight"
    }
}


function howManySeats(cap, on, wait) {
    if (cap - (on + wait) > 0) {
        return cap - (on + wait) + " are seating"
    }
    else {
        return wait - (cap - on) + " are waiting"
    }
}



function showPerimeterOrArea(width, length) {
    if (width === length) {
        return width * length
    }
    else {
        return (width + length) * 2
    }
};



function showFarToCel(far) {
    return (far - 32) * 5 / 9
};