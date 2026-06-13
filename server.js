// Bring in Express, the tool that handles web requests
const express = require('express');

// Create our app
const app = express();

// Decide which "port" (door number) the app listens on.
// Cloud platforms tell us which port to use via an "environment variable";
// if there isn't one, we default to 3000 on our own machine.
const port = process.env.PORT || 3000;

// Door #1: the health check. Visiting /health returns a simple status.
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Door #2: visiting /hello returns a friendly message.
app.get('/hello', (req, res) => {
  res.json({ message: 'Hello from my first API!' });
});

// Turn the app on and start listening for visitors.
app.listen(port, () => {
  console.log(`API is running on port ${port}`);
});

