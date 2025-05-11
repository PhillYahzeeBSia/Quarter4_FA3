function getNumber() {
  let num;
  do {
    num = prompt("Input a number: ");
    } while (isNaN(num) || num === null || num === " ");
      return parseInt(num, 10);
    }

function generateShape(num) {
  let result = "Number inputted: " + num + "<br> <br>";
      if (num % 2 === 1) {
        for (let x = num; x >= 1; x--) {
          for (let y = 0; y < num; y++) {
            result += x + " ";
          }
          result += "<br>";
        }
      } else {
        for (let x = num; x >= 1; x--) {
          for (let y = 0; y < x; y++) {
            result += x + " ";
          }
          result += "<br>";
        }
      }
      return result;
  }
var number = getNumber();
var shape = generateShape(number);
document.getElementById("output").innerHTML = shape;

  
var contacts = [];

function updateContactDisplay() {
  document.getElementById("contactDisplay").textContent = contacts.join(" ");
  }
function addContact() {
  var input = document.getElementById("contactInput");
  var name = input.value.trim();
  if (name !== " ") {
    if (contacts.length >= 7) {
      contacts.shift();
      }
    contacts.push(name); 
    input.value = " "; 
    updateContactDisplay();
    }
  }
function removeContact() {
  contacts.pop();
  updateContactDisplay();
  }
