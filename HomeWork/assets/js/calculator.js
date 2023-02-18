let num1 = document.querySelector(".inputs input:nth-child(1)");
let num2 = document.querySelector(".inputs input:nth-child(2)");

let plus = document.querySelector(".calcul button:nth-child(1)");
let minus = document.querySelector(".calcul button:nth-child(2)");
let multply = document.querySelector(".calcul button:nth-child(3)");
let divide = document.querySelector(".calcul button:nth-child(4)");

let result = document.querySelector(".result input")



plus.addEventListener("click", function () {

    num1 = Number(num1.value)
    num2 = Number(num2.value)
    result.value = num1 + num2;
   

})

minus.addEventListener("click", function () {

    result.value = num1.value - num2.value;

})

multply.addEventListener("click", function () {

    result.value = num1.value * num2.value;
})


divide.addEventListener("click", function () {

    if(num2.value==0){
        result.value="imposible"
        return;
    }
    result.value = num1.value / num2.value;

})
