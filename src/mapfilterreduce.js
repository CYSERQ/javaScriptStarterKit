let cart = [
    {id:1, productName:"Telefon", quantity:3, unitPrice:4000},
    {id:2, productName:"bardak", quantity:2, unitPrice:30},
    {id:3, ProductName:"kalem", quantity:1, unitPrice:20},
    {id:4, productName:"Şarj cihazı", quantity:2, unitPrice:100},
    {id:5, productName:"kitap", quantity:3, unitPrice:30},
    {id:6, productName:"Pot", quantity:3, unitPrice:150},
]



console.log("<ul>")
cart.map(product=>{
    console.log("<li>"+product.productName + " : "
    + product.unitPrice * product.quantity+ "</li>")
})
console.log("</ul>")

let total = cart.reduce((acc,product)=>acc+product.unitPrice * product.quantity,0)


console.log(total)

let quantityOver2 = cart.filter(product=>product.quantity>2)

console.log(quantityOver2)


cart.map(product=>{
    console.log(product.productName + " : " + product.unitPrice * product.quantity)

})

  


function addToCart(sepet) {
    sepet.push({id:7, productName:"Ruhsat", quantity:1, unitPrice:20})
}

addToCart(cart)

console.log(cart)





let sayi = 10

function sayiTopla(number) {
    number += 1
}

sayiTopla(sayi)
console.log(sayi)

