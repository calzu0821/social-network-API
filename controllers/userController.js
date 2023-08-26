const {User, Thought} = require('../models');

module.exports = {
    // Get all users
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Get a single user
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId });

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Create a new user
  async createUser(req, res) {
    try {
      const dbUserData = await User.create(req.body);
      res.json(dbUserData);
    } catch (err) {
      res.status(500).json(err)
    }
  },
  // Delete a user and remove their thought
  async deleteUser(req, res){
    try{
        const dbUserData = await User.findOneAndRemove({ _id: req.params.userId })
        await Thought.deleteMany({ _id: { $in: dbUserData.thoughts } });
        res.json(dbUserData)
    }catch (err){
        res.status(500).json(err);
    }
  },
  async updateUser (req, res){
    try{
        const dbUserData = await User.findOneAndUpdate({ _id: req.params.userId },{ $set: req.body },{ runValidators: true, new: true })
        res.json(dbUserData)
    }catch(err){
        res.status(500).json(err)
    }
  },
  async createFriend(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: req.params.friendId } },
        { runValidators: true, new: true }
      );

      if (!user) {
        return res.status(404).json({ message: 'No user with this id!' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err)
    }
  },
  async deleteFriend(req, res){
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: req.params.friendId } },
        { runValidators: true, new: true }
      )

      if (!user) {
        return res.status(404).json({ message: 'No user with this id!' });
      }

      res.json(user);
    }catch (err){
        res.status(500).json(err);
    }
  },
};