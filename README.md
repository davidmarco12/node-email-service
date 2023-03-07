# Sirius Backend Challenge

## Requeriments:
    - Docker / Docker Desktop

## Installation:
 - Pull the repository
 - Create an .env and copy the template from .env.example
 - Run the above  commands on the terminal
```
docker-compose build
docker-compose run app
```
- Go to ```/api/auth/signup``` and create an user, will give you a token so you can use it for the API.

## API:
```
    GET :  /api/stats/
    POST : /api/auth/signup/
    POST : /api/auth/signin/
    POST : /api/email/
```
