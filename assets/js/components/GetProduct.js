import React from 'react';
//this function is yet to be completed
function GetProduct() {
    const url = "";
    const myHeaders = new Headers();

    const myRequest = new Request('flowers.jpg', {
    method: 'GET',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default', 
    });

    fetch(myRequest)
    .then(response => response.blob())
    .then(myBlob => {
        myImage.src = URL.createObjectURL(myBlob);
    });

    return (
        <div>
            
        </div>
    );
}

export default GetProduct;