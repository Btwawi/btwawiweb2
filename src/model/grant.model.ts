import { Document, Schema, model, models } from 'mongoose'

export interface IGrant extends Document {
    ownerFullName: string;
    businessName: string;
    businessEmailAddress: string;
    businessPhoneNumber: string;
    businessCategory: string;
    yearsInBusiness: string;
    stateOfOperation: string;
    businessOnlinePlatform: string;
    businessDescription: string;
    businessContribution: string;
    businessShariahCompliance: string;
    howGrantWillBenefit: string;
    haveAttendedBtwawi: string;
    supportingDocuments: string;
    createdAt?: Date;
    updatedAt?: Date;
}

const GrantSchema = new Schema<IGrant>({
    ownerFullName: { type: String, required: true },
    businessName: { type: String, required: true },
    businessEmailAddress: { type: String, required: true },
    businessPhoneNumber: { type: String, required: true },
    businessCategory: { type: String, required: true },
    yearsInBusiness: { type: String, required: true },
    stateOfOperation: { type:String, required: true },
    businessOnlinePlatform: { type: String, required: true },
    businessDescription: { type: String, required: true },
    businessContribution: { type: String, required: true },
    businessShariahCompliance: { type: String, required: true },
    howGrantWillBenefit: { type: String, required: true },
    haveAttendedBtwawi: { type: String, required: true },
    supportingDocuments: { type: String, required: true },
}, {
    timestamps: true,
})

const Grant = models.Grant || model<IGrant>('Grant', GrantSchema);

export default Grant;