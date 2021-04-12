
let checkCredentials = new Promise((resolve, reject)=>{
    let credentialsOk = true;
    if(credentialsOk) {
        resolve(true);
    } else {
        reject(false);
    }
})

let connectToInternet = new Promise((resolve, reject) => {
    let haveInternet = false;
    if(haveInternet) {
        resolve("Yey, I have internet");
    } else {
        reject("I forgot my phone home and I don't have internet");
    }
}) 

// const auth = checkCredentials
//     .then(res => {
//         console.log(res);
//         return connectToInternet;
//     })
//     .then(res => {
//         console.log(res);
//     })
//     .catch(
//         res => {
//             console.log("Bad Connection data");
//         }
//     )


async function login() {
    try{
        let auth = await checkCredentials;
        if(auth) {
            let connection = await connectToInternet;
            console.log(connection);
        }
    } catch(err) {
        console.log(err);
    }


}  

login();



