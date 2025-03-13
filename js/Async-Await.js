const res = async () => {
    let response = await fetch('example/A.json')
    if (response.status!==200) {
        throw new Error("Endpoint is wrong");
    }
    const data = await response.json();
    return data;
};

res().then((response) => {
    console.log(response);
}).catch((err) => {
    console.log(err.message);
});
