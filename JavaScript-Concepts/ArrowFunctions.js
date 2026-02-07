class ArrowFunctions {
  value = 50;
  clearInterval;

  traditionalFunction() {
    this.clearInterval = setTimeout(
      function () {
        console.log(this.value);
      }.bind(this),
      1000,
    );
  }

  arrowfunction = () => {
    this.clearInterval = setInterval(() => {
      this.value++;
      console.log("Arrow Function Value:", this.value);
    }, 5000);
  };
}

const arrow = new ArrowFunctions();
// arrow.traditionalFunction(); // This will not work as expected
// arrow.arrowfunction(); // This will work as expected
