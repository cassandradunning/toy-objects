const toys = [
 {
    id: 1,
    name: "Teddy Bear",
    maker: "Matel",
    numofstock: 45,
    price: 9,
    weight: 1.2
},

{
    id: 2,
    name: "Soccer Ball",
    maker: "Diadora",
    numofstock: 45,
    price: 10,
    weight: 1.4
},

 {
    id: 3,
    name: "Barbie Doll",
    maker: "Matel",
    numofstock: 56,
    price: 17.99,
    weight: 1.4
}
]

for (const toy of toys) {
    console.log(`Price is $${toy.price}.`)
}

const skates = [
    {
    id: 4,
    name: "Rollerskates",
    maker: "Skaterz",
    numofstock: 10,
    price: 54.99,
    weight: 10.4
},
{
    id: 5,
    name: "Rollerblades",
    maker: "Pup N Suds",
    numofstock: 17,
    price: 64.99,
    weight: 15.4
},
]
toys.push(skates)
console.log(toys)

const toytoFind = 2

for (const toy of toys){
    // Allow you to search toys based off id
    if (toy.id === toytoFind){
            // Add 5% price inc to the price of each toy
        toy.price = (.05 * toy.price) + toy.price
    // Add the price inc to the output
        console.log(`The ${toy.maker} ${toy.name} costs $${toy.price} dollars.`)
}
}