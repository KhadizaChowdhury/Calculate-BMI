function multiplicationTable(num) {
    let i = 1;
    for (i = 1; i <= 10; i++) {
        let product = num * i;
        
        console.log(`${num}  x  ${i}  =  ${product}`);
        //document.write(`${num}  x  ${i}  =  ${product}`)
    }
    //document.write("<br/>")
}
multiplicationTable(5);
// multiplicationTable(25);
// multiplicationTable(55);