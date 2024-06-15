import { Request, Response } from "express";
import asyncHandler from "express-async-handler"
import { Company } from "../entity/Company";


// @desc    Create a new Company
// @route   POST /api/vi/company
// @access  Public
const registerCompany = asyncHandler(async (req: Request, res: Response) => {


    const { companyName, companyEmail, companyPhoneNumber, companyAddress} = req.body

    // Validation
    if (!companyName || !companyEmail || !companyPhoneNumber || !companyAddress) {
        res.status(400)
        throw new Error("Fill in all required fields")
    }


    // Create Company
    const company = Company.create({ companyName, companyEmail, companyPhoneNumber, companyAddress})
    if (company) {
        await company.save()
        res.status(201).json(company);

    } else {
        res.status(400)
        console.log(Error)
        throw new Error("Invalid company data")
    }

});



// @desc    Get Company by ID
// @route   GET /api/company/:id
// @access  Private
const getCompanyByID = asyncHandler(async (req, res) => {
    const companyId = req.params.id;

    const company = await Company.findOne({
        where: {
            id: companyId
        }
    })

    if (company) {
        res.json(company);
    }

});


// @desc    Update Company Profile
// @route   PUT /api/company/:id
// @access  Private
const updateCompanyProfile = asyncHandler(async (req, res) => {
    const companyId = req.params.id;

    const { companyName, companyEmail, companyPhoneNumber, companyAddress} = req.body

    const company = await Company.findOne({
        where: {
            id: companyId
        }
    })

    if (company) {
        company.companyName = companyName || company.companyName;
        company.companyEmail = companyEmail || company.companyEmail;
        company.companyPhoneNumber = companyPhoneNumber || company.companyPhoneNumber;
        company.companyAddress = companyAddress || company.companyAddress;

        const updatedCompany = await company.save();

    res.json(updatedCompany);
    }

})


// @desc    Delete Company by ID
// @route   DELETE /api/company/:id
// @access  Private
const deleteCompanyByID = asyncHandler(async (req, res) => {
    const companyId = req.params.id;

    const company = await Company.delete(companyId)

    if (company) {
        res.json({message: "Company deleted successfully"});
    }

});



export {
    registerCompany,
    getCompanyByID,
    updateCompanyProfile,
    deleteCompanyByID
};