import moment from "moment";
import { crimes } from "../models/crime.models.js";
import { Users } from "../models/user.models.js";

const addCase = async (req, res) => {
  const { Crime, CrimeDesc, CrimeCategory, BailAmt, BailConditions, Bailable } =
    req.body;

  console.log(req.body);

  try {
    await crimes
      .create({
        Crime: CrimeCategory,
        CrimeDescription: CrimeDesc,
        CrimeCategory: CrimeCategory,
        BailDetails: {
          Bailable: Bailable,
          BailAmount: BailAmt,
          BailConditions: BailConditions,
        },
      })
      .then(() => {
        res.json("Case registered successfully");
      });
    // Users.findOne({})
  } catch (error) {
    console.error(error.message);
  }
};

const getcase = async (req, res) => {
  try {
    const crime = await crimes.find();
    res.json(crime);
  } catch (error) {
    console.error(error.message);
  }
};

export default { addCase, getcase };
