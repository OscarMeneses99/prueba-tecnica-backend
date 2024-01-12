import app from './app.js';
import { ConnectDB } from './config.js';

const port = process.env.PORT || 5000;

ConnectDB()

app.listen(port)

console.log(`Server on >>> http://localhost:${port}/api/candidates`)