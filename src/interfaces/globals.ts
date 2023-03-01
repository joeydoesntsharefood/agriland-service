import { Request, Response } from "express";

export type IRequests = (request: Request, response: Response) => void