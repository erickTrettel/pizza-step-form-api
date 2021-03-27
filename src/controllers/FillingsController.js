const express = require('express');

const FillingsService = require('../services/FillingsService');

const router = express.Router({ mergeParams: true });

router.get('/', (_, res) => {
  try {
    const fillings = FillingsService.findAll();

    return res.status(200).json(fillings);
  } catch (err) {
    console.error(`Failed to find fillings: ${err}`);

    return res.sendStatus(500);
  }
}
);

module.exports = router;
