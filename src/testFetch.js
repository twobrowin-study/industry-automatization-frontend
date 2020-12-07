const requestUrl = "https://jsonplaceholder.typicode.com/users";

async function getData(url) {
        let result = await fetch(url, {
            method: 'GET'
        })
            .then((response) => {
                if(response.ok){
                    return response.json();
                }
                return response.json().then(error => {
                    const e = new Error('Текст ошибки')
                    e.data = error
                    throw e
                })
            })
            .then((data) => {
                return data
            })
            .catch(err => console.log(err));

        console.log(result)
        return result
}

getData(requestUrl);