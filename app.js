'use strict';

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
  cookieTotal: 0,

  getRandomCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },

  getCookieSalesPerHour: function () {
    let cookiesSold = this.getRandomCustomers();
    let cookiesSoldEachHour = Math.ceil(cookiesSold * this.avg);
    return cookiesSoldEachHour;
  },

  renderList: function () {
    for (let i = 0; i < hours.length; i++) {
      // let cookiesSoldEachHour = Math.ceil(this.getRandomCustomers() * this.avg);
      let cookieSales = this.getCookieSalesPerHour();
      this.cookiesSoldEachHourArray.push(cookieSales);
      this.cookieTotal += cookieSales;
      console.log(cookieSales, this.cookieTotal);
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.getCookieSalesPerHour()} cookies`;
      seattleList.appendChild(li);
    }
    let totalCookies = document.createElement('li');
    totalCookies.textContent = `Total cookies: ${this.cookieTotal}`;
    seattleList.appendChild(totalCookies);
  },
};

let tokyoLocation = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
  cookiesSoldEachHourArray: [],
  cookieTotal: 0,

  getRandomCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },

  getCookieSalesPerHour: function () {
    let cookiesSold = this.getRandomCustomers();
    let cookiesSoldEachHour = Math.ceil(cookiesSold * this.avg);
    return cookiesSoldEachHour;
  },

  renderList: function () {
    for (let i = 0; i < hours.length; i++) {
      let cookieSales = this.getCookieSalesPerHour();
      this.cookiesSoldEachHourArray.push(cookieSales);
      this.cookieTotal += cookieSales;
      console.log(cookieSales, this.cookieTotal);
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.getCookieSalesPerHour()} cookies`;
      tokyoList.appendChild(li);
    }
    let totalCookies = document.createElement('li');
    totalCookies.textContent = `Total cookies: ${this.cookieTotal}`;
    tokyoList.appendChild(totalCookies);
  },
};

let dubaiLocation = {
  name: 'Dubai',
  min: 11,
  max: 38,
  avg: 3.7,
  cookiesSoldEachHourArray: [],
  cookieTotal: 0,

  getRandomCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },

  getCookieSalesPerHour: function () {
    let cookiesSold = this.getRandomCustomers();
    let cookiesSoldEachHour = Math.ceil(cookiesSold * this.avg);
    return cookiesSoldEachHour;
  },

  renderList: function () {
    for (let i = 0; i < hours.length; i++) {
      let cookieSales = this.getCookieSalesPerHour();
      this.cookiesSoldEachHourArray.push(cookieSales);
      this.cookieTotal += cookieSales;
      console.log(cookieSales, this.cookieTotal);
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.getCookieSalesPerHour()} cookies`;
      dubaiList.appendChild(li);
    }
    let totalCookies = document.createElement('li');
    totalCookies.textContent = `Total cookies: ${this.cookieTotal}`;
    dubaiList.appendChild(totalCookies);
  },
};

let parisLocation = {
  name: 'Paris',
  min: 20,
  max: 38,
  avg: 2.3,
  cookiesSoldEachHourArray: [],
  cookieTotal: 0,

  getRandomCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },

  getCookieSalesPerHour: function () {
    let cookiesSold = this.getRandomCustomers();
    let cookiesSoldEachHour = Math.ceil(cookiesSold * this.avg);
    return cookiesSoldEachHour;
  },

  renderList: function () {
    for (let i = 0; i < hours.length; i++) {
      let cookieSales = this.getCookieSalesPerHour();
      this.cookiesSoldEachHourArray.push(cookieSales);
      this.cookieTotal += cookieSales;
      console.log(cookieSales, this.cookieTotal);
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.getCookieSalesPerHour()} cookies`;
      parisList.appendChild(li);
    }
    let totalCookies = document.createElement('li');
    totalCookies.textContent = `Total cookies: ${this.cookieTotal}`;
    parisList.appendChild(totalCookies);
  },
};

let limaLocation = {
  name: 'Lima',
  min: 2,
  max: 16,
  avg: 4.6,
  cookiesSoldEachHourArray: [],
  cookieTotal: 0,

  getRandomCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },

  getCookieSalesPerHour: function () {
    let cookiesSold = this.getRandomCustomers();
    let cookiesSoldEachHour = Math.ceil(cookiesSold * this.avg);
    return cookiesSoldEachHour;
  },

  renderList: function () {
    for (let i = 0; i < hours.length; i++) {
      let cookieSales = this.getCookieSalesPerHour();
      this.cookiesSoldEachHourArray.push(cookieSales);
      this.cookieTotal += cookieSales;
      console.log(cookieSales, this.cookieTotal);
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.getCookieSalesPerHour()} cookies`;
      limaList.appendChild(li);
    }
    let totalCookies = document.createElement('li');
    totalCookies.textContent = `Total cookies: ${this.cookieTotal}`;
    limaList.appendChild(totalCookies);
  },
};

seattleLocation.renderList();
tokyoLocation.renderList();
dubaiLocation.renderList();
parisLocation.renderList();
limaLocation.renderList();
