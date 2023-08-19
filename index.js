//1) do while loop 

let i =5;
do{
    console.log(i);
    i = i+6;
}
while(i>=10 && i<100)

//2) for - in loop 

// objects
let animal = {
    name:'tiger',
    legs:4,
    speed:'90miles/hr'
}
for(let key in animal){
    console.log(key+" "+animal[key]);
}

//array
let names = ["rahul", "aman","shivam","niketa","sandhya"];
for(let index in names){
    //console.log(index,names[index]);
}

// for -- of loop
for(let x of names){
    console.log(x);
}