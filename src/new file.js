//rest

let showProducts = function (id,...products) {
    console.log(id)
    console.log(products)
}

// console.log(typeof showProducts)
// showProducts(10,"elma","armut","karpuz")

//Spread
let points = [1,2,3,4,50,4,60,14]

console.log(...points)

console.log(Math.max(...points))
// Nan = Not A Number


console.log(..."ABC","D",..."EFG","H")

//Destructuring ****

let populations = [10000,20000,30000,[40000,100000]]
let [small,medium,high,[veryHigh,maximum]] = populations
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)

function somefunction([small1],number) {
    console.log(small1)

}
somefunction(populations)

let category = {id:1, name:"içecek"}
console.log(category.id)
console.log(category["name"])

let {id,name} = category
console.log(id)
console.log(name)

// protyping
class Customer {
    constructor(id,customerNumber){
        this.id = id;
        this.customerNumber = customerNumber

    }
}

let customer = new Customer(1,"12345");
customer.name = "Çağrı yıldırım"
console.log(customer.name)

Customer.bisey = "bi şey"
console.log(Customer.bisey)
console.log(customer.customerNumber)


class individualCustomer extends customer {
    constructor(firstname,id,customerNumber){

    }
}

class corporateCustomer extends Customer {
    constructor (companyName,id,customerNumber){
        super(id,customerNumber)
        this.companyName = companyName
    }
}
// Map Filter Reduce*** acc = acumulator(toplayıcı)
