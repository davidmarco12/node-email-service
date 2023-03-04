import request from "supertest";
import app from "../app";
import * as models from "../libs/config"

const randonNumber =  Math.floor(Math.random() * 99) + 99;

const email = {
    to:"d3xuscs@gmail.com",
    from:"d3xuscs@gmail.com",
    subject:"This is a test",
    text:"Please this is only on test mode",
}

const newUser = {
    username: 'testingUserName'+randonNumber,
    password: 'password',
    email:'email@test.com'
};

afterAll(() => models.sequelize.close())

describe('Creating a new user in signup', () => {
    it('Status should be 200, with an auth_toke', async () => {
        const response = await request(app)
        .post("/api/auth/signup")
        .set("Accept", "application/json")
        .send(newUser);
        
        expect(response.status).toEqual(200);
        expect(response.body.auth_token.length).not.toBeLessThan(1);
    });

});


describe('Sending an email', () => {
    it('Status should be 200, with a success Message', async () => {
        
        const  responseUser = await request(app)
        .post("/api/auth/signin")
        .set("Accept", "application/json")
        .send(newUser);
        console.log({responseUser})
        const token = responseUser.body.token;
        const responseEmail = await request(app)
        .post("/api/email")
        .set('authorization', token) 
        .send(email);

        
        expect(responseEmail.status).toEqual(200);
        expect(responseEmail.body.message).toBe("Email send");
    });

});
