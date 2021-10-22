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
  '7 PM'
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
const tfoot = document.querySelector('tfoot');
const table = document.querySelector('table');
const thead = document.querySelector('thead');
const seattleRow = document.getElementById('seattle');
const tokyoRow = document.getElementById('tokyo');
const dubaiRow = document.getElementById('dubai');
const parisRow = document.getElementById('paris');
const limaRow = document.getElementById('lima');
const hourlyTotals = document.getElementById('totals');

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

  this.renderSeattle = function () {
    for (let i = 0; i < hours.length; i++) {
      let cookieSales = this.getCookieSalesPerHour();
      this.cookieArray.push(cookieSales);
      this.total += cookieSales;
      let td = document.createElement('td');
      td.textContent = this.cookieArray[i];
      seattleRow.appendChild(td);
      
    }

    
  
  }

  this.seattleTotal = function() {
    let td = document.createElement('td');
    td.textContent = this.total;
    seattleRow.appendChild(td);
  }

  this.tokyoTotal = function() {
    let td = document.createElement('td');
    td.textContent = this.total;
    tokyoRow.appendChild(td);
  }

  this.dubaiTotal = function() {
    let td = document.createElement('td');
    td.textContent = this.total;
    dubaiRow.appendChild(td);
  }

  this.parisTotal = function() {
    let td = document.createElement('td');
    td.textContent = this.total;
    parisRow.appendChild(td);
  }

  this.limaTotal = function() {
    let td = document.createElement('td');
    td.textContent = this.total;
    limaRow.appendChild(td);
  }

  this.renderTokyo = function () {
    for (let i = 0; i < hours.length; i++) {
      let cookieSales = this.getCookieSalesPerHour();
      this.cookieArray.push(cookieSales);
      this.total += cookieSales;
      let td = document.createElement('td');
      td.textContent = this.cookieArray[i];
      tokyoRow.appendChild(td);
      
    }

    
  
  }

  this.renderDubai = function () {
    for (let i = 0; i < hours.length; i++) {
      let cookieSales = this.getCookieSalesPerHour();
      this.cookieArray.push(cookieSales);
      this.total += cookieSales;
      let td = document.createElement('td');
      td.textContent = this.cookieArray[i];
      dubaiRow.appendChild(td);
      
    }

    
  
  }

  this.renderParis = function () {
    for (let i = 0; i < hours.length; i++) {
      let cookieSales = this.getCookieSalesPerHour();
      this.cookieArray.push(cookieSales);
      this.total += cookieSales;
      let td = document.createElement('td');
      td.textContent = this.cookieArray[i];
      parisRow.appendChild(td);
      
    }

    
  
  }

  this.renderLima = function () {
    for (let i = 0; i < hours.length; i++) {
      let cookieSales = this.getCookieSalesPerHour();
      this.cookieArray.push(cookieSales);
      this.total += cookieSales;
      let td = document.createElement('td');
      td.textContent = this.cookieArray[i];
      limaRow.appendChild(td);
      
    }

    
  
  }
}
function header() {
  
for(let i = 0; i < hours.length; i++) {
  let th = document.createElement('th');
      thead.appendChild(th);
      let tr = document.createElement('tr');
      th.textContent = hours[i];
      th.appendChild(tr);
}
}

function footer() {
 
  for(let i = 0; i < hours.length; i++) {
    let th = document.createElement('th');
    tfoot.appendChild(th);
    // let tr = document.createElement('tr');
    th.textContent = hours[i];
    hourlyTotals.appendChild(th);
  }
}

function dailyTotals() {
  let th = document.createElement('th');
  thead.appendChild(th);
  th.textContent = 'Daily Totals';
  thead.appendChild(th);
}

const seattle = new Stores('Seattle', 25, 65, 6.3, [], 0);
const tokyo = new Stores('Tokyo', 3, 24, 1.2, [], 0);
const dubai = new Stores('Dubai', 11, 38, 3.7, [], 0 );
const paris = new Stores('Paris', 20, 38, 2.3, [], 0);
const lima = new Stores('Lima', 2, 16, 4.6, [], 0);
header();
// footer();
dailyTotals();
seattle.renderSeattle();
seattle.seattleTotal();
tokyo.renderTokyo();
tokyo.tokyoTotal();
dubai.renderDubai();
dubai.dubaiTotal();
paris.renderParis();
paris.parisTotal();
lima.renderLima();
lima.limaTotal();
