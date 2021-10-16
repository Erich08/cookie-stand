'use strict';

// seattle.renderTheList();

let hours = [
  '6 AM',
  '7 AM',
  '8 AM',
  '9 AM',
  '10 AM',
  '11 AM',
  '12 PM',
  '1 PM',
  '2 PM',
  '3 PM',
  '4 PM',
  '5 PM',
  '6 PM',
  '7 PM',
  'Daily Location Total'
];

// let seattleLocation = {
//   name: 'Seattle',
//   min: 23,
//   max: 65,
//   avg: 6.3,
//   cookiesSoldEachHourArray: [],
//   cookieTotal: 0,

//   getRandomCustomers: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },

//   getCookieSalesPerHour: function () {
//     let cookiesSold = this.getRandomCustomers();
//     let cookiesSoldEachHour = Math.ceil(cookiesSold * this.avg);
//     return cookiesSoldEachHour;
//   },

//   renderList: function () {
//     for (let i = 0; i < hours.length; i++) {
//       // let cookiesSoldEachHour = Math.ceil(this.getRandomCustomers() * this.avg);
//       let cookieSales = this.getCookieSalesPerHour();
//       this.cookiesSoldEachHourArray.push(cookieSales);
//       this.cookieTotal += cookieSales;
//       console.log(cookieSales, this.cookieTotal);
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]}: ${this.getCookieSalesPerHour()} cookies`;
//       seattleList.appendChild(li);
//     }
//     let totalCookies = document.createElement('li');
//     totalCookies.textContent = `Total cookies: ${this.cookieTotal}`;
//     seattleList.appendChild(totalCookies);
//   },
// };

const tableBody = document.querySelector('tbody');
const tableHead = document.querySelector('thead')

function Stores(location, min, max, avg, cookieArray, total ) {
  this.location = location;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.cookieArray = cookieArray;
  this.total = total;

  this.getRandomCustomers = function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  }

  this.getCookieSalesPerHour = function () {
    let cookiesSold = this.getRandomCustomers();
    let cookiesSoldEachHour = Math.ceil(cookiesSold * this.avg);
    return cookiesSoldEachHour;
  }

  this.renderList = function () {
    for (let i = 0; i < hours.length; i++) {
      let cookiesSoldEachHour = Math.ceil(this.getRandomCustomers() * this.avg);
      let cookieSales = this.getCookieSalesPerHour();
      this.cookieArray.push(cookieSales);
      this.total += cookieSales;
      // console.log(cookieSales, this.cookieTotal);
      // let tr = document.createElement('tr');
      // tableHead.appendChild(tr);
      // let td = document.createElement('td');
      // td.textContent = hours[i];
      // tr.appendChild(td);
      let tr = document.createElement('tr');
      tableBody.appendChild(tr);
      let td = document.createElement('td');
      td.textContent = this.cookieArray[i];
      tr.appendChild(td);
      
    }
    // let totalCookies = document.createElement('li');
    // totalCookies.textContent = `Total cookies: ${this.cookieTotal}`;
    // seattleList.appendChild(totalCookies);
  }
}
function header() {
  
for(let i = 0; i < hours.length; i++) {
  let tr = document.createElement('tr');
      tableHead.appendChild(tr);
      let td = document.createElement('td');
      td.textContent = hours[i];
      tr.appendChild(td);
}
}
const seattle = new Stores('Seattle', 25, 65, 6.3, [], 0);
// const tokyo = new Stores('Tokyo', 10, 15, 2.5, [], 0);
header();
seattle.renderList();
// tokyo.renderList();
console.log(seattle)