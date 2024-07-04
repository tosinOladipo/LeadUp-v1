import { Request, Response } from "express";
import asyncHandler from "express-async-handler"
import { Lead } from "../entity/Lead";


// @desc    Create a new Lead
// @route   POST /api/vi/leads
// @access  Public
const registerLead = asyncHandler(async (req: Request, res: Response) => {


    const { fullName, email, phoneNumber, ownerId, campaignId} = req.body

    // Validation
    if (!fullName || !email || !phoneNumber || !ownerId || !campaignId) {
        res.status(400)
        throw new Error("Fill in all required fields")
    }


    // Create Company
    const lead = Lead.create({ fullName, email, phoneNumber, ownerId, campaignId})
    if (lead) {
        await lead.save()
        res.status(201).json(lead);

    } else {
        res.status(400)
        console.log(Error)
        throw new Error("Invalid lead data")
    }

});





// @desc    Get Lead by ID
// @route   GET /api/leads/:id
// @access  Private
const getLeadByID = asyncHandler(async (req, res) => {
    const leadId = req.params.id;

    const lead = await Lead.findOne({
        where: {
            id: leadId
        }
    })

    if (lead) {
        res.json(lead);
    }

});


// @desc    Update Lead Profile
// @route   PUT /api/leads/:id
// @access  Private
const updateLeadProfile = asyncHandler(async (req, res) => {
    const leadId = req.params.id;

    const { fullName, email, phoneNumber, managerId, leadStage, feedback} = req.body

    const lead = await Lead.findOne({
        where: {
            id: leadId
        }
    })

    if (lead) {
        lead.fullName = fullName || lead.fullName;
        lead.email = email || lead.email;
        lead.phoneNumber = phoneNumber || lead.phoneNumber;
        lead.managerId = managerId || lead.managerId;
        lead.leadStage = leadStage || lead.leadStage;
        lead.feedback = feedback || lead.feedback;

        const updatedLead = await lead.save();

    res.json(updatedLead);
    }

})


// @desc    Delete Lead by ID
// @route   DELETE /api/leads/:id
// @access  Private
const deleteLeadByID = asyncHandler(async (req, res) => {
    const leadId = req.params.id;

    const lead = await Lead.delete(leadId)

    if (lead) {
        res.json({message: "Lead deleted successfully"});
    }

});



export {
    registerLead,
    getLeadByID,
    updateLeadProfile,
    deleteLeadByID
};