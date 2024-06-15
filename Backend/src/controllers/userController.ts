import { Request, Response } from "express";
import asyncHandler from "express-async-handler"
import bcrypt from "bcryptjs"

import { User } from "../entity/User";
import generateToken from '../utils/generateToken';


// @desc    Create a new User
// @route   POST /api/vi/users
// @access  Public
const registerUser = asyncHandler(async (req: Request, res: Response) => {


    const { firstName, lastName, email, phoneNumber, password, role} = req.body

    // Validation
    if (!firstName || !lastName || !email || !phoneNumber || !password || !role) {
        res.status(400)
        throw new Error("Fill in all required fields")
    }

        // Validate password lenght
        if (password.length < 6) {
            res.status(400)
            throw new Error("Password must be up to 6 characters")
        }
    
        // Check if user email already exist
        const emailExists = await User.findOne({
            where: {
                email: email
            }
        })
    
        if (emailExists) {
            res.status(400)
            throw new Error("Email has already been used")
        }
    
    
        // Check if user phone number already exist
        const phoneExists = await User.findOne({
            where: {
                phoneNumber: phoneNumber
            }
        })
    
        if (phoneExists) {
            res.status(400)
            throw new Error("Email has already been used")
        }


    // Create User
    const user = User.create({ firstName, lastName, phoneNumber, email, password, role})
    if (user) {
        await user.save()
        res.status(201).json(user);

    } else {
        res.status(400)
        console.log(Error)
        throw new Error("Invalid user data")
    }

});




// @desc    Auth User & get token
// @route   POST /api/v1/users/auth
// @access  Public
const authUser = asyncHandler(async (req: Request, res: Response) => {

    const { email, password } = req.body

    // Validation
    if (!email || !password) {
        res.status(400)
        throw new Error("Fill in all required fields")
    }

    // Check if user user exists
    const user = await User.findOne({
        where: {
            email: email
        },
    })

    if (!user) {
        res.status(400)
        throw new Error("User does not exist")
    }

    // Check if password is correct
    const passwordIsCorrect = await bcrypt.compare(password, user.password)

    if (user && passwordIsCorrect) {

        //Return User & Token
        generateToken(res, user.id);
        res.status(200).json({
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            profileImg: user.profileImg,
            role: user.role
        })

    } else {

        res.status(400)
        console.log(Error)
        throw new Error("Invalid user data")
    }

});




export {
    registerUser,
    authUser
};
