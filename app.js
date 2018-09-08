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


const port = 3000 || process.env.PORT;

app.listen(port, () => {
	console.log(`Server start on port ${port}`);
});