function validatePizza() {
    var quantity=document.getElementById("number").value;
   if (Name.crust.value=="") {
        alert("Select pizza crust");
        return false;
    }
    else if (Name.size.value=="") {
        alert("Select pizza size");
        return false;
    }
    else if (Name.topping.value=="") {
        alert("Select topping you want");
        return false;
    }
    else if (number <= 0) {
        alert("your order should not be less than o");
        return false;
    }
//     var deliver = document.getElementById("delivery").checked;
//     var noDeliver = document.getElementById("pick").checked;
//     var name = document.getElementById("name").value;
//     var location = document.getElementById("location").value;
//     var phoneNumber = document.getElementById("phone").value;

//     if (deliver == false && noDeliver == false) {
//         alert("check a button to proceed")
//         return false;
//     }
//      if(deliver==true){
//         if (name == "" || name.length < 3) {
//             alert("Provide a valid name:");
//             return false;
//         }
//         else if (phoneNumber == "" || phoneNumber.length < 10) {
//             alert("provide a valid Phone Number")
//         }
//         else if (location == "" || location.length < 3) {
//             alert("Provide a valid location");
//             return false;
//         }
//         else {
//             alert("Hello, your order will be delivered to your location at a fee of kshs.100 in the next 1hour");
//         }

//     };
// }
// function MakeOrder(crust, size,topping, quantity) {
//     this.crust = crust;
//     this.size = size;
//     this.topping = topping;
//     this.quantity = quantity;
// }
// MakeOrder.prototype.getCrust = function () {
//     if (this.crust == 0) {
//         return 100
//     }
//     else if (this.crust == 1) {
//         return 120
//     }
//     else if (this.crust == 2) {
//         return 120
//     }
// }
// MakeOrder.prototype.getSize = function () {
//         if (this.size == 0) {
//             return 400
//         }
//         else if (this.size == 1) {
//             return 800
//         }
//         else if (this.size == 2) {
//             return 1200
//         };
// MakeOrder.prototype.getTopping = function () {
//     if (this.topping == 0) {
//         return 150
//     }
//     else if (this.topping == 1) {
//         return 130
//     }
//     else if (this.topping == 2) {
//         return 170
//     } 
// }
// }   
// $(document).ready(function () {
//     $("#delivery").click(function (event) {
//         $("#hidden").show();
//         $("#pick").click(function(){
//             $(".totals,#Button").toggle();
//             $("#button").toggle();
//             $("#pSize").text($("#size option:selected").text());
//             $("#pCrust").text($("#crust option:selected").text());
//             $("#pTopping").text($("#topping option:selected").text());
//             $("#pNumber").text($(".number").val());
        
//         }); 
//     });
//     $("#button").click(function (event) {
//         event.preventDefault();
//         $(".totals,#Button").toggle();
//         $("#button").toggle();
//         $("#pSize").text($("#size option:selected").text());
//         $("#pCrust").text($("#crust option:selected").text());
//         $("#pTopping").text($("#topping option:selected").text());
//         $("#pNumber").text($(".number").val());

//     });
// });