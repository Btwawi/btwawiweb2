import ContactMessage, { IContactMessage } from "../../model/contactMessage.model";

export type contactMessageInput = Omit<IContactMessage, "_id" | "__v" | "createdAt" | "updatedAt">

export const createContactMessage = async (contactMessageData: contactMessageInput) => {
    return await ContactMessage.create(contactMessageData);
}