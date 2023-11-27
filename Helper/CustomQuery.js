export function customizeMongoQuery(query) {
  const mongoQuery = {};
  if (query.name) {
    mongoQuery.name = { $regex: new RegExp(query.name, "i") };
  }
  if (query.fromPrice) {
    mongoQuery.price = { $gte: Number(query.fromPrice) };
  }
  if (query.toPrice) {
    mongoQuery.price = { ...mongoQuery.price, $lte: Number(query.toPrice) };
  }
  if (query.fromDiscount) {
    mongoQuery.discount = { $gte: Number(query.fromDiscount) };
  }
  if (query.toDiscount) {
    mongoQuery.discount = {
      ...mongoQuery.discount,
      $lte: Number(query.toDiscount),
    };
  }
  if (query.fromStock) {
    mongoQuery.stock = { $gte: Number(query.fromStock) };
  }
  if (query.toStock) {
    mongoQuery.stock = { ...mongoQuery.stock, $lte: Number(query.toStock) };
  }
  if (query.active) {
    const isActive = query.active.toLowerCase() === "true";
    mongoQuery.active = isActive;
  }
  return mongoQuery; // Return the modified mongoQuery
}
