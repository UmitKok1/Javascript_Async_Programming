const res = (resource) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else if (request.readyState === 4) {
                reject('Failed');
            }
        });

        request.open('GET', resource);
        request.send();
    });
};

res('example/A.json')
    .then((data) => {
        console.log("Promise 1 ", data);
        return res('example/B.json');

    }).then((data) => {
        console.log("Promise 2 ", data);
        return res('example/C.json');
    })
    .then((data) => {
        console.log("Promise 3 ", data);
    })
    .catch((err) => {
        console.log(err);
    });

