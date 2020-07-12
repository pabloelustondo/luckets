function promiseTimeout (time) {
    return new Promise(function(resolve,reject){
        setTimeout(function(){resolve(time);},time);
    });
};

async function f(){
    await promiseTimeout(100).then((_) => console.log("ASYNC BEFORE 1"));
    await promiseTimeout(100).then((_) => console.log("ASYNC BEFORE 2"));
    await promiseTimeout(100).then((_) => console.log("ASYNC BEFORE 3"));
    console.log("ASYNC AFTER");
};

f();