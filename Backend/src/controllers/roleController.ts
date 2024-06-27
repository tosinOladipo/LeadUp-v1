import { Request, Response } from "express";
import asyncHandler from "express-async-handler"
import { Role } from "../entity/Role";


// @desc    Create a new Role
// @route   POST /api/vi/roles
// @access  Public
const addRole = asyncHandler(async (req: Request, res: Response) => {


    const { userRole } = req.body

    // Validation
    if (!userRole) {
        res.status(400)
        throw new Error("Fill in all required fields")
    }


    // Create Role
    const newRole = Role.create({ userRole })
    if (newRole) {
        await newRole.save()
        res.status(201).json(newRole);

    } else {
        res.status(400)
        console.log(Error)
        throw new Error("Invalid company data")
    }

});


// @desc    Get Roles
// @route   GET /api/role
// @access  Private
const getRoles = asyncHandler(async (req, res) => {

    const roles = await Role.find()

    if (roles) {
        res.json(roles);
    }

});



// @desc    Get Role by ID
// @route   GET /api/roles/:id
// @access  Private
const getRoleByID = asyncHandler(async (req, res) => {
    const roleId = req.params.id;

    const role = await Role.findOne({
        where: {
            id: roleId
        }
    })

    if (role) {
        res.json(role);
    }

});


// @desc    Update Role
// @route   PUT /api/roles/:id
// @access  Private
const updateRole = asyncHandler(async (req, res) => {
    const roleId = req.params.id;

    const { userRole } = req.body

    const role = await Role.findOne({
        where: {
            id: roleId
        }
    })

    if (role) {
        role.userRole = userRole || role.userRole;

        const updatedRole = await role.save();

    res.json(updatedRole);
    }

})


// @desc    Delete Role by ID
// @route   DELETE /api/roles/:id
// @access  Private
const deleteRoleByID = asyncHandler(async (req, res) => {
    const roleId = req.params.id;

    const role = await Role.delete(roleId)

    if (role) {
        res.json({message: "Role deleted successfully"});
    }

});



export {
    addRole,
    getRoles,
    getRoleByID,
    updateRole,
    deleteRoleByID
};