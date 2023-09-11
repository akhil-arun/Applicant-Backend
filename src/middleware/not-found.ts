import {Request, Response} from 'express'

const notFound = (req: Request, res: Response) => res.status(404).send("The route does not exist :(")

module.exports = notFound
