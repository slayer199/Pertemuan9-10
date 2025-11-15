const express = require('express');
const router = express.Router();
const recoService = require('../services/recoService');

// GET /reco?userId=1&lat=-6.2&lon=106.8&maxDistance=10
router.get('/', async (req, res) => {
  try {
    const { userId, lat, lon, maxDistance = 10 } = req.query;

    // Validasi Input
    if (!userId || !lat || !lon) {
      return res.status(400).json({
        message: "Require userId, lat (latitude), and lon (longitude)."
      });
    }

    // Convert tipe data
    const parsedLat = parseFloat(lat);
    const parsedLon = parseFloat(lon);
    const parsedMaxDistance = parseInt(maxDistance);

    const recommendations = await recoService.getRecommendations(
      userId,
      parsedLat,
      parsedLon,
      parsedMaxDistance
    );

    res.json({
      user_input: { userId, lat: parsedLat, lon: parsedLon, maxDistance: parsedMaxDistance },
      recommendations
    });
  } catch (error) {
    console.error("Error fetching recommendations:", error);

    res.status(500).json({
      message: "Internal server error.",
      details: error.message
    });
  }
});

module.exports = router;
