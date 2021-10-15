'use strict';

// // object for my Seattle Store
// // const seattleStore = document.getElementById('seattleList');
// let seattleLi = document.getElementById('seattlecookies');
// let hours = [
//   '6 a.m.',
//   '7 a.m.',
//   '8 a.m.',
//   '9 a.m.',
//   '10 a.m.',
//   '11 a.m.',
//   '12 p.m.',
//   '1 p.m.',
//   '2 p.m.',
//   '3 p.m.',
//   '4 p.m.',
//   '5 p.m.',
//   '6 p.m.',
//   '7 p.m.',
// ];

// let seattle = {
//   name: 'Seattle',
//   min: 23,
//   max: 65,
//   avg: 6.3,
//   cookiesSoldEachHour: [],
//   // between min and max * avg
//   getRandomCustomers: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   getCookieSalesPerHour: function () {
//     let cookiesSoldThisHour = Math.ceil(this.getRandomCustomers() * this.avg);
//     return cookiesSoldThisHour;
  
   
//   },
//   renderTheList: function () {
//     for (let i = 0; i < hours.length; i++) {
//       this.cookiesSoldEachHour.push(cookiesSoldThisHour);
//       let li = document.createElement('li');
//       li.textContent = 'This is a test';
//       seattleLi.appendChild(li);
//     }
//     console.log(this.cookiesSoldEachHour);
//     // let li = document.createElement('li');
//     // li.textContent = 'This is a test';
//     // seattleLi.appendChild(li);
//     // code that will render the lists to the page
//     // render the LIs inside our UL
//   },
// };

// seattle.renderTheList();
let seattleList = document.getElementById('seattlecookies');
let tokyoList = document.getElementById('tokyocookies');
let dubaiList = document.getElementById('dubaicookies');
let parisList = document.getElementById('pariscookies');
let limaList = document.getElementById('limacookies');
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
];

let seattleLocation = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  cookiesSoldEachHourArray: [],

  getRandomCustomers: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },

  getCookieSalesPerHour : function() {
    let cookiesSoldEachHour = Math.ceil(this.getRandomCustomers() * this.avg);
    return cookiesSoldEachHour;
  
  },

  renderList: function() {
    // let cookieTotal = 0;
    for(let i = 0; i < hours.length; i++) {
      let cookiesSoldEachHour = Math.ceil(this.getRandomCustomers() * this.avg);
      this.cookiesSoldEachHourArray.push(this.getRandomCustomers());
      // cookieTotal += this.cookiesSoldEachHourArray[i];
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.getCookieSalesPerHour()} cookies`;
      seattleList.appendChild(li);

    }
  //   let sum = this.cookiesSoldEachHourArray.reduce(function(a, b){
  //     return a + b;
  // }, 0);
  //   let totalCookies = document.createElement('li');
  //   totalCookies.textContent = `Total cookies: ${sum}`;
  //   seattleList.appendChild(li);
    
  }
  
  
  
};

let tokyoLocation = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
  cookiesSoldEachHourArray: [],

  getRandomCustomers: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },

  getCookieSalesPerHour : function() {
    let cookiesSoldEachHour = Math.ceil(this.getRandomCustomers() * this.avg);
    return cookiesSoldEachHour;
  
  },

  renderList: function() {
    // let cookieTotal = 0;
    for(let i = 0; i < hours.length; i++) {
      let cookiesSoldEachHour = Math.ceil(this.getRandomCustomers() * this.avg);
      this.cookiesSoldEachHourArray.push(this.getRandomCustomers());
      // cookieTotal += this.cookiesSoldEachHourArray[i];
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.getCookieSalesPerHour()} cookies`;
      tokyoList.appendChild(li);

    }
  //   let sum = this.cookiesSoldEachHourArray.reduce(function(a, b){
  //     return a + b;
  // }, 0);
  //   let totalCookies = document.createElement('li');
  //   totalCookies.textContent = `Total cookies: ${sum}`;
  //   tokyoList.appendChild(li);
    
  }
  
  
  
};

let dubaiLocation = {
  name: 'Dubai',
  min: 11,
  max: 38,
  avg: 3.7,
  cookiesSoldEachHourArray: [],

  getRandomCustomers: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },

  getCookieSalesPerHour : function() {
    let cookiesSoldEachHour = Math.ceil(this.getRandomCustomers() * this.avg);
    return cookiesSoldEachHour;
  
  },

  renderList: function() {
    // let cookieTotal = 0;
    for(let i = 0; i < hours.length; i++) {
      let cookiesSoldEachHour = Math.ceil(this.getRandomCustomers() * this.avg);
      this.cookiesSoldEachHourArray.push(this.getRandomCustomers());
      // cookieTotal += this.cookiesSoldEachHourArray[i];
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.getCookieSalesPerHour()} cookies`;
      dubaiList.appendChild(li);

    }
  //   let sum = this.cookiesSoldEachHourArray.reduce(function(a, b){
  //     return a + b;
  // }, 0);
  //   let totalCookies = document.createElement('li');
  //   totalCookies.textContent = `Total cookies: ${sum}`;
  //   seattleList.appendChild(li);
    
  }
  
  
  
};

let parisLocation = {
  name: 'Paris',
  min: 20,
  max: 38,
  avg: 2.3,
  cookiesSoldEachHourArray: [],

  getRandomCustomers: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },

  getCookieSalesPerHour : function() {
    let cookiesSoldEachHour = Math.ceil(this.getRandomCustomers() * this.avg);
    return cookiesSoldEachHour;
  
  },

  renderList: function() {
    // let cookieTotal = 0;
    for(let i = 0; i < hours.length; i++) {
      let cookiesSoldEachHour = Math.ceil(this.getRandomCustomers() * this.avg);
      this.cookiesSoldEachHourArray.push(this.getRandomCustomers());
      // cookieTotal += this.cookiesSoldEachHourArray[i];
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.getCookieSalesPerHour()} cookies`;
      parisList.appendChild(li);

    }
  //   let sum = this.cookiesSoldEachHourArray.reduce(function(a, b){
  //     return a + b;
  // }, 0);
  //   let totalCookies = document.createElement('li');
  //   totalCookies.textContent = `Total cookies: ${sum}`;
  //   seattleList.appendChild(li);
    
  }
  
  
  
};

let limaLocation = {
  name: 'Paris',
  min: 2,
  max: 16,
  avg: 4.6,
  cookiesSoldEachHourArray: [],

  getRandomCustomers: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },

  getCookieSalesPerHour : function() {
    let cookiesSoldEachHour = Math.ceil(this.getRandomCustomers() * this.avg);
    return cookiesSoldEachHour;
  
  },

  renderList: function() {
    // let cookieTotal = 0;
    for(let i = 0; i < hours.length; i++) {
      let cookiesSoldEachHour = Math.ceil(this.getRandomCustomers() * this.avg);
      this.cookiesSoldEachHourArray.push(this.getRandomCustomers());
      // cookieTotal += this.cookiesSoldEachHourArray[i];
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.getCookieSalesPerHour()} cookies`;
      limaList.appendChild(li);

    }
  //   let sum = this.cookiesSoldEachHourArray.reduce(function(a, b){
  //     return a + b;
  // }, 0);
  //   let totalCookies = document.createElement('li');
  //   totalCookies.textContent = `Total cookies: ${sum}`;
  //   seattleList.appendChild(li);
    
  }
  
  
  
};



seattleLocation.renderList();
tokyoLocation.renderList();
dubaiLocation.renderList();
parisLocation.renderList();
limaLocation.renderList();