const brands = ["google", "apple", "amazon"];

console.log("ORIGINAL ARRAY =>> ", brands);



// ADD ITEM


// push() ===>>> yeki b akhar ezafe mikone;
brands.push("facebook");
console.log("CHANGED ARRAY =>> ", brands);


// unshift()===>>> yeki b avvale array ezafe mikone
brands.unshift("facebook");
console.log("CHANGED ARRAY =>> ", brands);


// *** agar push va unshift ro berizim tu y let va console begirim
// khorooji array.length ast.
let result = brands.unshift("facebook");
console.log(result);


// // REMOVE ITEM


// // pop()===>>> yeki az akhar kam mishe
brands.pop("facebook");
console.log("CHANGED ARRAY =>> ", brands);


// shift()===>>> yeki az avval kam mishe
brands.shift("facebook");
console.log("CHANGED ARRAY =>> ", brands);


// // ***agar pop va shift ro berizim tu y let va console begirim
// khorooji arraye remove shode ast
let result = brands.shift("facebook");
console.log("result");


// slice() ===>>> az adade avval ta adade dovoom ra joda mikone
let result = brands.slice(1,3);
console.log(result);


// // splice() ===>> az khune chandom chanta hazf konam
brands.splice(1,1);
console.log(brands);

// //*** splice() parametr sevvom ham darad
brands.splice(2,0, "facebook")
console.log(brands);