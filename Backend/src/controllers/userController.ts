import { Request, Response } from "express";
import asyncHandler from "express-async-handler"
import bcrypt from "bcryptjs"

import { User } from "../entity/User";
import generateToken from '../utils/generateToken';
import generateString from "../utils/generateString";


// @desc    Create a new User
// @route   POST /api/vi/users
// @access  Public
const registerUser = asyncHandler(async (req: Request, res: Response) => {


    const { firstName, lastName, email, phoneNumber, password, role} = req.body

    const userId = generateString(5).trim()


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
    const user = User.create({ firstName, lastName, phoneNumber, email, password, role, userId})
    if (user) {
        await user.save()
        res.status(201).json(user);

    } else {
        res.status(400)
        console.log(Error)
        throw new Error("Invalid user data")
    }

});


// @desc    Get All Users
// @route   GET /api/users
// @access  Private
const getAllUsers = asyncHandler(async (req, res) => {

    const users = await User.find({
        order: {
            createdAt: -1
          }
    })

    if (users) {
        res.json(users);
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
            role: user.role,
            userId: user.userId
        })

    } else {

        res.status(400)
        console.log(Error)
        throw new Error("Invalid user data")
    }

});


// @desc    Logout User/ clear cookie
// @route   POST /api/users/logout
// @access  Public
const logoutUser= (_, res: Response) => {
    res.cookie('jwt', '', {
      httpOnly: true,
      expires: new Date(0),
    });
    res.status(200).json({ message: 'Logged out successfully' });
  };
  


  // @desc    Update Role
// @route   PUT /api/roles/:id
// @access  Private
const updateUser = asyncHandler(async (req, res) => {
    const Id = req.params.id;

    const { firstName, lastName, email, phoneNumber, role, userId} = req.body

    const user = await User.findOne({
        where: {
            id: Id
        }
    })

    if (user) {
        user.firstName = firstName || user.firstName;
        user.lastName = lastName || user.lastName;
        user.email = email || user.email;
        user.phoneNumber = phoneNumber || user.phoneNumber;
        user.role = role || user.role;
        user.userId = userId || user.userId;

        const updatedUser = await user.save();

    res.json(updatedUser);
    }

})




export {
    registerUser,
    authUser,
    getAllUsers,
    logoutUser,
    updateUser
};
