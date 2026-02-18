const getData = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const res = await response.json();
    console.log(res);
}
getData();



// const myPromise = new Promise((resolve, reject) => {
//     let marks = 80;
//     if (marks >= 50) {
//         resolve("You have passed the exam");
//     } else {
//         reject("You have failed the exam");
//     }
// })
// console.log(myPromise);

// myPromise.then((message) => {
//     console.log(message);
// }).catch((error) => {
//     console.log(error);
// });

// const f1 = async () => {
//     const msg = await myPromise;
//     console.log(msg);
// }
// f1();