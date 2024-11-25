function hello (){
    console.log("hello")
}

setTimeout(hello, 4000);

console.log("one")
console.log("two")
setTimeout(() => {
    console.log("hello") 
}, 2000);

console.log("three")
console.log("four")

// Example of callback function

function sum (a ,b){
    console.log(a + b);
}

function calcu(a, b, sumCallback){
    sumCallback(a, b);
}
calcu(3, 5, sum)

// Example of callback function with settimeout method

const hello = () =>{
    console.log("hello");
}
    setTimeout(hello , 3000);


// ----------------------------------------CallBack Hell--------------------------------

function dataBase (dataId) {
  return new Promise ((resolve, reject) => {
    // let finalval = dataBase(23)
    // console.log(finalval);
    setTimeout (() =>{
        console.log("data", dataId);
        resolve ("success")
        // if(dataBaseNext){
        //     dataBaseNext();
        // }
       }, 2000);
    //    console.log(finalval);
  })
}


async function getAllData (){
    await dataBase(1);
    await dataBase(2);
    await dataBase(3);
    await dataBase(4);
    await dataBase(5);
}


// Using IIFE Funciton-> It's execute by without any calling 
(async function(){
    console.log("Fetchin data1.....")
    await dataBase(1);
    console.log("Fetchin data2.....")
    await dataBase(2);
    console.log("Fetchin data3.....")
    await dataBase(3);
    console.log("Fetchin data4.....")
    await dataBase(4);
    console.log("Fetchin data5.....")
    await dataBase(5);
})();

getAllData();

console.log("Function Calling", getAllData())




// Method One 

console.log("Fatching data1.......");
let p1 = dataBase(1);
p1.then((res) =>{
    console.log(res)
    console.log("Fatcing data2........")
    let p2 = dataBase(2);
    p2.then((res)=>{
        console.log(res);
        console.log("All data has been fatched");
    })
})

// Method Two

dataBase(1)
    .then((res) =>{
        return dataBase(2)
    })
    .then((res) =>{
        return dataBase(3)
    })
    .then((res) =>{
        console.log(res)
    })



dataBase(1, () =>{
    dataBase(2, () =>{
        dataBase(3, () =>{
            dataBase(4)
        })
    });
})


// ==========================Primises=================================

const getPromise = () => {
    return new Promise ((resolve, reject) =>{
        console.log("I'm the promises");
        resolve("success");
        // reject("Network Error")  
    })
}

let promise = getPromise();
promise.then( (res) =>{
    console.log("Problem solve", res );
})

promise.catch((err) =>{
    console.log("Rejected", err)
})



function dataBase (dataId) {
      let newVar = new Promise ((resolve, reject) => {
         let finalval = dataBase(23)
         console.log(finalval);
        const newValue = dataBase(83)
        setTimeout (() =>{
            console.log("data", newValue);
             resolve ("success")
             if(dataBaseNext){
                 dataBaseNext();
            }
           }, 1000);
           console.log(finalval);
      })
    }


// ============================Promise Chain==========================================

function asyncFun1() {
    return new Promise ((resolve, reject) =>{
        setTimeout(() =>{
            console.log("data1");
            resolve("success");
        }, 2000);
    });
};
function asyncFun2() {
    return new Promise ((resolve, reject) =>{
        setTimeout(() =>{
            console.log("data2");
            resolve("Complete");
        }, 4000);
    });
};
function asyncFun3() {
    return new Promise ((resolve, reject) =>{
        setTimeout(() =>{
            console.log("data3");
            resolve("Solve");
        }, 6000);
    });
};


console.log("fetching data1......")
let p2 = asyncFun1();   
p1.then((res)=>{
    console.log(res)
    console.log("fetching data2......")
    let p2 = asyncFun2();
    p2.then((res) =>{
        console.log(res)
        console.log("fetching data3......")
        let p3 = asyncFun3();
        p3.then((res) =>{
            console.log(res);
            console.log("All data has been fatched");
        })

    })
})

// =======================Async and await Function================================

async function hello() {
    console.log("hello");
}


function api(){
    return new Promise ((resolve, reject) =>{
        setTimeout((res) =>{
            console.log("Weather data")
            resolve(200)
        }, 3000)
    })
}

async function getWeatherData(){
    await api();
    await api();
}