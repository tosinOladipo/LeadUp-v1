import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';



const protect = asyncHandler(async (req: Request, res : Response, next: NextFunction) => {
 
  const token = req.cookies.jwt;

  if (token) {
    try {
      const decoded  = jwt.verify(token, process.env.JWT_SECRET);

      res.locals.user = decoded
      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error('Not authorized, token failed');
    }
  } else {
    res.status(401);
    throw new Error('Not authorized, no token');
  }
});

export { protect };