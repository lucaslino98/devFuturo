let options = {
    method: 'GET'
};
fetch('https://api.thecatapi.com/v1/images/search?limit=10', options)
    .then((resposta) => {
        return resposta.json();
    })
    .then((respostaTh) => {
        let url = respostaTh.url;
        for (let i of respostaTh) {
            document.write(`<img width='200' height='200'src='${i.url}'/>`);
        }
    })

    