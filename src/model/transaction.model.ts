import mongoose from "mongoose";
import { EDITION_TYPE } from "../utils/Constants";

export interface TransactionDocument extends mongoose.Document {
  fullName: string;
  description?: string;
  total: string;
  paymentVerified: string;
  editionPaidFor: string;
  email: string;
}

const transactionSchema = new mongoose.Schema(
  {
    fullName: { type: String, require: true },
    email: { type: String, require: true },
    referenceId: { type: String, require: true },
    description: { type: String, require: false },
    total: { type: String, require: true },
    paymentVerified: { type: String, require: true, default: false },
    editionPaidFor: {
      type: String,
      require: true,
      enum: EDITION_TYPE,
      default: "lagos",
    },
  },
  {
    timestamps: true,
  }
);

const Transaction = mongoose.model<TransactionDocument>(
  "Transaction",
  transactionSchema
);
export default Transaction;
