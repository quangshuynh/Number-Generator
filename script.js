var name = prompt("What is your name?");
document.write("Hello "+ name +", click on the type of number to generate a list of the first 30 values.");

function refresh() {
  window.location.reload();
};

/*Primes*/
function primeNumber() { 
  var primeNumbers= new Array("2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113");
        document.getElementById('prime2').innerHTML = primeNumbers;
      };

/*Composites*/
function compositeNumber() {
  var compositeNumbers = new Array("4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, 21, 22, 24, 25, 26, 27, 28, 30, 32, 33, 34, 35, 36, 38, 49, 40, 42, 44, 45");
    document.getElementById('composite2').innerHTML = compositeNumbers;
  }

/*Squares*/
var squareNumbers = [];
    function squareNumber() {
      for (i=1; i<=30; i++) {
        var square1 = i*i;
        squareNumbers.push(" " + square1);
      }
      document.getElementById('square2').innerHTML = squareNumbers;
    };

/*Cubes*/
var cubedNumbers = [];
    function cubedNumber() {
      for (i=1; i<=30; i++) {
        var cube1 = (i*i*i);
        cubedNumbers.push(" " + cube1);
      }
      document.getElementById('cube2').innerHTML = cubedNumbers;
    };

/*Triangular*/
var triangularNumbers = [];
    function triangularNumber() {
      for (i=1; i<=30; i++) {
        var triangle1 = i*(i+1)/2;
        triangularNumbers.push(" " + triangle1);
      }
      document.getElementById('triangle2').innerHTML = triangularNumbers;
    };
/*Fibonacci*/
var FibNumbers = [1,1];
    function fibonacciNumber() {
      for (i=0; i<=30; i++) {
        FibNumbers.push(FibNumbers[i] + FibNumbers[i+1]);
      }
      document.getElementById('fibonacci2').innerHTML = FibNumbers;
    };






