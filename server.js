const express = require('express');
const path = require('path')


const app = express();

app.set('view engine', 'ejs')

const PORT = 3000;

const createPath = (page) => path.resolve(__dirname, 'ejs-views', `${page}.ejs`)

//функция перехода путей

app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`);
});

app.get('/', (req, res) => {
    const title = 'Home';
    res.render(createPath('index'), {title})//путь
})

app.get('/contacts', (req, res) => {
    const title = 'Contacts';
    const contacts = [
        {name:'YouTube', link:'http://youtube.com/YauhenKavalchuk'},
        {name:'Twitter', link:'http://github.com/YauhenKavalchuk'},
        {name:'GitHub', link:'http://twitter.com/YauhenKavalchuk'},
    ];
    res.render(createPath('contacts'), {contacts, title}) //путь
})

app.get('/posts/:id', (req, res) => {
    const title = 'Post';
    res.render(createPath('post'), {title}) //путь
})

app.get('/posts', (req, res) => {
    const title = 'Post';
    res.render(createPath('posts', {title})) //путь
})

app.get('/add-post', (req, res) => {
    const title = 'Add post';
    res.render(createPath('add-post', {title})) //путь
})

app.use((req,res)=>{
    const title = 'Error Page';
    res
        .status(404) //ошибка
        .render(createPath('error', {title}))//перенаправление на ошибку
})