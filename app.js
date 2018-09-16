const express = require('express');
const exphbs  = require('express-handlebars');
const path = require('path');
const app = express();

//HandleBars Middleware
app.engine('handlebars', 
	exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

//Static folder
app.use('/public', express.static(path.join(__dirname, 'public')));

//index route
app.get('/', (req,res)=>{
	res.render('index');
});

//About Route
app.get('/about', (req,res) =>{
	res.render('about');
});

//Founder Route
app.get('/founder', (req,res) =>{
	res.render('founder');
});

//Partners Route
app.get('/partners', (req,res) =>{
	res.render('partners');
});

//Faculties
app.get('/faculties', (req,res) => {
	res.render('faculties');
});


app.listen(process.env.PORT || 3000, () => console.log('Server Started...'));