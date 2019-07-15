const aplicarDescuento = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let descuento=false;
        if(descuento){
            resolve('Descuento aplicado');
        }else{
            reject("No se pudo aplicar el descuento");
        }
    }
    ,3000);
});

aplicarDescuento.then(resultado=>{
    console.log(resultado);
}).catch(error=>{
    console.log(error);
});