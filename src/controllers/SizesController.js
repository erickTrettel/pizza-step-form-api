const express = require('express');

const SizesService = require('../services/SizesService');

const router = express.Router({ mergeParams: true });

router.get('/', (_, res) => {
  try {
    const sizes = SizesService.findAll();

    return res.status(200).json(sizes);
  } catch (err) {
    console.error(`Failed to find sizes: ${err}`);

    return res.sendStatus(500);
  }
}
);

module.exports = router;
