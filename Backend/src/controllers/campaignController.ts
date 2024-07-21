import { Request, Response } from "express";
import asyncHandler from "express-async-handler"
import { Campaign } from "../entity/Campaign";
import generateString from "../utils/generateString";
import { User } from "../entity/User";



// @desc    Create a new Campaign
// @route   POST /api/vi/campaigns
// @access  Public
const addCampaign = asyncHandler(async (req: Request, res: Response) => {


    const { campaignName, campaignChannel, campaignOwner } = req.body

    const campaignId = generateString(5).trim()
    const campaignURL = "http://localhost:3000/new-lead"

    // Validation
    if (!campaignName || !campaignChannel || !campaignOwner) {
        res.status(400)
        throw new Error("Fill in all required fields")
    }


    // Create Role
    const newCampaign = Campaign.create({ campaignName, campaignChannel, campaignOwner, campaignId, campaignURL })
    if (newCampaign) {
        await newCampaign.save()
        res.status(201).json(newCampaign);

    } else {
        res.status(400)
        console.log(Error)
        throw new Error("Invalid campaign data")
    }

});


// @desc    Get Campaigns
// @route   GET /api/campaigns
// @access  Private
const getCampaigns = asyncHandler(async (req, res) => {

    const campaigns = await Campaign.find()

    if (campaigns) {
        res.json(campaigns);
    }

});


// @desc    Get Campaign by USERID
// @route   GET /api/user/:id
// @route   GET /api/campaign/:id
// @access  Private
const getCampaignByUserID = asyncHandler(async (req, res) => {
    const userId = req.params.userId;

    const user = await User.findOne({
        where: {
            userId: userId
        }
    })

    if (user.role === "Admin") {

        const campaigns = await Campaign.find({
            order: {
                createdAt: -1
              }
        })
        if (campaigns) {
            res.json(campaigns);
        }
    }
    const campaign = await Campaign.find({
        where: {
            campaignOwner: userId
        },
        order: {
            createdAt: -1
          }
    })
    if (campaign) {
        res.json(campaign);
    }

});




// @desc    Get Campaign by ID
// @route   GET /api/campaigns/:id
// @access  Private
const getCampaignByID = asyncHandler(async (req, res) => {
    const campaignId = req.params.id;

    const campaign = await Campaign.findOne({
        where: {
            id: campaignId
        }
    })

    if (campaign) {
        res.json(campaign);
    }

});


// @desc    Update Campaign
// @route   PUT /api/campaigns/:id
// @access  Private
const updateCampaign = asyncHandler(async (req, res) => {
    const campaignId = req.params.id;

    const { campaignName, campaignChannel } = req.body

    const campaign = await Campaign.findOne({
        where: {
            id: campaignId
        }
    })

    if (campaign) {
        campaign.campaignName = campaignName || campaign.campaignName;
        campaign.campaignChannel = campaignChannel || campaign.campaignChannel;

        const updatedCampaign = await campaign.save();

    res.json(updatedCampaign);
    }

})


// @desc    Delete Campaign by ID
// @route   DELETE /api/campaigns/:id
// @access  Private
const deleteCampaignByID = asyncHandler(async (req, res) => {
    const campaignId = req.params.id;

    const camapaign = await Campaign.delete(campaignId)

    if (camapaign) {
        res.json({message: "Campaign deleted successfully"});
    }

});



export {
    addCampaign,
    getCampaigns,
    getCampaignByID,
    getCampaignByUserID,
    updateCampaign,
    deleteCampaignByID
};