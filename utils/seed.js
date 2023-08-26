const connection = require('../config/connection');
const { User, Thought, Reaction } = require('../models');
const { getRandomThoughts, getRandomReactions } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  // Delete the collections if they exist
  await User.collection.drop();
  await Thought.collection.drop();
  await Reaction.collection.drop();

  // Create empty array to hold the users, thoughts, and reactions
  const users = [];
  const thoughts = [];
  const reactions = [];

  // Loop to create users
  for (let i = 0; i < 20; i++) {
    users.push({ username: `user${i + 1}` });
  }

  // Loop to create thoughts and reactions
  for (const user of users) {
    const userThoughts = getRandomThoughts(5); // 5 thoughts per user
    thoughts.push(...userThoughts);

    for (const thought of userThoughts) {
      const thoughtReactions = getRandomReactions(3); // 3 reactions per thought
      reactions.push(...thoughtReactions);
    }
  }

  // Insert users, thoughts, and reactions into the respective collections
  await User.collection.insertMany(users);
  await Thought.collection.insertMany(thoughts);
  await Reaction.collection.insertMany(reactions);

  console.info('Seeding complete! 🌱');
  process.exit(0);
});
