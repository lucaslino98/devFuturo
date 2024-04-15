fetch('data.json')
    .then((resp => {
        return resp.json();
    }))
    .then((respJson => {
        let obj = JSON.stringify(respJson);
        document.write(obj)
    }))