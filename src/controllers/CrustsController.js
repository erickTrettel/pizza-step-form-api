const express = require('express');

const CrustsService = require('../services/CrustsService');

const router = express.Router({ mergeParams: true });

router.get('/', (_, res) => {
  try {
    const crusts = CrustsService.findAll();

    return res.status(200).json(crusts);
  } catch (err) {
    console.error(`Failed to find crusts: ${err}`);

    return res.sendStatus(500);
  }
}
);

module.exports = router;
