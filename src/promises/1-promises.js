function APICall() {

    let errorRandom = true;

    return new Promise ( (resolve, reject) => {
        setTimeout(()=> {
            if (errorRandom !== true)
            resolve({
                id: "1",
                name: "Mi producto",
                description: "El mejor producto de la tienda",
                stock: 9,
            });
            else {
                reject('Error en la Api')
            }
        }, 4000)
        
    })
}

console.log("app iniciada");

let promiseAPI = APICall();



promiseAPI
    .then((respuesta) => {
    console.log("llegamos", respuesta)
})  .catch((respuestaError) => {
    console.log("ERROR: ", respuestaError)
})

console.log(promiseAPI);

console.log('app finalizada')