import { Document, Schema, model, models } from 'mongoose'

export interface INominate {
    fullName: string;
    emailAddress: string;
    phoneNumber: string;
    nameOfNominatedBusiness: string;
    businessOwnerName?: string;
    businessOwnerContact: string;
    businessCategory: string;
    reasonForNomination: string;
    whatMakesBusinessHalal: string;
    createdAt?: Date;
    updatedAt?: Date;
};

const NominationSchema = new Schema<INominate>({
    fullName: { type: String, required: true },
    emailAddress: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    nameOfNominatedBusiness: { type: String, required: true },
    businessOwnerName: { type: String },
    businessCategory:  { type: String, required: true },
    reasonForNomination: { type: String, required: true },
    whatMakesBusinessHalal: { type: String, required: true },
});

const Nomination = models.Nomination || model<INominate>("Nomination", NominationSchema);

export default Nomination;