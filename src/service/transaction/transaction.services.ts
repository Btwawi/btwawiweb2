import {
    FilterQuery,
    UpdateQuery,
    QueryOptions,
  } from "mongoose";
  import Transaction, { TransactionDocument } from '../../model/transaction.model'
  
  export type TransactionInput = Omit<TransactionDocument, "_id" | "__v" | "createdAt" | "updatedAt" >;

  export const createTransaction = async( 
      input: TransactionInput
  ) => {
      return await Transaction.create(input);
  }
  
  export const findTransaction = async(
      query: FilterQuery<TransactionDocument>,
      options: QueryOptions = { lean: true }
  ) => {
    return Transaction.findOne(query, {}, options);
  }
  
  export const countTransaction = async(
    query: FilterQuery<TransactionDocument>,
    options: QueryOptions = { lean: true }
  ) => {
  return Transaction.find(query).countDocuments({});
  }
  
  export const findTransactions = async(
    query: FilterQuery<TransactionDocument>,
    options: QueryOptions = { lean: true }
  ) => {
  return Transaction.find(query, {}, options);
  }
  
  
  export const findAllTransaction = async() => {
      return Transaction.find({});
  }
  
export const findAndUpdateTransaction = (
      query: FilterQuery<TransactionDocument>,
      update: UpdateQuery<TransactionDocument>,
      options: QueryOptions
    ) => {
      return Transaction.findOneAndUpdate(query, update, options);
};
    