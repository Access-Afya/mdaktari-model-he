"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var timestamp_1 = __importDefault(require("../plugins/timestamp"));
var consultSchema = new mongoose_1.default.Schema({
    patient: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    prescriptions: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "Prescription",
        },
    ],
    testOrders: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "TestOrder",
        },
    ],
    doctor: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "Doctor" },
    openTokSessionId: { type: String },
    openTokDoctorToken: { type: String },
    openTokPatientToken: { type: String },
    purposeDescription: { type: String },
    testOrderReason: { type: String },
    paymentStatus: {
        type: String,
        enum: ["Pending", "Processing", "Success", "Failed"],
        default: "Pending",
    },
    paymentMethod: {
        type: String,
        enum: ["Cash", "M-Pesa", "Organization"],
        default: "Cash",
    },
    cashPaymentReceiptNumber: { type: String },
    billedOrganization: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Organization",
    },
    consultStatus: {
        type: String,
        enum: [
            "Pending",
            "WaitingDoctor",
            "Ongoing",
            "Rescheduled",
            "Completed",
            "Cancelled",
        ],
        default: "Pending",
    },
    medications: { type: String },
    duration: { type: String },
    allergies: { type: String },
    symptoms: { type: String },
    treatmentResult: { type: String },
    treatmentDescription: { type: String },
    consultStartedAt: { type: Date },
    patientRemarks: { type: String },
    patientNpsScore: { type: String },
    classification: { type: String },
    doctorNotes: { type: String },
    patientNotes: { type: String },
    consultNotes: { type: String },
    systemicReview: {
        digestiveSystem: {
            stomachPain: { type: Boolean, default: false },
            constipation: { type: Boolean, default: false },
            diarrhea: { type: Boolean, default: false },
            bloatedStomach: { type: Boolean, default: false },
            rumblingNoises: { type: Boolean, default: false },
            heartburn: { type: Boolean, default: false },
            nauseaAndVomiting: { type: Boolean, default: false },
        },
        respiratorySystem: {
            chestPain: { type: Boolean, default: false },
            shortnessOfBreath: { type: Boolean, default: false },
            coughing: { type: Boolean, default: false },
            bloodInSputum: { type: Boolean, default: false },
            whizzingSoundWhenBreathing: { type: Boolean, default: false },
        },
        immuneSystem: {
            autoimmuneDisorders: { type: Boolean, default: false },
            organInflammation: { type: Boolean, default: false },
        },
    },
    recap: { type: String },
    diagnosis: { type: String },
    managementPlan: { type: String },
    createdAt: { type: Date },
    updatedAt: { type: Date },
});
consultSchema.plugin(timestamp_1.default);
var ConsultModel = mongoose_1.default.model("Consult", consultSchema);
exports.default = ConsultModel;
//# sourceMappingURL=Consult.js.map