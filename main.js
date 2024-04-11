function calc(btn){
    if(btn == "="){
        document.dentaku2.display.value = eval(document.dentaku2.display.value);
    }
    else if(btn == 'CLR'){
        document.dentaku2.display.value = "";
    }
    else{
        document.dentaku2.display.value += btn;
    }
}