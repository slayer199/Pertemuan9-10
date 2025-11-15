/**
 * Normalisasi Jarak (0–1). Semakin dekat, skor semakin tinggi.
 * @param {number} distance - Jarak dalam km.
 * @param {number} maxDistance - Jarak maksimum yang relevan (misalnya 10 km).
 */
const normalizeDistanceScore = (distance, maxDistance = 10) => {
  // Memastikan skor tidak negatif jika jarak > maxDistance
  return 1 - (Math.min(distance, maxDistance) / maxDistance);
};

/**
 * Normalisasi Rating (0–1).
 * @param {number} rating - Rating aktual (misalnya 4.5).
 * @param {number} maxRating - Rating maksimum (misalnya 5).
 */
const normalizeRatingScore = (rating, maxRating = 5) => {
  return rating / maxRating;
};

module.exports = {
  normalizeDistanceScore,
  normalizeRatingScore
};
