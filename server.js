let express = require('express');
let path = require('path');

let app = express();

const htmlRoutes = require(path.join(__dirname, 'routes', 'htmlroutes'));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));


const PORT = process.env.PORT || 8080;




app.use(htmlRoutes);



app.listen (PORT, () => console.log(`serever started on port ${PORT}`));


