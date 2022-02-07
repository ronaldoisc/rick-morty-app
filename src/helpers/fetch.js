const baseUrl = process.env.REACT_APP_API_URL;

export const customeFetch = (endpoint, data, method = 'GET') => {

    const url = `${baseUrl}/${endpoint}`;


    if (method === 'GET') {
        return fetch(url);
    } else {
        return fetch(endpoint, {
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }

}