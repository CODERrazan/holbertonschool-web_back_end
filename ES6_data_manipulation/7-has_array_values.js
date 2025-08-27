export default function hasValuesFromArray(mySet, myArray) {
  for (const element of myArray) {
    if (!mySet.has(element)) {
      return false;
    }
  }
  return true;
}
