const express = require('express');
require('dotenv').config();
const recoRoutes = require('./routes/recoRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/api/recommendations', recoRoutes);

// Server Start
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(
    `Test endpoint: http://localhost:${PORT}/api/recommendations?userId=1&lat=-6.2&lon=106.8&maxDistance=5`
  );
});
