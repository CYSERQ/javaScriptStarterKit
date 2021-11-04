console.log("Merhaba Kodlama.io")

let dolarDun = 9.20

let dolarBugun = 9.30

dolarDun = "9.20"

{
    let dolarDun = 9.10
}

console.log(dolarDun)

const euroDun = 11.2
//euroDun = 11
console.log(euroDun)

let konutKredileri = ["Konut kredisi","Emlak konut kredisi","kamu konut kredisi"]

console.log("<ul>")
for(let i = 0; i<3;i++){
    console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>")


{/* <ul>
    <li>konut kredileri</li>
    <li>kamu kredileri</li>
</ul> */}


console.log(konutKredileri)


let populations = [10000,20000,30000,[40000,100000]]

let [small,medium,high,[veryhigh,maximum]] = populations

console.log(small)
console.log(medium)
console.log(high)
console.log(veryhigh)
console.log(maximum)

function somefunction([small1],number) {
    console.log(small1)
    
}

somefunction(populations)


let category = {id:1, name:"içecek"}

console.log (category.id)
console.log(category["name"])

let {id,name1} = category 

console.log(id)
console.log(name1)





