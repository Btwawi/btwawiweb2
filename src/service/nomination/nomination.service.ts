import { FilterQuery, QueryOptions } from 'mongoose'
import Nomination, { INominate } from "../../model/nomination.model"

export type nominationInput = Omit<INominate, "_id" | "__v" | "createdAt" | "updatedAt">

export const createNomination = async (nominationData: nominationInput) => {
    return await Nomination.create(nominationData);
}

export const findNomination = async(
    query: FilterQuery<INominate>,
    options: QueryOptions = { lean: true }
) => {
    return await Nomination.findOne(query, {}, options);
}

export const findNominations = async(
    query: FilterQuery<INominate>,
    options: QueryOptions = { lean: true }
) => {
    return await Nomination.find(query, {}, options)
}

export const findAllNominations = async() => {
    return await Nomination.find();
}