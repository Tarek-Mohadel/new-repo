import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization as unknown as string;
    const split = token.split(" ")[1];

    const result = jwt.verify(
      split,
      process.env.JWT_SECRET_KEY as unknown as string
    );

    if (result) {
      next();
    } else {
      res.status(401);
    }
  } catch (err) {
    res.status(401)
  }
};

export default verifyToken;
