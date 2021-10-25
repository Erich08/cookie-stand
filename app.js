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


let tfoot = document.querySelector('tfoot');
let table = document.querySelector('table');
let thead = document.querySelector('thead');
let tbody = document.querySelector('tbody');
let storeLoc = [];

function Stores(location, min, max, avg) {
  this.location = location;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.cookieArray = [];
  this.total = 0;

  this.getRandomCustomers = function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  };

  this.getCookieSalesPerHour = function () {
    let cookiesSold = this.getRandomCustomers();
    let cookiesSoldEachHour = Math.ceil(cookiesSold * this.avg);
    return cookiesSoldEachHour;
  };
  

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
  }
  storeLoc.push(this);

};

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
  tr.setAttribute('id','newTotal');
  let td = document.createElement('td');
  td.textContent = 'Totals'
  tr.appendChild(td);
  // tfoot.appendChild(tr);
  // let tr = document.createElement('tr');
  // tfoot.appendChild(tr);
  // let td = document.createElement('td');
  // td.textContent= 'Totals';
  // tr.appendChild(td);
  let finalTotal = 0;
  for(let i = 0; i < hours.length -2; i++) {
    let hourlyTotals = 0
     for(let j = 0; j < storeLoc.length; j++) {
        hourlyTotals += storeLoc[j].cookieArray[i];   
        
     }
     finalTotal += hourlyTotals;
     let hourlyTd = document.createElement('td');
     hourlyCookieTotals.push(hourlyTotals);
     hourlyTd.textContent = hourlyTotals;
     tr.appendChild(hourlyTd);
  }
  let finalTotalTd = document.createElement('td');
  finalTotalTd.textContent = finalTotal;
  tr.appendChild(finalTotalTd);

}


function handleSubmit(event) {
  event.preventDefault();
  let storeLocation = event.target.storeLocation.value;
  let minValue= event.target.minValue.value;
  let maxValue = event.target.maxValue.value;
  let avg = event.target.avg.value;
  let newLocation = new Stores(storeLocation, minValue, maxValue, avg);
  newLocation.renderStore();
  let cookieTableRemove = document.getElementsByTagName('tfoot')[0];
  let cookieTableRow = document.getElementById('newTotal');
  console.log(cookieTableRemove);
  cookieTableRemove.removeChild(cookieTableRow);
  footer();
  
}





let seattle = new Stores('Seattle', 25, 65, 6.3);
let tokyo = new Stores('Tokyo', 3, 24, 1.2);
let dubai = new Stores('Dubai', 11, 38, 3.7);
let paris = new Stores('Paris', 20, 38, 2.3);
let lima = new Stores('Lima', 2, 16, 4.6);






seattle.renderStore();
tokyo.renderStore();
dubai.renderStore();
paris.renderStore();
lima.renderStore();
header();
footer();
newStore.addEventListener('submit', handleSubmit);



