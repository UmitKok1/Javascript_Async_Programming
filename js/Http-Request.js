fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        if (!response.ok) {
            throw new Error(`Http Error:  ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('Succesfull ', data);
    })
    .catch(error => {
        console.error('Error ', error);
    });
