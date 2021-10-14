'use strict';

// object for my Seattle Store
const seattleStore = document.getElementById('seattleList');
let hours = [
  '6 a.m.',
  '7 a.m.',
  '8 a.m.',
  '9 a.m.',
  '10 a.m.',
  '11 a.m.',
  '12 p.m.',
  '1 p.m.',
  '2 p.m.',
  '3 p.m.',
  '4 p.m.',
  '5 p.m.',
  '6 p.m.',
  '7 p.m.',
];

let seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  cookiesSoldEachHour: [],
  // between min and max * avg
  getRandomCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  getCookieSalesPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let customersThisHour = this.getRandomCustomers();

      let cookiesSoldThisHour = Math.ceil(customersThisHour * this.avg);
      this.cookiesSoldEachHour.push(cookiesSoldThisHour);
    }
    console.log(this.cookiesSoldEachHour);
  },
  renderTheList: function () {
    this.getCookieSalesPerHour();
    // code that will render the lists to the page
    // render the LIs inside our UL
  },
};

seattle.renderTheList();
