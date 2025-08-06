import {
    FilterQuery,
    UpdateQuery,
    QueryOptions,
  } from "mongoose";
  import Order, { OrderDocument } from '../../model/order.model'
  
  export type OrderInput = Omit<OrderDocument, "_id" | "__v" | "createdAt" | "updatedAt">;

  export const createOrder = async( 
      input: OrderInput
  ) => {
      return await Order.create(input);
  }
  
  export const findOrder = async(
      query: FilterQuery<OrderDocument>,
      options: QueryOptions = { lean: true }
  ) => {
    return Order.findOne(query, {}, options);
  }
  
  export const countOrder = async(
    query: FilterQuery<OrderDocument>,
    options: QueryOptions = { lean: true }
  ) => {
  return Order.find(query).countDocuments({});
  }
  
  export const findOrders = async(
    query: FilterQuery<OrderDocument>,
    options: QueryOptions = { lean: true }
  ) => {
  return Order.find(query, {}, options);
  }
  
  
  export const findAllOrder = async() => {
      return Order.find({});
  }
  
export const findAndUpdateOrder = (
      query: FilterQuery<OrderDocument>,
      update: UpdateQuery<OrderDocument>,
      options: QueryOptions
    ) => {
      return Order.findOneAndUpdate(query, update, options);
};
    