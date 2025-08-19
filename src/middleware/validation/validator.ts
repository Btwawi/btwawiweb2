import { body, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";
import { isEmpty } from "lodash";

export const userValidationRules = () => {
  return [
    //validation email
    body("email").isEmail(),
    body("role").not().isEmpty(),
    body("password").isLength({ min: 8 }),
  ];
};

export const partnerValidationRules = () => {
  return [
    //validation email
    body("email").isEmail(),
    body("contactPerson").not().isEmpty(),
    body("companyName").not().isEmpty(),
    body("businessNature").not().isEmpty(),
    body("partnerLevel").not().isEmpty(),
    body("phoneNum").not().isEmpty(),
  ];
};

export const attendeeUserValidationRules = () => {
  return [
    body("phoneNum").not().isEmpty(),
    //validation email
    body("email").isEmail(),
    body("fullName").not().isEmpty(),
    body("stateOfResidence").not().isEmpty(),
    body("attendingAs").not().isEmpty(),
    body("howDidYouHear").not().isEmpty(),
    body("expectations").not().isEmpty(),
    body("agreement").not().isEmpty(),
  ];
};

export const vendorUserValidationRules = () => {
  return [
    body("vendorCompanyName").not().isEmpty(),
    //validation email
    body("email").isEmail(),
    body("contactPersonName").not().isEmpty(),
    body("businessCategory").not().isEmpty(),
    body("servicesDescription").not().isEmpty(),
    body("agreement").not().isEmpty(),
  ];
};

export const updateOrderRules = () => {
  return [
    // userId must not be empty
    body("status")
      .not()
      .isEmpty()
      .isIn(["processing", "shipped", "delivered", "failed", "cancelled"]),
  ];
};

export const vendorValidationRules = () => {
  return [
    body("firstName").not().isEmpty(),
    body("lastName").not().isEmpty(),
    body("username").not().isEmpty(),
    body("img").not().isEmpty(),
    body("phoneNum").not().isEmpty(),
    body("additionalPhoneNum").not().isEmpty(),
    body("availability").not().isEmpty(),
    body("brandName").not().isEmpty(),
    body("BusinessInfo").isObject(),
    body("businessAccountDetails").isObject(),
    body("dob").isDate(),
    body("role").not().isEmpty(),
    //validation email
    body("email").isEmail(),
    // password must be at least 5 chars long
    body("password").isLength({ min: 8 }),
    // password must be at least 5 chars long
    // body("passwordConfirmation").isLength({ min: 8 }),
  ];
};

export const studentValidationRules = () => {
  return [
    // counselorId must not be empty
    body("counselorId").not().isEmpty(),
    // organizationId is required
    body("organizationId").not().isEmpty(),
    // phoneNum is required
    body("phoneNum").not().isEmpty(),
    // sex is required
    body("sex").not().isEmpty(),
    // grade is required
    body("grade").not().isEmpty(),
    // role is required
    body("role").not().isEmpty(),
    //validation email
    body("email").isEmail(),
    // password must be at least 5 chars long
    body("password").isLength({ min: 8 }),
    // password must be at least 5 chars long
    body("passwordConfirmation").isLength({ min: 8 }),
  ];
};

export const eventValidationRules = () => {
  return [
    // eventName must not be empty
    body("eventName").not().isEmpty(),
    // createdBy is required
    body("createdBy").not().isEmpty(),
    // organizationId is required
    body("organizationId").not().isEmpty(),
    // thumbNail is required
    body("thumbNail").not().isEmpty(),
    // backgroundImage is required
    body("backgroundImage").not().isEmpty(),
    // description is required
    body("description").not().isEmpty(),
    //attendees email
    body("date").not().isEmpty().isDate(),
  ];
};

export const cartValidationRules = () => {
  return [
    // userId must not be empty
    body("userId").not().isEmpty(),
    // userName is required
    body("userName").not().isEmpty(),
    // cartItems is required
    body("cartItems").isArray(),
  ];
};

export const cartUpdateValidationRules = () => {
  return [
    // cartItems is required
    body("cartItems").isArray(),
  ];
};

export const createCategoryRules = () => {
  return [
    // userId must not be empty
    body("name").not().isEmpty(),
    body("description").not().isEmpty(),

    // parent is optional
    body("parent").optional(),
    body("img").optional(),
  ];
};

export const updateCategoryRules = () => {
  return [
    // userId must not be empty
    body("name").optional(),
    body("categoryId").not().isEmpty(),
    body("description").not().isEmpty(),
    // parent is optional
    body("parent").optional(),
    body("img").optional(),
  ];
};

export const cartItemsValidationRules = () => {
  return [
    // productName must not be empty
    body("productName").not().isEmpty(),
    // itemPrice is required
    body("price").not().isEmpty(),
    // productId is required
    body("productId").not().isEmpty(),
    // quantity is required
    body("quantity").isNumeric(),
    // shippingStatus is required
    body("productImg").not().isEmpty(),
  ];
};

export const addToCartValidationRules = () => {
  return [
    // productName must not be empty
    body("userId").not().isEmpty(),
    // itemPrice is required
    body("productId").not().isEmpty(),
  ];
};

export const prooductValidationRule = () => {
  return [
    // name must not be empty
    body("name").not().isEmpty(),
    // price is required
    body("price").not().isEmpty(),
    // amount is required
    body("quantity").not().isEmpty(),
    //validation description
    body("description").not().isEmpty(),
    // password must be at least 5 chars long
  ];
};

export const prooductUpdateValidationRule = () => {
  return [
    // productId must not be empty
    body("productId").not().isEmpty(),
  ];
};

export const counsellorValidationRules = () => {
  return [
    // username must not be empty
    body("username").not().isEmpty(),
    // firstName is required
    body("firstName").not().isEmpty(),
    // lastName is required
    body("lastName").not().isEmpty(),
    // organizationId must not be empty
    body("organizationId").not().isEmpty(),
    // dob is required
    body("dob").not().isEmpty(),
    // phoneNum is required
    body("phoneNum").not().isEmpty(),
    // sex is required
    body("sex").not().isEmpty(),
    // role is required
    body("role").not().isEmpty(),
    //validation email
    body("email").isEmail(),
    // password must be at least 5 chars long
    body("password").isLength({ min: 8 }),
    // password must be at least 5 chars long
    body("passwordConfirmation").isLength({ min: 8 }),
  ];
};

export const userUpdateValidationRules = () => {
  return [
    // username must not be empty
    body("lastName").not().isEmpty(),
    // firstName is required
    body("firstName").not().isEmpty(),
    // username is required
    body("username").not().isEmpty(),
    // brandName is required
    body("brandName").not().isEmpty(),
    // availability is required
    body("availability")
      .not()
      .isEmpty()
      .isIn(["weekdays", "weekends", "everyday"]),
    // country is required
    body("country").not().isEmpty(),
    // address must not be empty
    body("address").not().isEmpty(),
    // city must not be empty
    body("city").not().isEmpty(),
    // phoneNum is required
    body("phoneNum").not().isEmpty(),
    // state is required
    body("state").not().isEmpty(),
    //validation email
    body("email").isEmail(),
  ];
};

export const userVendorUpdateValidationRules = () => {
  return [
    body("status")
      .not()
      .isEmpty()
      .isIn(["Active", "In-Active", "Not-Confirmed"]),
    //validation email
    body("email").isEmail(),
  ];
};

export const postValidationRules = () => {
  return [
    // tittle must not be empty
    body("title").not().isEmpty(),
    // body is required
    body("body").not().isEmpty(),
  ];
};

export const storeValidationRules = () => {
  return [
    // storeName must not be empty
    body("storeName").not().isEmpty(),
    // userId is required
    body("userId").not().isEmpty().isString(),
    // isRegistered is required
    body("isRegistered").isBoolean(),
    // phoneNumber is required
    body("phoneNumber").not().isEmpty(),
    // email is required
    body("email").not().isEmpty(),
    // address is required
    body("address").not().isEmpty(),
    // city is required
    body("city").not().isEmpty(),
    // country is required
    body("country").not().isEmpty(),
    // countryCode is required
    body("countryCode").not().isEmpty(),
  ];
};

export const createPostValidationRules = () => {
  return [
    // tittle must not be empty
    body("title").not().isEmpty(),
    // body is required
    body("body").not().isEmpty(),
  ];
};

export const updateValidationRules = () => {
  return [
    // tittle must not be empty
    body("title").not().isEmpty(),
    // body is required
    body("body").not().isEmpty(),
  ];
};

export const sessionValidationRules = () => {
  return [
    //validation email
    body("email").not().isEmpty(),
    // password must be at least 8 chars long
    body("password").isLength({ min: 8 }),
  ];
};

export const addAddressValidationRules = () => {
  return [
    //validation email
    body("address").not().isEmpty(),
    body("state").not().isEmpty(),
    body("country").not().isEmpty(),
    // password must be at least 8 chars long
    body("city").not().isEmpty(),
  ];
};

export const grantValidationRules = () => {
  return [
    body("ownerFullName").not().isEmpty().withMessage("Owner's Full Name is required"),
    body("businessName").not().isEmpty().withMessage("Business name is required"),
    body("businessEmailAddress").not().isEmpty().withMessage("Business Email Adress is required"),
    body("businessPhoneNumber").not().isEmpty().withMessage("Business phone number is required"),
    body("businessCategory").not().isEmpty().withMessage("Business category is required"),
    body("yearsInBusiness").not().isEmpty().withMessage("Years in Business is required"),
    body("stateOfOperation").not().isEmpty().withMessage("State of operation is required"),
    body("businessOnlinePlatform").not().isEmpty().withMessage("Business online platform such as website and social media handle is required"),
    body("businessDescription").not().isEmpty().withMessage("Business description is required")
        .isLength({ min: 200 }).withMessage("Business description must be at least 200 characters"),
    body("businessContribution").not().isEmpty().withMessage("Business contribution is required")
        .isLength({ min: 300 }).withMessage("Business contribution must be at least 300 characters"),
    body("businessShariahCompliance").not().isEmpty().withMessage("Shariah compliance information is required")
        .isLength({ min: 200 }).withMessage("Shariah compliance information must be at least 200 characters"),
    body("howGrantWillBenefit").not().isEmpty().withMessage("Grant benefit explanation is required")
        .isLength({ min: 600 }).withMessage("Grant benefit explanation must be at least 600 characters"),
    body("haveAttendedBtwawi").isString().withMessage("Btwawi attendance must be Yes or No"),
    body("supportingDocuments").isString().withMessage("Uploaded must be Url string")
  ];
};

export const nominationValidationRules = () => {
  return [
    body("fullName").not().isEmpty().withMessage("Full Name is required"),
    body("emailAddress").not().isEmpty().withMessage("Email Address is required"),
    body("phoneNumber").not().isEmpty().withMessage("Phone number is required"),
    body("nameOfNominatedBusiness").not().isEmpty().withMessage("Business name is required"),
    body("businessOwnerName").optional().isString().withMessage("Business owner name must be a string"),
    body("businessOwnerContact").not().isEmpty().withMessage("Business contact is required"),
    body("businessCategory").not().isEmpty().withMessage("Business category is required"),
    body("reasonForNomination").not().isEmpty().withMessage("Your reason for nomination is required")
        .isLength({ min: 200 }).withMessage("Your reason for nomination should not be less than 200 characters"),
    body("whatMakesBusinessHalal").not().isEmpty().withMessage("The Halal feature of the business is required")
        .isLength({ min: 200 }).withMessage("The Halal Feature should not be less than 200 characters"),
  ];
}

export const boothRegistrationValidationRules = () => {
  return [
    body("email").not().isEmpty().withMessage("Email is required").isEmail().withMessage("Please provide a valid email address"),
    
    body("vendorCompanyName").not().isEmpty().withMessage("Vendor/Company name is required")
      .isLength({ min: 2, max: 100 }).withMessage("Company name must be between 2 and 100 characters"),
    
    body("contactPersonName").not().isEmpty().withMessage("Contact person name is required")
      .isLength({ min: 2, max: 50 }).withMessage("Contact person name must be between 2 and 50 characters").trim(),
    
    body("phoneNumber").not().isEmpty().withMessage("Phone number is required"),
    body("website").optional().isURL().withMessage("Please provide a valid website URL"),
    
    body("socialMediaHandles").not().isEmpty().withMessage("Social media handles are required"),
    
    body("pastEditionAttendance").not().isEmpty().withMessage("Past edition attendance information is required"),
    
    body("experience").optional(),
    
    body("businessCategory").not().isEmpty().withMessage("Business category is required"),
    
    body("businessDescription").not().isEmpty().withMessage("Business description is required"),
    
    body("exhibitionRequirements").not().isEmpty().withMessage("Exhibition requirements are required"),
    
    body("exhibitionBudget").not().isEmpty().withMessage("Exhibition budget is required"),
    
    body("agreeToGuidelines").not().isEmpty().withMessage("You must agree to the guidelines"),
  ];
}

export const registrationValidationRules = () => {
  return [
    body("email").not().isEmpty().withMessage("Email is required")
      .isEmail().withMessage("Please provide a valid email address")
      .normalizeEmail(),

    body("fullName").not().isEmpty().withMessage("Full Name is required")
      .isLength({ min: 2, max: 100 })
      .withMessage("Full Name must be between 2 and 100 characters"),

    body("stateOfResidence").not().isEmpty().withMessage("State of Residence is required")
      .isLength({ min: 2, max: 50 })
      .withMessage("State of Residence must be between 2 and 50 characters"),

    body("phoneNumber").not().isEmpty().withMessage("Phone Number is required"),

    body("organisationCompanyName").not().isEmpty().withMessage("Organisation/Company Name is required")
      .isLength({ min: 2, max: 100 }).withMessage("Organisation/Company Name must be between 2 and 100 characters"),

    body("designationJobTitle").not().isEmpty().withMessage("Designation/Job Title is required")
      .isLength({ min: 2, max: 100 }).withMessage("Designation/Job Title must be between 2 and 100 characters"),

    body("previousAttendance").isString().withMessage("Previous attendance must be Yes or No")
      .not().isEmpty().withMessage("Previous attendance information is required"),

    body("previousExperience").optional(),

    body("attendanceAs").not().isEmpty().withMessage("Attendance type is required"),

    body("hearAboutEvent").not().isEmpty().withMessage("How you heard about the event is required"),

    body("referredBy").optional(),

    body("financialSupport").optional(),

    body("edition2025").not().isEmpty().withMessage("2025 edition selection is required"),

    body("expectations").optional().isLength({ max: 1000 }).withMessage("Expectations must not exceed 1000 characters"),

    body("questionsToAddress").optional().isLength({ max: 1000 }).withMessage("Questions to address must not exceed 1000 characters"),

    body("agreesToCommunications").not().isEmpty().withMessage("Agreement to communications is required").isString().withMessage("Agreement to communications must be agree"),
  ];
};

export const validate = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors: any[] = [];
  //@ts-ignore
  errors.array().map((err) => extractedErrors.push({ [err?.param]: err?.msg }));

  return res.status(422).json({
    errors: extractedErrors,
  });
};
