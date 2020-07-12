const object = { id: "id", name:"name"};

const object2 = { ...object, h:"h"};

console.log(object);
console.log(object2);


class xxx {

    p(x){ return "x" };
}

const x = new xxx();

console.log( "p" in x );

console.log( "p" of ["p"] );
