export default function updateUniqueItems(groceries) {
  if (!(groceries instanceof Map)) {
    throw new Error('Cannot process');
  }
  for (const [staff, quantity] of groceries) {
    if (quantity === 1) {
      groceries.set(staff, 100);
    }
  }
  return groceries;
}
