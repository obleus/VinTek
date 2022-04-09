var urlSplitArray = window.location.pathname.split('/')


document.querySelector(".checkout").addEventListener('click', () => {
    fetch('/api/checkout/cart', {
        method: 'POST',
        body: JSON.stringify({
            product:urlSplitArray[urlSplitArray.length - 1]
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