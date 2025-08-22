"use server";

import bcrypt from "bcryptjs";
import dbConnect, { collectionObj } from "@/lib/Mongodb";

export const registerUser = async ({ name, email, password }) => {
    if (!name || !email || !password) return { success: false };

    const userCollections = await dbConnect(collectionObj.userCollections);
    const user = await userCollections.findOne({ email });

    if (!user) {
        const hashPassword = await bcrypt.hash(password, 10); // hash password
        const result = await userCollections.insertOne({
            name,
            email,
            password: hashPassword,
        });
        if (result.acknowledged) {
            return { success: true }; // ✅ Insert successful
        } else {
            return { success: false, error: "Registration failed" };
        }
    }

    return { success: false }; // user already exists
};
