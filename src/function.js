function addToCart(productName="elma",quantity) {
    console.log("sepete eklendi : " + productName + " adet : " + quantity)
    
}

//undefined = ben aslında yoğum

// addToCart()
// addToCart("yumurta")
// addToCart("karpuz")

addToCart(10)

let sayHello = ()=> {
    console.log("Hello World!")
}

sayHello()

let sayHello2 = function () {
    console.log("Hello World2!")
}

sayHello2();


let product1 = {productName: "elma", UnitPrice:10, quantity:5}

function addToCart3(product) {
    console.log("ürün : "+product.productname)
    console.log("adet : "+product.quantity)
    console.log("fiyat : "+product.UnitPrice)
}

addToCart3(product1)

let product2 = {productName:"Elma", unitPrice:10, quantity:5}
let product3 = {productName:"Elma", unitPrice:10, quantity:5}

product2 = product3
product2.productName = "KARPUZ"
console.log(product3.productName)

let sayi1 = 10
let sayi2 = 20
sayi1 = sayi2
sayi2 = 100
console.log(sayi1)

//veri obje ise referans tip  veri sayısal ise değer tip 
//obje ve arrayler referans tip

function addToCart4(x) {
    console.log(products)
}

let products = [
    {productName:"Elma", unitPrice:10, quantity:5},
    {productName:"armut", unitPrice:10, quantity:5},
    {productName:"karpuz", unitPrice:10, quantity:5}
]

addToCart4(products)
