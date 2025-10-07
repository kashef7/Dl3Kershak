import jwt, { SignOptions } from "jsonwebtoken";
import { Response } from "express";
import { IUser } from "../models/userModel";

const createToken = (id: string) => {
  const JWT_SECRET = process.env.JWT_SECRET!;
  const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN  as SignOptions["expiresIn"];

  const options: SignOptions = { expiresIn: JWT_EXPIRES_IN };
  return jwt.sign({ id }, JWT_SECRET, options);
};

const signIn = (user: IUser, res: Response) => {
  const token = createToken(`${user._id}`);

  // cookie lifetime in milliseconds — separate from JWT lifetime
  const COOKIE_EXPIRES_IN_DAYS = Number(process.env.JWT_EXPIRES_IN) || 30;

  const cookieOptions = {
    expires: new Date(Date.now() + COOKIE_EXPIRES_IN_DAYS * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };

  res.cookie("jwt", token, cookieOptions);
  user.password = "";
};

export default signIn;
