"use server";

import bcrypt from "bcryptjs";
import dbConnect, { collectionObj } from "@/lib/Mongodb";

export const loginUser = async ({ email, password }) => {
    const userCollections = await dbConnect(collectionObj.userCollections);
    const user = await userCollections.findOne({ email });

    if (!user) return null;

    const isPasswordValid = await bcrypt.compare(password, user.password); // compare hashed password
    if (!isPasswordValid) return null;

    return { id: user._id.toString(), name: user.name, email: user.email }; // plain object for NextAuth
};
