var urlSplitArray = window.location.pathname.split('/')


document.querySelector(".checkout").addEventListener('click', (event) => {
    let productName = document.getElementById('product-name').textContent
    let productPrice = document.getElementById('product-price').textContent.split("$")[1] + "00"
    console.dir(productPrice)
    console.log(productName, productPrice)
    fetch('/api/checkout/cart', {
        method: 'POST',
        body: JSON.stringify({
            productID:urlSplitArray[urlSplitArray.length - 1],
            productName:productName,
            productPrice:productPrice
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(
        response => {
            console.log(response)
        }
    )
    
    // if (response.ok) {
    //     console.log('sucess')
    // } else {
    //     console.log('fail')
    // }
    console.log(urlSplitArray[urlSplitArray.length - 1])
})