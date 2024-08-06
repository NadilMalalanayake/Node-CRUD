const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/", async (req, res) => {
  //whateverrequest you send it should be asyncronized
  try {
    const usersget = await User.find();
    res.json(usersget); //use MVC(model view controller) each model for one user
  } catch (err) {
    console.log("error is:" + err);
  }
});

router.post("/", async (req, res) => {
  const user = new User({
    name: req.body.name,
    tech: req.body.tech,
    sub: req.body.sub,
  });

  try {
    const userpost = await user.save();
    res.json(userpost);
  } catch (error) {
    console.log("error is:" + error);
  }
});

router.get("/:id", async (req, res) => {
  //whateverrequest you send it should be asyncronized
  try {
    const userget = await User.findById(req.params.id);
    res.json(userget); //use MVC(model view controller) each model for one user
  } catch (err) {
    console.log("error is:" + err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const userput = await User.findById(req.params.id);
    if (!userput) {
      res.send("User Not Found");
    }

    userput.tech = req.body.tech;
    userput.sub = req.body.sub; //in here change sub status to new status

    const put1 = await userput.save();
    res.json(put1);
  } catch (error) {
    res.send("error found :" + error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const userdel = await User.findByIdAndDelete(req.params.id);
    if (!userdel) {
      return res.status(404).send("User not found");
    }

    res.status(200).send("User deleted successfully");
  } catch (err) {
    res.send("error Found:" + err);
  }
});

// router.delete("/:id", async (req, res) => {         //delete in different way
//     try {
//       const userdel = await User.findByIdA(req.params.id);
//       if (!userdel) {
//         return res.status(404).send("User not found");
//       }

//       await User.deleteOne({ _id: req.params.id });
//       res.status(200).send("User deleted successfully");
//     } catch (err) {
//       res.status(500).send("Error found: " + err.message);
//     }
//   });

module.exports = router; //we have export module to access in server.js
