# Metalica E-commerce
> PaymentIntents Integration (Stripe)

The project was created to simulate an e-commerce that supports one-time payments using Stripe's PaymentIntents Integration

## Getting started

1. Make sure that you have `git` properly set up in your machine and you have access to `Github`
```
- How to set up Git: https://docs.github.com/en/github/getting-started-with-github/set-up-git
- How to set up a GutHub Account: https://docs.github.com/en/github/getting-started-with-github/signing-up-for-a-new-github-account
```

2. Clone the project on your machine
```
git clone git@github.com:mendes-dev/payment-project.git
```

## How to test the integration

1. Open the terminal

2. Get into the `payment-integration` project folter

3. Execute the following command that will run the app in your machine
```
node index.js
```

4. Open the following link in your browser
```
http://localhost:3000/
```

5. Click to buy the Metallica Album 🤘

6. Make a test payment
> Use a test card number. These card numbers work in test mode with any CVC, postal code, and future expiry date.
```
Payment succeeds - 4242 4242 4242 4242
Payment requires authentication - 4000 0025 0000 3155
Payment is declined - 4000 0000 0000 9995
```
7. Check the `logSuccessfulPayment.txt` file to verify the information from the payment succeeds tests

## Scaffolding & References

In the project we used:
* NODE.js with Express for the back-end
* HTML/CSS/Javascript for the front-end
* Stripe Payment Intents API
* Body-parser to handle `HTTP POST` request in Express.js

Links:
- [Express Getting Started Guide](https://expressjs.com/en/starter/hello-world.html)
- [Stripe Integration Documentation](https://stripe.com/docs/payments/integration-builder)

## Licensing

This project is licensed under Unlicense license. This license does not require
you to take the license with you to your project.
