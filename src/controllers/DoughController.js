const express = require('express');

const DoughService = require('../services/DoughService');

const router = express.Router({ mergeParams: true });

router.get('/', (_, res) => {
  try {
    const dough = DoughService.findAll();

    return res.status(200).json(dough);
  } catch (err) {
    console.error(`Failed to find dough: ${err}`);

    return res.sendStatus(500);
  }
}
);

module.exports = router;
