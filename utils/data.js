  const usernames = [
    'user1',
    'user2',
    'user3',
    'user4',
    'user5',
    // Add more usernames as needed
  ];
  
  const thoughtTexts = [
    'I just had a great day!',
    'Excited about the weekend!',
    'Feeling productive today.',
    'Thoughts on the latest movie?',
    // Add more thought texts as needed
  ];
  
  const reactionBodies = [
    '👍',
    '❤️',
    '😄',
    '😯',
    // Add more reaction bodies as needed
  ];
  
  // Get a random item given an array
  const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  // Gets a random username
  const getRandomUsername = () => getRandomArrItem(usernames);
  
  // Function to generate random thoughts
  const getRandomThoughts = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        thoughtText: getRandomArrItem(thoughtTexts),
        username: getRandomUsername(),
      });
    }
    return results;
  };
  
  // Function to generate random reactions
  const getRandomReactions = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        reactionBody: getRandomArrItem(reactionBodies),
        username: getRandomUsername(),
      });
    }
    return results;
  };
  
  // Export the functions for use in seed.js
  module.exports = { getRandomThoughts, getRandomReactions };
  