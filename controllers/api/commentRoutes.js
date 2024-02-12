const router = require("express").Router();
const { Comment } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const user_id = req.session.user_id;

    console.log(req.body);
    console.log(user_id);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
