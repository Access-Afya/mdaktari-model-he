// https://stackoverflow.com/questions/12632028/how-can-i-share-mongoose-models-between-2-apps/12846923
const mongoose = module.parent.exports.mongoose;
//
console.log(
  "module.parent.exports.mongoose-------A",
  module.parent.exports.mongoose
);
module.exports.mongoose = mongoose;

// admin
export const Admin = require("./db/models/admin/Admin");
export const Organization = require("./db/models/admin/Organization");
export const OrganizationAdmin = require("./db/models/admin/OrganizationAdmin");

// others
export const Consult = require("./db/models/Consult");
export const Doctor = require("./db/models/Doctor");
export const DoctorProfile = require("./db/models/DoctorProfile");
export const PatientProfile = require("./db/models/PatientProfile");
export const Payment = require("./db/models/Payment");
export const Prescription = require("./db/models/Prescription");
export const TestOrder = require("./db/models/TestOrder");
export const User = require("./db/models/User");

export const helloWorld = () => {
  return "Howdy!";
};
