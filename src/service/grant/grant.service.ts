import { FilterQuery, QueryOptions } from "mongoose"
import Grant from "../../model/grant.model";
import { IGrant } from "../../model/grant.model";
import { omit } from 'lodash'


export type GrantInput = Omit<IGrant, "_id" | "__v"  | "createdAt" | "updatedAt">;

export const createGrant = async(grantData: GrantInput) => {
    return await Grant.create(grantData);
}

export const validateWithEmail = async ( 
    { businessEmailAddress } : { businessEmailAddress: IGrant["businessEmailAddress"]}
) => {
    const user = await Grant.findOne({businessEmailAddress});
    if(!user) {
        return false;
    }

    return omit(user.toJSON(), "password");
}

export const findGrant = async (
    query: FilterQuery<IGrant>,
    options: QueryOptions = { lean: true }
) => {
    return Grant.findOne(query, {}, options)
}

export const countGrants = async (
    query: FilterQuery<IGrant>,
    options: QueryOptions = { lean: true }
) => {
    return Grant.find(query).countDocuments({})
}

export const findGrants = async (
    query: FilterQuery<IGrant>,
    options: QueryOptions = { lean: true }
) => {
    return Grant.find(query, {}, options)
}

export const findAllGrants = async () => {
    return Grant.find({});
}