import { Document, Schema, models, model } from "mongoose";

export interface IBooth extends Document {
  email: string;
  vendorCompanyName: string;
  contactPersonName: string;
  phoneNumber: string;
  website?: string;
  socialMediaHandles: string[];
  pastEditionAttendance: string;
  experience?: string;
  businessCategory: string;
  businessDescription: string;
  exhibitionRequirements: string;
  willingToPay: string;
  agreeToGuidelines: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const BoothRegistrationSchema: Schema = new Schema<IBooth>(
  {
    email: { type: String, required: true },
    vendorCompanyName: { type: String, required: true },
    contactPersonName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    website: { type: String },
    socialMediaHandles: {
      type: [
        {
          platform: { type: String, required: true },
          handle: { type: String, required: true },
        },
      ],
      required: true,
    },
    pastEditionAttendance: { type: String, required: true },
    experience: { type: String },
    businessCategory: { type: String, required: true },
    businessDescription: { type: String, required: true },
    exhibitionRequirements: { type: String, required: true },
    willingToPay: { type: String, required: true },
    agreeToGuidelines: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const BoothRegistration =
  models.BoothRegistration ||
  model<IBooth>("BoothRegistration", BoothRegistrationSchema);

export default BoothRegistration;
