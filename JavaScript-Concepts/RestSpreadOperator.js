function restOperator() {
  const array = ["Angular", "Python", "MongoDB", "FastAPI", "AWS"];
  const [framework, language, ...rest] = array;
  console.log(`Framework: ${framework}, Language: ${language}, Rest: ${rest}`);
}

function spreadOperator() {
  const array1 = ["Angular", "Python", "MongoDB"];
  const array2 = ["FastAPI", "AWS"];
  const combinedArray = [...array1, ...array2]; //used to combine arrays
  const newarray = [...array1, "ReactJS", ...array2]; //used to add new elements in between arrays
  console.log(`Combined Array: ${combinedArray}`);
  console.log(`New Array: ${newarray}`);
}

restOperator();
spreadOperator();
