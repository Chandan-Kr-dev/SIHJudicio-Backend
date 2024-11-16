import bcrypt from "bcryptjs";
import { Users } from "../models/user.models.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const SignUp = async (req, res) => {
  const { UserName, Name, Email, Phone, Password } = req.body;

  console.log(req.body);
  try {
    const user = await Users.findOne({ Email: Email });
    if (user) {
      res.json(`User already exists as ${user.userRole} ... Please Login `);
    } else {
      const hasedpassword = await bcrypt.hash(Password, 10);
      Users.create({
        UserName: UserName,
        Email: Email,
        profileInfo: {
          Name: Name,
        },
        Phone: Phone,
        password: hasedpassword,
      }).then(() => {
        res.json("You are signed in successfully..");
      });
    }
  } catch (error) {
    console.log(error);
    res.json(error.message);
  }
};

const SignUpOfficials = async (req, res) => {
  const {
    UserName,
    Name,
    Email,
    Phone,
    Password,
    Liscensenumber,
    AssignedCourt,
    userRole,
  } = req.body;

  console.log(req.body);
  try {
    const user = await Users.findOne({ Email: Email });
    if (user) {
      res.json(`User already exists as ${user.userRole} ... Please Login `);
    } else {
      const hasedpassword = await bcrypt.hash(Password, 10);
      const hashedLiscensenumber = await bcrypt.hash(Liscensenumber, 5);
      Users.create({
        Email: Email,
        UserName: UserName,
        Phone: Phone,
        password: hasedpassword,
        profileInfo: {
          Name: Name,
          LiscenseNumber: hashedLiscensenumber,
          AssignedCourt: AssignedCourt,
        },
        userRole: userRole,
      }).then(() => {
        res.json(`${userRole} has been signed up successfully..`);
      });
    }
  } catch (error) {
    console.log(error);
    res.json(error.message);
  }
};

const login = async (req, res) => {
  const { Email, Password, userRole } = req.body;
  console.log(req.body);

  try {
    const user = await Users.findOne({ Email: Email });
    if (user) {
      if (user.userRole === userRole) {
        const isMacth = await bcrypt.compare(Password, user.password);
        if (isMacth) {
          // const token=jwt.sign({id:user._id , role: user.userRole},process.env.JWT_SECRET,{expiresIn : "1h"})
          // res.status(200).json({token})
          res.json({ message: "Success", user });
        } else {
          res.json("Password Incorrect ");
        }
      } else {
        res.json(`invalid Credentials , You are not ${userRole}`);
      }
    }
  } catch (error) {
    console.log(error);
    res.json(error.message);
  }
};

export default { SignUp, SignUpOfficials, login };
