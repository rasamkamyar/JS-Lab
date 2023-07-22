function middleNumber(input1, input2, input3) {
    if (input1 > input2 && input1 < input3 || input1 < input2 && input1 > input3) {
        return input1;
    }

    if (input2 > input1 && input2 < input3 || input2 < input1 && input2 > input3) {
        return input2;
    }

    if (input3 > input2 && input3 < input1 || input3 < input2 && input3 > input1) {
        return input3;
    }
};