module.exports = function towelSort(matrix) {
  if (matrix == undefined) return [];
  if (matrix.length !== 0) {
    let newArr = [];
    matrix.forEach((element, index) => {
      if (index % 2 === 0) {
        newArr = newArr.concat(element);
      } else {
        newArr = newArr.concat(element.reverse());
      }
    });

    return newArr;
  } else return [];
}
