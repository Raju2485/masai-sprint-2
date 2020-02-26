//declaring object to store inventory values
var obj ={rice:0, sugar:0, teaPowder:0, ginger:0,}

//getting stock values and assigning to object
function pushInventory(){
    var getItem = document.getElementById("addStock").value;
    var getValue = document.getElementById("inputValue").value;

    if(getItem == "rice" && getValue > 0){
        obj.rice = getValue;
        document.getElementById("balanceRice").innerHTML = "Rice: " + obj.rice + " Kgs";
        alert("Added Rice "+ getValue + " Kgs")
    }
    else if(getItem == "sugar" && getValue > 0){
        obj.sugar = getValue;
        document.getElementById("balanceSugar").innerHTML = "Sugar: " + obj.sugar + " Kgs";
        alert("Added Sugar "+ getValue + " Kgs")
    }
    else if(getItem == "teaPowder" && getValue > 0){
        obj.teaPowder = getValue;
        document.getElementById("balanceTeaPowder").innerHTML = "Tea Powder: " + obj.teaPowder + " Kgs";
        alert("Added Tea Powder "+ getValue + " Kgs")
    }
    else if(getItem == "ginger" && getValue > 0){
        obj.ginger = getValue;
        document.getElementById("balanceGinger").innerHTML = "Ginger: " + obj.ginger + " Kgs";
        alert("Added Ginger "+ getValue + " Kgs")
    }
    else {

        alert("Please enter a valid quantity")
    }
   
}



//getting sales values and substracting from object 
function pushSales(){
    var getItem = document.getElementById("addSales").value;
    var getValue = document.getElementById("soldValue").value;

    if(getItem == "rice" && getValue > 0 && getValue <= obj.rice   ){
            obj.rice -= getValue;
            document.getElementById("balanceRice").innerHTML = "Rice: " + obj.rice + " Kgs";
            alert("Sold Rice "+ getValue + " Kgs")
    }

    else if (getItem == "rice" && getValue > 0 && getValue > obj.rice ){
            alert("Stock is not available.") 
    }  

    else if(getItem == "sugar" && getValue > 0 && getValue <= obj.sugar ){
            obj.sugar -= getValue;
            document.getElementById("balanceSugar").innerHTML = "Sugar: " + obj.sugar + " Kgs";
            alert("Sold Sugar "+ getValue + " Kgs")
    }

    else if (getItem == "sugar" && getValue > 0 && getValue > obj.sugar){
            alert("Stock is not available.")  
    }

    else if(getItem == "teaPowder" && getValue > 0 && getValue <= obj.teaPowder ){
            obj.teaPowder -= getValue;
            document.getElementById("balanceTeaPowder").innerHTML = "Tea Powder: " + obj.teaPowder + " Kgs";
            alert("Sold Tea Powder "+ getValue + " Kgs")
    }
    else if (getItem == "teaPowder" && getValue > 0 && getValue > obj.teaPowder ){
            alert("Stock is not available.")  
    }

    else if(getItem == "ginger" && getValue > 0 && getValue <= obj.ginger){
            obj.ginger -= getValue;
            document.getElementById("balanceGinger").innerHTML = "Ginger: " + obj.ginger + " Kgs";
            alert("Sold Ginger "+ getValue + " Kgs")
    }

    else if (getItem == "ginger" && getValue > 0 && getValue > obj.ginger){
            alert("Stock is not available.")  
    }

    else {
          alert("Please enter valid quantity")
    }
    
}


// changing the color if the stock is running low.



