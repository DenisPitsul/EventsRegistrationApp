const { Router } = require('express');
const { eventsController } = require('../controllers');
const { paginate, validate } = require('../middleware');

const eventsRouter = Router();

eventsRouter
  .route('/')
  .get(paginate.paginateEvents, eventsController.getEvents);

eventsRouter.route('/:id').get(eventsController.getEventById);

eventsRouter
  .route('/:id/participants')
  .post(
    validate.validateEventParticipantOnAdd,
    eventsController.addEventParticipant
  )
  .get(eventsController.getEventParticipants);

eventsRouter
  .route('/:id/registrations')
  .get(eventsController.getRegistrationsPerDay);

module.exports = eventsRouter;
