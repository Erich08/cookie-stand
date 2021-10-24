'use strict';

// seattle.renderTheList();

let hours = [
  ' ',
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
  'Daily Totals'
];


const tfoot = document.querySelector('tfoot');
const table = document.querySelector('table');
const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const stores = [];

function Stores(location, min, max, avg, total) {
  this.location = location;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.cookieArray = [];
  this.total = total;

  this.getRandomCustomers = function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },

  this.getCookieSalesPerHour = function () {
    let cookiesSold = this.getRandomCustomers();
    let cookiesSoldEachHour = Math.ceil(cookiesSold * this.avg);
    return cookiesSoldEachHour;
  },

  this.renderStore = function () {
    let tr = document.createElement('tr');
    tbody.appendChild(tr);
    let td = document.createElement('td');
    td.textContent = this.location;
    tr.appendChild(td);
    for (let i = 0; i < hours.length - 2; i++) {
      let cookieSales = this.getCookieSalesPerHour();
      this.cookieArray.push(cookieSales);
      this.total += cookieSales;
      let td2 = document.createElement('td');
      td2.textContent = this.cookieArray[i];
      tr.appendChild(td2);
    }
    let totalCookies = document.createElement('td');
    totalCookies.textContent = this.total;
    tr.appendChild(totalCookies);
  };
  stores.push(this);
}

function header() {
  let tr = document.createElement('tr');
    thead.appendChild(tr);
  for(let i = 0; i < hours.length; i++) {
    let td = document.createElement('td');
    td.textContent = hours[i];
    tr.appendChild(td);
  }
}

function footer() {
  let hourlyCookieTotals = [];
  let tr = document.createElement('tr');
  tfoot.appendChild(tr);
  let td = document.createElement('td');
  td.textContent= 'Totals';
  tr.appendChild(td);
 
  // let storeHourlyTotals = 0;
  for(let i = 0; i < hours.length -2; i++) {
    // let hourlyTd = document.createElement('td');
    let hourlyTotals = 0
     for(let j = 0; j < stores.length; j++) {
        hourlyTotals += stores[j][i]

     }
     console.log(hourlyTotals);
    //  let hourlyTd = document.createElement('td');
     hourlyCookieTotals.push(hourlyTotals);
     console.log(hourlyCookieTotals);
    //  hourlyTd.textContent(hourlyTotals);
    //  tr.appendChild(hourlyTd);
  }
  // loop through stores array. Sum up the contents. Append sum to end of the row
  // let hourlyTotalTd = document.createElement('td');
  // hourlyTotalTd.textContent = hourlyTotals;
  // tr.appendChild(hourlyTotalTd);
}



const seattle = new Stores('Seattle', 25, 65, 6.3, 0);
const tokyo = new Stores('Tokyo', 3, 24, 1.2, 0);
const dubai = new Stores('Dubai', 11, 38, 3.7, 0);
const paris = new Stores('Paris', 20, 38, 2.3, 0);
const lima = new Stores('Lima', 2, 16, 4.6, 0);
header();
footer();
console.log(stores);
seattle.renderStore();
tokyo.renderStore();
dubai.renderStore();
paris.renderStore();
lima.renderStore();

