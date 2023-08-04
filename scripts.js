// Frontend Stripe setup
var stripe = Stripe('your_publishable_key');
var elements = stripe.elements();

// Create an instance of the card Element
var card = elements.create('card');

// Add an instance of the card Element into the `card-element` div
card.mount('#card-element');

// Handle form submission
var form = document.getElementById('payment-form');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    stripe.createToken(card).then(function(result) {
        if (result.error) {
            // Handle errors
            console.error(result.error.message);
        } else {
            // Send token to backend and complete the payment
            var token = result.token.id;
            
            fetch('/submit-payment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ token })
            })
            .then(response => response.json())
            .then(data => {
                // Payment successful, redirect to confirmation page
                console.log(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }
    });
});
