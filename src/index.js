import app from "./app";
import { SERVER_PORT } from "./constants";

app.listen(SERVER_PORT);
console.log("Server listen on port", SERVER_PORT);
