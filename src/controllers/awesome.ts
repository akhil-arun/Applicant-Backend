import { Request, Response } from "express"
const {readApplicant, updateApplicant} = require('../db/crud')


const getApplicant = async(req:Request, res: Response) => {
    const queryResult = await readApplicant()
    if (!queryResult){
       return res.status(500).json({msg: "There was a problem on our end"});
    }
    res.status(200).json({queryResult})
}

const update = async(req : Request, res : Response) => {
    const id = parseInt(req.params.id.substring(1))
    console.log(id)
    const queryResult = await updateApplicant(id, req.body.applicant)
    if (!queryResult){
        return res.status(404).json({msg: "We could not update your information"})
    }
    res.status(200).json({sucess: true})
}

module.exports = {getApplicant, update}
