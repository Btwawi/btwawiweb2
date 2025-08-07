import { FilterQuery, QueryOptions } from "mongoose"
import BoothRegistration, { IBooth } from "../../model/booth.model"

type boothRegistrationInput = Omit<IBooth, "_id" | "__v" | "createdAt" | "updatedAt">;

export const createBoothRegistration = async (boothRegistrationData: boothRegistrationInput) => {
    return await BoothRegistration.create(boothRegistrationData);
}

export const findRegisteredBooth = async (
    query: FilterQuery<IBooth>,
    options: QueryOptions = { lean: true }
) => {
    return await BoothRegistration.findOne(query, {}, options);
}

export const findRegisteredBooths = async (
  query: FilterQuery<IBooth>,
  options: QueryOptions = { lean: true }
) => {
  return await BoothRegistration.find(query, {}, options);
};

export const findAllRegisteredBooths = async () => {
    return await BoothRegistration.find();
}