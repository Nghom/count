function tens (ab1,ab2) {
    var answ = "", un = unit(ab1) ,deux = unit(ab2);

    if (ab1 == 1 && ab2 == 0) {
        answ = "Ten ";
    } else if (ab1 == 1 && ab2 == 1) {
        answ = "Eleven ";
    } else if (ab1 == 1 && ab2 == 2) {
        answ = "Twelve ";
    } else if (ab1 == 1 && ab2 == 3) {
        answ = "Thirteen ";
    } else if (ab1 == 1 && ab2 == 4) {
        answ = "Fourteen ";
    } else if (ab1 == 1 && ab2 == 5) {
        answ = "Fifteen ";
    } else if (ab1 == 1 && ab2 == 6) {
        answ = "Sixteen ";
    } else if (ab1 == 1 && ab2 == 7) {
        answ = "Seventeen ";
    } else if (ab1 == 1 && ab2 == 8) {
        answ = "Eighteen ";
    } else if (ab1 == 1 && ab2 == 9) {
        answ = "Nineteen ";
    } else if (ab1 == 2 && ab2 == 0) {
        answ = "Twenty " ;
    } else if (ab1 == 2 && ab2 != 0) {
        answ = "Twenty " + deux;
    } else if (ab1 == 3 && ab2 == 0) {
        answ = "Thirty " ;
    } else if (ab1 == 3 && ab2 != 0) {
        answ = "Thirty " + deux;
    } else if (ab1 == 4 && ab2 == 0) {
        answ = "Fourty " ;
    } else if (ab1 == 4 && ab2 != 0) {
        answ = "Fourty " + deux;
    } else if (ab1 == 5 && ab2 == 0) {
        answ = "Fifty " ;
    } else if (ab1 == 5 && ab2 != 0) {
        answ = "Fifty " + deux;
    } else if (ab1 == 6 && ab2 == 0) {
        answ = "Sixty " ;
    } else if (ab1 == 6 && ab2 != 0) {
        answ = "Sixty " + deux;
    } else if (ab1 == 7 && ab2 == 0) {
        answ = "Seventy " ;
    } else if (ab1 == 7 && ab2 != 0) {
        answ = "Seventy " + deux;
    } else if (ab1 == 8 && ab2 == 0) {
        answ = "Eighty " ;
    } else if (ab1 == 8 && ab2 != 0) {
        answ = "Eighty " + deux;
    } else if (ab1 == 9 && ab2 == 0) {
        answ = "Ninety " ;
    } else if (ab1 == 9 && ab2 != 0) {
        answ = "Ninety " + deux;
    }

    return answ;
}