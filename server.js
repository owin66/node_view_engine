const express = require('express');
const path = require('path')

const app = express();

const PORT = 3000;

const createPath = (page) => path.resolve(__dirname, 'views', `${page}.html`)

//функция перехода путей

app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`);
});

app.get('/', (req, res) => {
    res.sendFile(createPath('index'))//путь
})

app.get('/contacts', (req, res) => {
    res.sendFile(createPath('contacts')) //путь
})

app.get('/about-us', (req, res) => {
    res.redirect('/contacts') // перенаправление
})
app.use((req,res)=>{
    res
        .status(404) //ошибка
        .sendFile(createPath('error'))//перенаправление на ошибку
})