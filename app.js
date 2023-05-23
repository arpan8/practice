/** import express and stored in a const variable named express */
const express = require('express');

/** import morgan for logging the api end points */
const morgan = require('morgan');

/**calling the express function provided by the express framework */
const app = express();

/** importing dotenv package for keeping secrcts in .env file */
require('dotenv').config();

/** taking the port number from the .env file by calling the property PORT, if it is undefined */
const port = process.env.PORT || 3002;

/**The app.use() function is used to mount the specified middleware function(s) at the path which is being specified. It is mostly used to set up middleware for your application. */
app.use(morgan('dev'));

/**The express.json() function is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.  */
app.use(express.json());

/**The express.urlencoded() function is a built-in middleware function in Express. It parses incoming requests with URL-encoded payloads and is based on a body parser. */
app.use(express.urlencoded({extended: true}));

/**Call the listen() function, It requires path and callback as an argument. It starts listening to the connection on the specified path, the default host is localhost, and our default path for the local machine is the localhost:3000 */
app.listen(port,()=>{
    console.log('listening on port '+ port);
});