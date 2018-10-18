This project explores the mailgun api and react

Run development environment with:

```
yarn dev
```

This spins up an express server on localhost:5000. It will also start the react dev project on localhost:3000

Requests are proxied to the express app defined by the following line in client/package.json
```
"proxy": "http://localhost:5000/"
```

This project is a WIP as I experiment with React and Mailgun
