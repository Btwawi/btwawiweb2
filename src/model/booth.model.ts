import { Document, Schema, models, model } from 'mongoose'

export interface IBooth extends Document {
    email: string;
    vendorCompanyName: string;
    contactPersonName: string;
    phoneNumber: string;
    website?: string;
    socialMediaHandles: string;
    pastEditionAttendance: string;
    experience?: string;
    businessCategory: string;
    businessDescription: string;
    exhibitionRequirements: string;
    exhibitionBudget: string;
    agreeToGuidelines: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}

const BoothRegistrationSchema: Schema = new Schema<IBooth>({
    email: { type: String, required: true },
    vendorCompanyName: { type: String, required: true },
    contactPersonName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    website: { type: String },
    socialMediaHandles: { type: String, required: true },
    pastEditionAttendance: { type: String, required: true },
    experience: { type: String },
    businessCategory: { type: String, required: true },
    businessDescription: { type: String, required: true },
    exhibitionRequirements: { type: String, required: true },
    exhibitionBudget: { type: String, required: true },
    agreeToGuidelines: { type: Boolean, required: true },
}, {
    timestamps: true
})

const BoothRegistration = models.BoothRegistration || model<IBooth>("BoothRegistration", BoothRegistrationSchema);

export default BoothRegistration;