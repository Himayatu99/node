//validator  the facility to validate the form on the client-side so data processing will be faster than server-side validation. ... Through JavaScript, we can validate name, password, email, date, mobile numbers and more fields.

const validator = require("validator");

const test = validator.isEmail("test@gmail.com")
console.log(test)