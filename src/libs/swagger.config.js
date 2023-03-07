import { SERVER_PORT, SERVER_HOST, DOMAIN } from "../constants"

export const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Email Service API',
            version: '1.0.0',
            description: "Email Service API NODEJS"
        },
        servers: [
            {
                url: DOMAIN || SERVER_HOST+":"+SERVER_PORT,
            }
        ]
    },
    apis:["./src/routes/*.js"],
}