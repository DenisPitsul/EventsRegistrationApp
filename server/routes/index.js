const { Router } = require('express');
const eventsRouter = require('./eventsRouter');

const router = Router();

router.use('/events', eventsRouter);

module.exports = router;
