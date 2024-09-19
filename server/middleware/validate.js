const {
  ADD_PARTICIPANT_VALIDATION_SCHEMA,
} = require('../utils/validationSchemas');

module.exports.validateEventParticipantOnAdd = async (req, res, next) => {
  const { body } = req;

  try {
    const validatedEventParticipant =
      await ADD_PARTICIPANT_VALIDATION_SCHEMA.validate(body);
    req.body = validatedEventParticipant;
    next();
  } catch (err) {
    next(err);
  }
};
