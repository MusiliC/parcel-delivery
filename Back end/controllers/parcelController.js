const mssql = require("mssql");
const config = require("../config/db");

const { v4: uuidv4 } = require("uuid");

async function getParcels(req, res) {
  try {
    let pool = await mssql.connect(config);
    let users = await pool.request().execute(`getParcels`);

    return res.json(users.recordsets[0]);
  } catch (error) {
    console.log(error);
  }
}

async function getParcel(req, res) {
  const id = req.params.id;

  try {
    let pool = await mssql.connect(config);
    let user = await pool.request().input("id", id).execute(`getAParcel`);

    return res.json(user.recordsets[0]);
  } catch (error) {
    console.log(error);
  }
}


async function deleteParcel(req, res) {
  const id = req.params.id;

  try {
    let pool = await mssql.connect(config);

    await pool.request().input("id", id).execute(`deleteParcel`);

    return res.json("user deleted");
  } catch (error) {
    console.log(error);
  }
}


async function createParcel(req,res) {
 
    const {id, description, sender_number,sender_name, receiver_number,receiver_name, start_location, end_location,sender_id,send_date} = req.body;

    try {

        let pool = await mssql.connect(config);

             await pool
               .request()
               .input("id", uuidv4(id))
               .input("description", description)
               .input("sender_number", sender_number)
               .input("sender_name", sender_name)
               .input("receiver_number", receiver_number)
               .input("receiver_name", receiver_name)
               .input("start_location", start_location)
               .input("end_location", end_location)
               .input("sender_id", sender_id)
               .input("send_date", send_date)
               .execute(`createParcel`);

             return res.json("Data Inserted successfully");
        
    } catch (error) {
        console.log(error);
    }
}


async function updateParcel(req,res){

     const {id, description, sender_number, receiver_number, start_location, end_location,sender_id} = req.body;

     const Id = req.params.id;

    try {

            let pool = await mssql.connect(config);

            await pool
              .request()
              .input("id", Id)
              .input("description", description)
              .input("sender_number", sender_number)
              .input("receiver_number", receiver_number)
              .input("start_location", start_location)
              .input("end_location", end_location)
              .input("sender_id", sender_id)
              .execute(`updateParcel`);

            return res.json("Data Updated successfully");
        
    } catch (error) {
        console.log(error);
    }
}



module.exports = {
     getParcels,
     getParcel,
     deleteParcel,
     createParcel,
     updateParcel
}