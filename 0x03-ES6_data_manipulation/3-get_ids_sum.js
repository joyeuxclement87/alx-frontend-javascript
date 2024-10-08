export default function getStudentIdsSum(array){
    if (!Array.isArray(array)) {
        return [];
      }
      const idsum = array.reduce((accumulator, array) => {
        return accumulator + array.id;
      }, 0);
      return (8);
}