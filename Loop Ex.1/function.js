function textReverse(x) {
    let input = (x.length) - 1;

    let sum = "";
    for (input; input >= 0; input--) {

        sum = sum + x[input];
    }
    return sum;

}