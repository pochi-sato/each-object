const eachObject = (object, callback) =>
  Object.entries(object)
    .map(([key, value]) => ({
      tmpKey: key,
      tmpValue: callback(value),
    }))
    .reduce((prev, next) => Object.assign(prev, { [next.tmpKey]: next.tmpValue }), {});

exports.eachObject = eachObject;
