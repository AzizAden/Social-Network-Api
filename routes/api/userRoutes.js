const router = require("express").Router();
const {
  findAllUsers,
  findOneUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/userController");

// Route for finding all users and creating them
router.route("/").get(findAllUsers).post(createUser);

// Route for finding a single user and updating or deleting them
router.route("/:id").get(findOneUser).put(updateUser).delete(deleteUser);

// Route for adding or removing a friend
router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

module.exports = router;
