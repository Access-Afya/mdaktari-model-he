"use strict";
//
Object.defineProperty(exports, "__esModule", { value: true });
// admin
exports.Admin = require("./db/models/admin/Admin");
exports.Organization = require("./db/models/admin/Organization");
exports.OrganizationAdmin = require("./db/models/admin/OrganizationAdmin");
// others
exports.Consult = require("./db/models/Consult");
exports.Doctor = require("./db/models/Doctor");
exports.DoctorProfile = require("./db/models/DoctorProfile");
exports.PatientProfile = require("./db/models/PatientProfile");
exports.Payment = require("./db/models/Payment");
exports.Prescription = require("./db/models/Prescription");
exports.TestOrder = require("./db/models/TestOrder");
exports.User = require("./db/models/User");
exports.helloWorld = function () {
    return "Howdy!";
};
//# sourceMappingURL=index.js.map