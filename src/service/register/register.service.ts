import {
  FilterQuery,
  UpdateQuery,
  QueryOptions,
} from "mongoose";
import Registration, { IRegistration } from "../../model/registration.model";
import { omit } from "lodash";

export type RegistrationInput = Omit<IRegistration, "_id" | "__v" | "createdAt" | "updatedAt">;

export const createRegistration = async (
  input: RegistrationInput
) => {
  return await Registration.create(input);
};

export const validateWithEmail = async ({
  email,
}: {
  email: IRegistration["email"];
}) => {
  const user = await Registration.findOne({ email });

  if (!user) {
    return false;
  }

  return omit(user.toJSON(), "password");
};

export const findRegisteredSeat = async (
  query: FilterQuery<IRegistration>,
  options: QueryOptions = {}
) => {
  return await Registration.findOne(query, {}, options).lean();
};

export const findRegisteredSeats = async (
  query: FilterQuery<IRegistration>,
  options: QueryOptions
) => {
  return await Registration.find(query, {}, options).lean();
};

export const findAllRegisteredSeats = async () => {
  return await Registration.find();
};
