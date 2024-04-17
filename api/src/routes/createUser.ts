import express from "express";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";
import hashPassword from "../utils/hash";

const router = express.Router();
const prisma = new PrismaClient();


//creating zod validation
const createUserSchema = z.object({
    email: z.string().trim().email({ message: "Invalid email address" }),
    name: z.string().trim().min(2, { message: "Name is required" }),
    password: z.string().min(6, { message: "Password must be atleast 6 digits" })
})

router.post("/createUser", async (req, res) => {
    try {
        const hashedPassword = await hashPassword({ password: req.body.password });
        const { email, name, password } = createUserSchema.parse(req.body);
        const newUser = await prisma.users.create({
            data: {
                email,
                name,
                password: hashedPassword
            }
        });
        return res.status(201).json({ message: "User created successfully", user: newUser });
    }

    catch (error) {
        if (error instanceof z.ZodError) {
            return res.status(400).json({ message: error.issues[0].message });
        }
        else{
            console.log(error);
            return res.status(500).json({ message: "Internal server error" });
        }
    }
})

export default router;