let count = 0;
function display() {
    document.getElementById("output").innerText = count;
    
}
function plus() {
    count++;
    display();  
}
function minus() {
    if (count > 0) {
      count --;
    display();  
    }
    
}
function reset() {
    count = 0;
    display();
}