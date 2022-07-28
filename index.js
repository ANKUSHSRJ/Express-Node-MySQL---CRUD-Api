const express = require("express");
const bodyParser = require('body-parser')

const app = express();

//server port
const port = process.env.PORT || 5000;

//boy parse request data / content type - application/form-data
app.use(bodyParser.urlencoded({extended:false}));

//parse request data / content type application/json
app.use(bodyParser.json());

// root route
app.get('/', (req,res)=>{
res.send('Hello World');
});
//import employee routes
const employeeRoutes = require('./src/routes/employee.route');

//create employee routes
app.use('/api/v1/employee',employeeRoutes)


//listen to the port

app.listen(port, ()=> {
    console.log(`Express Server is running at port ${port}`);
})
