export default function getStudentIdsSum(array) {
  if (!Array.isArray(array)) {
    return [];
  }
  const idsum = array.reduce((accumulator, array) => accumulator + array.id, 0);
  return idsum;
}
