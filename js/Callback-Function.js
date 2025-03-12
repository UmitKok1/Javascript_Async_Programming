const getToDos= (callback)=>{
    const request =new XMLHttpRequest();
    request.addEventListener('readystatechange',()=>{
        if (request.readyState===4 && request.status===200) {
            callback(undefined,request.responseText);
        }
        else if (request.readyState===4) {
            callback('Failed',undefined);
        }
    });
    request.open('GET','https://jsonplaceholder.typicode.com/todos');
    request.send();
};

getToDos((err,data)=>{
    if (err) {
        console.log(err);
    }
    else{
        console.log(data);
    }
});
