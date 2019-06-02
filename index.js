const eachObject = (object, callback) =>
  Object.entries(object)
    .map(([key, value]) => ({
      tmpKey: key,
      tmpValue: callback(value),
    }))
    .reduce((prev, next) => Object.assign(prev, { [next.tmpKey]: next.tmpValue }), {});

console.log(eachObject({ a: 1 }, x => x * 2));
console.log(eachObject({ a: 1, b: 2 }, x => x * 2));
console.log(eachObject({ a: 1, b: 2, c: 3 }, x => x * 2));
