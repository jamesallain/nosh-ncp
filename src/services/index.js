const users = require('./users/users.service.js');
const patients = require('./patients/patients.service.js');
//const graphql = require('../graphql');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(users);
  app.configure(patients);
  //app.configure(graphql);
};
