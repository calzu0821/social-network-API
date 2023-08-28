# social-network-API

## Description
This project is an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. It's constructed using Express.js for routing, a MongoDB database, and the Mongoose ODM.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
To install and run the application, follow these steps:
1. Clone the repository to your local machine.
2. Navigate to the project directory in the terminal.
3. Run the following command to install the required dependencies: npm install
4. Start the application server by running the following command: npm start

## Usage
This project provides API routes to manage users, thoughts, friends, and reactions for a social network website. You can test these routes using tools like Insomnia.

API Routes
* users:
    GET /api/users: Get all users.
    POST /api/users: Create a new user.
    GET /api/users:id: Get user by id.
    PUT /api/users/:id: Update a user by ID.
    DELETE /api/user/:id: Delete a user by ID.
* friends:
    POST /api/users/:userId/friends/:friendId: Add a new friend.
    DELETE /api/users/:userId/friends/:friendId: Delete a friend.
* thoughts:
    GET /api/thoughts: Get all thoughts.
    POST /api/thoughts: Create a new thought.
    PUT /api/thoughts/:id: Update a thought by ID.
    DELETE /api/thoughts/:id: Delete a thought by ID.
* reactions:
    POST /api/thoughts/:thoughtId/reactions: Add a reaction.
    DELETE /api/thoughts/:thoughtId/reactions: Delete a reaction.

Git Hub Repository:  

Walkthrough Video:
https://drive.google.com/file/d/1So1cDNa4zHX4SKWBTePCCo5Lgb7tu2g0/view?usp=sharing

## Credits
I used the following third-party assets in this project:
- https://youtu.be/RGfFpQF0NpE
- https://youtu.be/YBOiX8DwinE
- https://youtu.be/-PdjUx9JZ2E
- https://youtu.be/jZ-dzj6ut54
- https://youtu.be/AWlLhRQJvtw

## License
N/A