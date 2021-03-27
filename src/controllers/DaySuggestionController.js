const express = require('express');

const DaySuggestionService = require('../services/DaySuggestionService');

const router = express.Router({ mergeParams: true });

router.get('/:day', (req, res) => {
  const { day: reqDay } = req.params;

  const day = parseInt(reqDay);

  if (day <= 0 || day > 7) return res.status(400).send('Invalid week day');

  try {
    const daySuggestion = DaySuggestionService.findByDayOfTheWeek(parseInt(day));

    return res.status(200).json(daySuggestion);
  } catch (err) {
    console.error(`Failed to find day suggestion: ${err}`);

    return res.sendStatus(500);
  }
}
);

module.exports = router;
