const { User, Thought } = require("../models");

const thoughtControllers = {
  findThoughts: async (req, res) => {
    try {
      const foundThoughts = await Thought.find({});
      res.json(foundThoughts);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  },

  findOneThought: async ({ params }, res) => {
    try {
      const foundThought = await Thought.findOne({ _id: params.thoughtId })
        .populate({
          path: "reactions",
          select: "-__v",
        })
        .select("-__v");
      res.json(foundThought);
    } catch (err) {
      console.log(err);
      res.sendStatus(400);
    }
  },

  createThought: async (req, res) => {
    try {
      const newThought = await Thought.create(req.body);
      await User.findOneAndUpdate(
        { _id: req.body.userId },
        { $push: { thoughts: newThought._id } },
        { new: true }
      );
      res.json(newThought);
    } catch (err) {
      res.status(400).json(err);
    }
  },

  updateThought: async (req, res) => {
    try {
      const thoughtData = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );
      if (!thoughtData) {
        res.status(404).json({ message: "Can't find a thought with this id" });
        return;
      }
      res.json(thoughtData);
    } catch (err) {
      res.json(err);
    }
  },

  deleteThought: async (req, res) => {
    try {
      const thoughtData = await Thought.findOneAndDelete({
        _id: req.params.thoughtId,
      });
      res.json(thoughtData);
    } catch (err) {
      res.json(err);
    }
  },

  addReaction: async (req, res) => {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body } },
        { runValidators: true, new: true }
      );
      if (!thought) {
        res.status(404).json({ message: "Can't find a thought with this id" });
        return;
      }
      res.json(thought);
    } catch (err) {
      res.json(err);
    }
  },

  removeReaction: async (req, res) => {
    try {
      const data = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { new: true }
      );
      res.json(data);
    } catch (err) {
      res.json(err);
    }
  },
};

module.exports = thoughtControllers;
