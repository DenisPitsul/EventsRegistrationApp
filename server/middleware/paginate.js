module.exports.paginateEvents = (req, res, next) => {
  const { page = 1, results = 20 } = req.query;

  req.pagination = {
    page: Number(page),
    limit: Number(results),
    offset: (page - 1) * results,
  };

  next();
};
