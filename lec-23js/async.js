

console.log("Hello world")
function delay(){
    let currtime= new Date().getTime()
    while(new Date().getTime() - currtime <4000){

    }
    console.log("delay done")
}
// delay();//blocking code
function getData(){
    //fetch data from server;
    console.log("data is fetched")
}

setTimeout(delay,1000);

setTimeout(delay,2000);
console.log("bye")
///bahut sare code likhe jinko chlne mai 3000 second lagenge
console.log("dsdhsfhf")