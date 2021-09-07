'use strict';

function checkInternal(error, next) {
  if (Array.isArray(error)) return next(error);

  const proto = Object.getPrototypeOf(error);
  if (proto && proto.constructor && proto.constructor.name === 'errorConstructor') {
    return next(error);
  }

  return next(error);
}

exports.asyncWrapper = fn => async (req, res, next) => {
  try {
    await fn(req, res);
  } catch (e) {
    return checkInternal(e, next);
  }
};