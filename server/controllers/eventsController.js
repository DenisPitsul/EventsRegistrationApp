const _ = require('lodash');
const createHttpError = require('http-errors');
const { Event, Participant, Sequelize } = require('../db/models');

module.exports.getEvents = async (req, res, next) => {
  const {
    query,
    pagination: { page, limit, offset },
  } = req;

  try {
    const { sort = 'id' } = query;

    const eventsCount = await Event.count();
    const foundEvents = await Event.findAll({
      raw: true,
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
      order: [[sort]],
      limit,
      offset,
    });

    const totalPages = Math.ceil(eventsCount / limit);

    res.status(200).json({ page, totalPages, data: foundEvents });
  } catch (error) {
    next(error);
  }
};

module.exports.getEventById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const foundEvent = await Event.findByPk(id, {
      raw: true,
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });

    if (!foundEvent) {
      return next(createHttpError(404, 'Event Not Found'));
    }

    res.status(200).send({ data: foundEvent });
  } catch (err) {
    next(err);
  }
};

module.exports.addEventParticipant = async (req, res, next) => {
  const {
    body,
    params: { id },
  } = req;

  try {
    const foundEvent = await Event.findByPk(id);
    if (!foundEvent) {
      return next(
        createHttpError(404, { status: 404, message: 'Event Not Found' })
      );
    }

    console.log('body', body);

    const createdEventParticipant = await Participant.create({
      ...body,
      eventId: id,
    });

    const preparedEventParticipant = _.omit(createdEventParticipant.get(), [
      'createdAt',
      'updatedAt',
    ]);

    res.status(201).send({ data: preparedEventParticipant });
  } catch (err) {
    next(err);
  }
};

module.exports.getEventParticipants = async (req, res, next) => {
  const {
    query,
    params: { id },
  } = req;

  try {
    const foundEvent = await Event.findByPk(id);
    if (!foundEvent) {
      return next(
        createHttpError(404, { status: 404, message: 'Event Not Found' })
      );
    }

    const { full_name, email } = query;
    const where = { eventId: id };
    if (full_name) {
      where.fullName = { [Sequelize.Op.iLike]: `%${full_name}%` };
    }
    if (email) {
      where.email = { [Sequelize.Op.iLike]: `%${email}%` };
    }

    const foundEventParticipants = await Participant.findAll({
      raw: true,
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
      where,
      order: [['createdAt']],
    });

    res.status(200).json({ data: foundEventParticipants });
  } catch (err) {
    next(err);
  }
};

module.exports.getRegistrationsPerDay = async (req, res) => {
  const { id } = req.params; // Event ID from URL

  try {
    const registrations = await Participant.findAll({
      attributes: [
        [Sequelize.fn('DATE', Sequelize.col('registration_date')), 'date'],
        [Sequelize.fn('COUNT', Sequelize.col('id')), 'count'],
      ],
      where: { eventId: id },
      group: [Sequelize.fn('DATE', Sequelize.col('registration_date'))],
      order: [Sequelize.fn('DATE', Sequelize.col('registration_date'))],
    });

    const chartData = registrations.map(reg => ({
      registrationDate: reg.get('date'),
      participantsCount: Number(reg.get('count')),
    }));

    res.status(200).json({ data: chartData });
  } catch (err) {
    next(err);
  }
};
