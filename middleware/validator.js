import { check, validationResult } from "express-validator";

export const signupValidator = [
  check("username")
    .not()
    .isEmpty()
    .trim()
    .withMessage("All Fields are required"),
  check("email").isEmail().normalizeEmail().withMessage("InvalidEmail"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be six characters long"),
];

export const validatorResult = (req, res, next) => {
  const result = validationResult(req);
  const hasErrors = !result.isEmpty();

  if (hasErrors) {
    const firstError = result.array()[0].msg;
    return res.status(404).json({
      errorMessage: firstError, 
    });
  }
  next();
};
