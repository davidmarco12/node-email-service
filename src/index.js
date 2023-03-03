import app from "./app";
import { SERVER_PORT } from "./constants";
import "./libs/startSetup";

app.listen(SERVER_PORT);
console.log('Server listen on port', SERVER_PORT);
