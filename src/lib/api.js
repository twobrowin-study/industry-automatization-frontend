const host = 'http://195.19.40.232/'

export async function getData(url, token) {
    let data = await fetch(host + url, {
        method: 'GET',
        headers: {
            'Accept': 'application/hal+json',
            'Authorization' : 'Bearer ' + token,
            'Accept-encoding': 'gzip, deflate, br'
        }
    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            return data;
        });
    return data;
}

export async function postData(url, token, form) {
    let response = await fetch(host + url, {
        method: 'POST',
        headers: {
            'Accept': 'application/hal+json',
            'Authorization' : 'Bearer ' + token,
            'Accept-encoding': 'gzip, deflate, br',
            'Content-type' : 'application/json'
        },
        body: JSON.stringify(form)
    })
        .then((response) => {
            return response;
        })
    return response;
}

export default {getData, postData}