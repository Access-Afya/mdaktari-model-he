//

// admin
export const Admin = function (mongoose) {
  require("./db/models/admin/Admin")(mongoose);
};

export const Organization = function (mongoose) {
  require("./db/models/admin/Organization")(mongoose);
};
export const OrganizationAdmin = function (mongoose) {
  require("./db/models/admin/OrganizationAdmin");
};

// others
export const Consult = function (mongoose) {
  require("./db/models/Consult")(mongoose);
};
export const Doctor = function (mongoose) {
  require("./db/models/Doctor")(mongoose);
};
export const DoctorProfile = function (mongoose) {
  require("./db/models/DoctorProfile")(mongoose);
};
export const PatientProfile = function (mongoose) {
  require("./db/models/PatientProfile")(mongoose);
};
export const Payment = function (mongoose) {
  require("./db/models/Payment")(mongoose);
};
export const Prescription = function (mongoose) {
  require("./db/models/Prescription")(mongoose);
};
export const TestOrder = function (mongoose) {
  require("./db/models/TestOrder")(mongoose);
};
export const User = function (mongoose) {
  require("./db/models/User")(mongoose);
};

export const helloWorld = () => {
  return "Howdy!";
};
