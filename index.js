const express = require('express')
const app = express()
const port = 3000
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
const bodyParser = require('body-parser')

const fs = require('fs');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/payment-log', async (req,res) => {

	console.log('---------');
	console.log(req.body.log);
	console.log('---------');
	
	fs.appendFile('logSuccessfulPayment.txt', req.body.log + '\n', function (err) {
		if (err) throw err;
		console.log('Saved!');
	  });

	  res.send({
		response: 'log saved'
	});
})

app.post('/create-payment-intent', async (req, res) => {
	const paymentIntent = await stripe.paymentIntents.create({
		amount: 1099,
		currency: 'usd',
		payment_method_types: ['card'],
	  });

	res.send({
		clientSecret: paymentIntent.client_secret
	});
  });

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))