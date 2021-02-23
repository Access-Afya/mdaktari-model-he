"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var timestamp_1 = __importDefault(require("../plugins/timestamp"));
var vitalsSchema = new mongoose_1.default.Schema({
    heartRate: { type: String },
    systolicBP: { type: String },
    diastolicBP: { type: String },
    bloodSugar: { type: String },
    height: { type: String },
    weight: { type: String },
    bmi: { type: String },
    waistCircumference: { type: String },
});
var respiratorySystemSchema = new mongoose_1.default.Schema({
    chestPain: { type: Boolean, default: false },
    shortnessOfBreath: { type: Boolean, default: false },
    coughing: { type: Boolean, default: false },
    bloodInSputum: { type: Boolean, default: false },
    whizzingSoundWhenBreathing: { type: Boolean, default: false },
});
var cardioVascularSystemSchema = new mongoose_1.default.Schema({
    chestPain: { type: Boolean, default: false },
    palpitations: { type: Boolean, default: false },
    dyspnoea: { type: Boolean, default: false },
    orthopnoea: { type: Boolean, default: false },
    paroxysmalNocturnalDyspnoea: { type: Boolean, default: false },
    oedema: { type: Boolean, default: false },
});
var digestiveSystemSchema = new mongoose_1.default.Schema({
    stomachPain: { type: Boolean, default: false },
    constipation: { type: Boolean, default: false },
    diarrhea: { type: Boolean, default: false },
    bloatedStomach: { type: Boolean, default: false },
    rumblingNoises: { type: Boolean, default: false },
    heartburn: { type: Boolean, default: false },
    nauseaAndVomiting: { type: Boolean, default: false },
    reducesAppetite: { type: Boolean, default: false },
    reflux: { type: Boolean, default: false },
    difficultySwallowing: { type: Boolean, default: false },
    rectalBleeding: { type: Boolean, default: false },
});
var urinarySystemSchema = new mongoose_1.default.Schema({
    painOrDiscomfortOnUrination: { type: Boolean, default: false },
    polyuria: { type: Boolean, default: false },
    urgency: { type: Boolean, default: false },
    hematuria: { type: Boolean, default: false },
    incontinence: { type: Boolean, default: false },
    dribbling: { type: Boolean, default: false },
    nocturia: { type: Boolean, default: false },
});
var reproductiveSystemSchema = new mongoose_1.default.Schema({
    dysmenorrhoea: { type: Boolean, default: false },
    menorrhagia: { type: Boolean, default: false },
    vaginalItching: { type: Boolean, default: false },
    vaginalDischarge: { type: Boolean, default: false },
    vaginalSores: { type: Boolean, default: false },
    dyspareunia: { type: Boolean, default: false },
    menopausalSymptoms: { type: Boolean, default: false },
    postmenopausalBleeding: { type: Boolean, default: false },
    penileDischarge: { type: Boolean, default: false },
    penileLesions: { type: Boolean, default: false },
    priapism: { type: Boolean, default: false },
    testicularPain: { type: Boolean, default: false },
    testicularMass: { type: Boolean, default: false },
});
var musculoskeletalSystemSchema = new mongoose_1.default.Schema({
    backache: { type: Boolean, default: false },
    musclePain: { type: Boolean, default: false },
    jointPain: { type: Boolean, default: false },
    stiffness: { type: Boolean, default: false },
    reducedMotion: { type: Boolean, default: false },
    redness: { type: Boolean, default: false },
    tenderness: { type: Boolean, default: false },
});
var neurologicalSystemSchema = new mongoose_1.default.Schema({
    headache: { type: Boolean, default: false },
    fainting: { type: Boolean, default: false },
    seizures: { type: Boolean, default: false },
    numbnessOrLossOfSensation: { type: Boolean, default: false },
    tinglingOrAlteredSensation: { type: Boolean, default: false },
    weakness: { type: Boolean, default: false },
    paralysis: { type: Boolean, default: false },
    involuntaryMovements: { type: Boolean, default: false },
    visionChanges: { type: Boolean, default: false },
    headInjury: { type: Boolean, default: false },
});
var entSystemSchema = new mongoose_1.default.Schema({
    hearingDifficulty: { type: Boolean, default: false },
    earPain: { type: Boolean, default: false },
    tinnitus: { type: Boolean, default: false },
    vertigo: { type: Boolean, default: false },
    nasalCongestion: { type: Boolean, default: false },
    nasalDischarge: { type: Boolean, default: false },
    noseBleed: { type: Boolean, default: false },
    throatIrritation: { type: Boolean, default: false },
    painWhileSwallowing: { type: Boolean, default: false },
    voiceHoarseness: { type: Boolean, default: false },
    voiceLoss: { type: Boolean, default: false },
});
var endocrineSystemSchema = new mongoose_1.default.Schema({
    heatIntolerance: { type: Boolean, default: false },
    coldIntolerance: { type: Boolean, default: false },
    excessiveSweating: { type: Boolean, default: false },
    excessiveThirst: { type: Boolean, default: false },
    excessiveHunger: { type: Boolean, default: false },
    changeInShoeOrGloveOrHatSize: { type: Boolean, default: false },
});
var psychiatricSystemSchema = new mongoose_1.default.Schema({
    anxiety: { type: Boolean, default: false },
    panic: { type: Boolean, default: false },
    depression: { type: Boolean, default: false },
    excitedMood: { type: Boolean, default: false },
    memoryChange: { type: Boolean, default: false },
    hallucinations: { type: Boolean, default: false },
    delusions: { type: Boolean, default: false },
});
var breastsSchema = new mongoose_1.default.Schema({
    painOrDiscomfort: { type: Boolean, default: false },
    lump: { type: Boolean, default: false },
    nippleDischarge: { type: Boolean, default: false },
    changeInNormalSymmetry: { type: Boolean, default: false },
    skinChanges: { type: Boolean, default: false },
});
var immuneSystemSchema = new mongoose_1.default.Schema({
    autoimmuneDisorders: { type: Boolean, default: false },
    organInflammation: { type: Boolean, default: false },
});
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
    chvCode: { type: String },
    systemicReview: {
        vitals: vitalsSchema,
        respiratorySystem: respiratorySystemSchema,
        cardioVascularSystem: cardioVascularSystemSchema,
        digestiveSystem: digestiveSystemSchema,
        urinarySystem: urinarySystemSchema,
        reproductiveSystem: reproductiveSystemSchema,
        musculoskeletalSystem: musculoskeletalSystemSchema,
        neurologicalSystem: neurologicalSystemSchema,
        entSystem: entSystemSchema,
        endocrineSystem: endocrineSystemSchema,
        psychiatricSystem: psychiatricSystemSchema,
        breasts: breastsSchema,
        immuneSystem: immuneSystemSchema,
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