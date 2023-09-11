export {}

const pool = require('./connection')

const readApplicant = async () =>{
    try{
        const client = await pool.connect()
        const applicant = await client.query('SELECT * FROM applicant WHERE id = 1')
        client.release();
        return applicant.rows
    }
    catch(error){
        console.log(error)
        return null;
    }
}

const updateApplicant = async(id:Number, data:any) => {
    const queryString = 'UPDATE applicant SET firstname = $1, lastname =$2 WHERE id = $3'
    try{
        const client = await pool.connect()
        const result = client.query(queryString, [data.firstname, data.lastname, id])
        return result
    }
    catch(error){
        console.log()
        return null
    }
    
}

module.exports = {readApplicant, updateApplicant}
