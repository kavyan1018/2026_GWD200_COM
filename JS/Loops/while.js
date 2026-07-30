// 1st way 

let i = 0;
// 0 1 2 3 4 
while (i < 5) {

    let j = 1;
    // 1 2 
    while (j < 3) {
        document.write("*");
        j++;
    }

    document.write("<br>");
    i++;
}