import bcrypt from "bcryptjs";
import { Users } from "../models/user.models";

const SignUp = async (req, res) => {
    const { Name, Email, Phone, Password } = req.body;
  
    console.log(req.body);
    try {
      const user = await Users.findOne({ Email: Email });
      if (user) {
        res.json(`User already exists as ${user.userRole} ... Please Login `);
      } else {
        const hasedpassword = await bcrypt.hash(Password, 10);
        Users.create({
          Email: Email,
          Name: Name,
          Phone: Phone,
          Password: hasedpassword,
          
        }).then(() => {
          res.json("Judge has been signed up successfully..");
        });
      }
    } catch (error) {
      console.log(error);
      res.json(error.message);
    }
  };
  

const SignUpJudge = async (req, res) => {
  const { Name, Email, Phone, Password, userRole } = req.body;

  console.log(req.body);
  try {
    const user = await Users.findOne({ Email: Email });
    if (user) {
      res.json(`User already exists as ${user.userRole} ... Please Login `);
    } else {
      const hasedpassword = await bcrypt.hash(Password, 10);
      Users.create({
        Email: Email,
        Name: Name,
        Phone: Phone,
        Password: hasedpassword,
        userRole: "Judge",
      }).then(() => {
        res.json("Judge has been signed up successfully..");
      });
    }
  } catch (error) {
    console.log(error);
    res.json(error.message);
  }
};

const SignUpLawyers = async (req, res) => {
  const { Name, Email, Phone, Password, userRole } = req.body;

  console.log(req.body);
  try {
    const user = await Users.findOne({ Email: Email });
    if (user) {
      res.json(`User already exists as ${user.userRole} ... Please Login `);
    } else {
      const hasedpassword = await bcrypt.hash(Password, 10);
      Users.create({
        Email: Email,
        Name: Name,
        Phone: Phone,
        Password: hasedpassword,
        userRole: "Lawyer",
      }).then(() => {
        res.json("Judge has been signed up successfully..");
      });
    }
  } catch (error) {
    console.log(error);
    res.json(error.message);
  }
};

const SignUpClerk = async (req, res) => {
  const { Name, Email, Phone, Password, userRole } = req.body;

  console.log(req.body);
  try {
    const user = await Users.findOne({ Email: Email });
    if (user) {
      res.json(`User already exists as ${user.userRole} ... Please Login `);
    } else {
      const hasedpassword = await bcrypt.hash(Password, 10);
      Users.create({
        Email: Email,
        Name: Name,
        Phone: Phone,
        Password: hasedpassword,
        userRole: "Clerk",
      }).then(() => {
        res.json("Judge has been signed up successfully..");
      });
    }
  } catch (error) {
    console.log(error);
    res.json(error.message);
  }
};

const SignUpBailOfficer = async (req, res) => {
  const { Name, Email, Phone, Password, userRole } = req.body;

  console.log(req.body);
  try {
    const user = await Users.findOne({ Email: Email });
    if (user) {
      res.json(`User already exists as ${user.userRole} ... Please Login `);
    } else {
      const hasedpassword = await bcrypt.hash(Password, 10);
      Users.create({
        Email: Email,
        Name: Name,
        Phone: Phone,
        Password: hasedpassword,
        userRole: "BailOfficer",
      }).then(() => {
        res.json("Judge has been signed up successfully..");
      });
    }
  } catch (error) {
    console.log(error);
    res.json(error.message);
  }
};


const login=async(req,res)=>{
    const {Email,Password,userRole}=req.body;
    console.log(req.body);

    try {
        const user=await Users.findOne({Email:Email});
        if(user){
            if(user.userRole ===userRole){
                const isMacth=await bcrypt.compare(user.password,Password)
                if(isMacth){
                    res.json({message:"Success",
                        user
                    })
                }
                else{
                    res.json("Password Incorrect ");
                }
            }
            else{
                res.json(`invalid Credentials , You are not ${userRole}`);
            }
        }
    } catch (error) {
        console.log(error);
        res.json(error.message);
    }
}

