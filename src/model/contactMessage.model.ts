import { Document, models, model, Schema } from "mongoose"

export interface IContactMessage extends Document {
    name: string;
    email: string;
    message: string;
    createdAt?: string;
    updatedAt?: string;
};

const ContactMessageSchema = new Schema<IContactMessage>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
}, {
    timestamps: true
})

const ContactMessage = models.ContactMessage || model<IContactMessage>("ContactMessage", ContactMessageSchema);

export default ContactMessage;