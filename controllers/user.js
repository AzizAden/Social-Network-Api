const { User } = require("../models");

const userControllers = {
  findAllUsers: async (req, res) => {
    try {
      const usersData = await User.find({}).select("-__v");
      res.json(usersData);
    } catch (err) {
      console.log(err);
      res.sendStatus(400);
    }
  },

  findOneUser: async (req, res) => {
    try {
      const userData = await User.findOne({ _id: req.params.id })
        .populate({
          path: "thoughts",
          select: "-__v",
        })
        .populate({
          path: "friends",
          select: "-__v",
        })
        .select("-__v");
      res.json(userData);
    } catch (err) {
      console.log(err);
      res.sendStatus(400);
    }
  },

  createUser: async (req, res) => {
    try {
      const userData = await User.create(req.body);
      res.json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  updateUser: async (req, res) => {
    try {
      const userData = await User.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );
      if (!userData) {
        res.status(404).json({ message: "Can't find a user with this id" });
        return;
      }
      res.json(userData);
    } catch (err) {
      res.json(err);
    }
  },

  deleteUser: async (req, res) => {
    try {
      const userData = await User.findOneAndDelete({ _id: req.params.id });
      res.json(userData);
    } catch (err) {
      res.json(err);
    }
  },

  addFriend: async (req, res) => {
    try {
      const userData = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: req.params.friendId } },
        { new: true, runValidators: true }
      );
      if (!userData) {
        res.status(404).json({ message: "Can't find anyone with this id" });
        return;
      }
      res.json(userData);
    } catch (err) {
      res.json(err);
    }
  },

  removeFriend: async (req, res) => {
    try {
      const data = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: req.params.friendId } },
        { new: true }
      );
      res.json(data);
    } catch (err) {
      res.json(err);
    }
  },
};

module.exports = userControllers;
