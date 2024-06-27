import { Request, Response } from "express";
import asyncHandler from "express-async-handler"
import { Funnel } from "../entity/Funnel";


// @desc    Create a new Funnel
// @route   POST /api/vi/funnels
// @access  Public
const addFunnel = asyncHandler(async (req: Request, res: Response) => {


    const { funnelName } = req.body

    // Validation
    if (!funnelName) {
        res.status(400)
        throw new Error("Fill in all required fields")
    }


    // Create Role
    const newFunnel = Funnel.create({ funnelName })
    if (newFunnel) {
        await newFunnel.save()
        res.status(201).json(newFunnel);

    } else {
        res.status(400)
        console.log(Error)
        throw new Error("Invalid funnel data")
    }

});


// @desc    Get Funnels
// @route   GET /api/v1/funnels
// @access  Private
const getFunnels = asyncHandler(async (req, res) => {

    const funnels = await Funnel.find()

    if (funnels) {
        res.json(funnels);
    }

});



// @desc    Get Funnel by ID
// @route   GET /api/roles/:id
// @access  Private
const getFunnelByID = asyncHandler(async (req, res) => {
    const funnelId = req.params.id;

    const funnel = await Funnel.findOne({
        where: {
            id: funnelId
        }
    })

    if (funnel) {
        res.json(funnel);
    }

});





// @desc    Update Funnel
// @route   PUT /api/funnels/:id
// @access  Private
const updateFunnel = asyncHandler(async (req, res) => {
    const funnelId = req.params.id;

    const { funnelName } = req.body

    const funnel = await Funnel.findOne({
        where: {
            id: funnelId
        }
    })

    if (funnel) {
        funnel.funnelName = funnelName || funnel.funnelName;

        const updatedFunnel = await funnel.save();

    res.json(updatedFunnel);
    }

})


// @desc    Delete Funnel by ID
// @route   DELETE /api/funnels/:id
// @access  Private
const deleteFunnelByID = asyncHandler(async (req, res) => {
    const funnelId = req.params.id;

    const funnel = await Funnel.delete(funnelId)

    if (funnel) {
        res.json({message: "Role deleted successfully"});
    }

});



export {
    addFunnel,
    getFunnels,
    getFunnelByID,
    updateFunnel,
    deleteFunnelByID
};