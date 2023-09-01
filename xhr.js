const requestURL = 'https://jsonplaceholder.typicode.com/users'

function sendRequest(method, url, body = null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()

        xhr.open(method, url)

        xhr.responseType = 'json' //JSON.parse(xhr.response)

        xhr.onload = () => {
            if (xhr.status >= 400) {
                console.error(xhr.response)
            } else {
                console.log(xhr.response)
            }
            console.log(xhr.response)
        }

        xhr.send(JSON.stringify(body))
    })

}

const body = {
    name:'serg',
    age:'10'
}

// sendRequest('GET', requestURL).then(data => console.log(data)).catch(err => console.log(err))
sendRequest('POST', requestURL, body).then(data => console.log(data)).catch(err => console.log(err))