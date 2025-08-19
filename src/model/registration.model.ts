import { Document, Schema, models, model } from "mongoose"

export interface IRegistration extends Document {
  email: string;
  fullName: string;
  stateOfResidence: string;
  phoneNumber: string;
  organisationCompanyName: string;
  designationJobTitle: string;
  previousAttendance: string;
  previousExperience?: string;
  attendanceAs: string;
  hearAboutEvent: string;
  referredBy?: string;
  financialSupport: string;
  edition2025: string;
  expectations?: string;
  questionsToAddress?: string;
  agreesToCommunications: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const registrationSchema: Schema = new Schema<IRegistration>(
  {
    email: { type: String, required: true },
    fullName: { type: String, required: true },
    stateOfResidence: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    organisationCompanyName: { type: String, required: true },
    designationJobTitle: { type: String, required: true },
    previousAttendance: { type: String, required: true },
    previousExperience: { type: String },
    attendanceAs: { type: String, required: true },
    hearAboutEvent: { type: String, required: true },
    referredBy: { type: String },
    financialSupport: { type: String },
    edition2025: { type: String, required: true },
    questionsToAddress: { type: String },
    agreesToCommunications: { type: String, required: true }
  },
  { timestamps: true }
);

const Registration = models.Registration || model<IRegistration>("Registration", registrationSchema)

export default Registration;
