const express = require('express');

const DoughController = require('./controllers/DoughController');
const CrustsController = require('./controllers/CrustsController');
const SizesController = require('./controllers/SizesController');
const FillingsController = require('./controllers/FillingsController');
const DaySuggestionController = require('./controllers/DaySuggestionController');

const router = express.Router();

router.get('/', (req, res) => {
  return res.send('Server running');
});

router.use('/dough', DoughController);
router.use('/sizes', SizesController);
router.use('/fillings', FillingsController);
router.use('/crusts', CrustsController);
router.use('/day_suggestion', DaySuggestionController);

module.exports = router;
