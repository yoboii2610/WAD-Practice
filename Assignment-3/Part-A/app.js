const express = require('express');
const path = require('path');

const app = express();
const port = 3000; // Change the port if needed

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});