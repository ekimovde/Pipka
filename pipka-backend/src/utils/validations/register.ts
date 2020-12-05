import { check } from "express-validator";

export default [
  check("fullName").isLength({ min: 2 }),
  check("email").isEmail(),
  check("password").isLength({ min: 3 }),
];
