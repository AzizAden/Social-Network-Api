const router = require('express').Router();
const {
  findThoughts,
  findOneThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction
} = require('../../controllers/thoughtController');

// Find all thoughts: endpoint = api/thoughts
router.route('/').get(findThoughts).post(createThought);

// Routes for finding, updating, and deleting a thought
router.route('/:thoughtId')
  .get(findOneThought)
  .put(updateThought)
  .delete(deleteThought);

// Route handler for adding reactions
router.route("/:thoughtId/reactions")
  .post(addReaction);

// Route handler for removing reactions
router.route("/:thoughtId/reactions/:reactionId")
  .delete(removeReaction);

module.exports = router;
