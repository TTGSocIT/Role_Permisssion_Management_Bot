# Overview

A Discord bot that automatically assigns channel/permission roles to users after they have been verified. Note this bot does not handle verification itself; it only manages role assignment after they have been verified based on the ping roles the user has.

# Setup
**1. Installation**

You will need to install Node.js v18 or higher installed: https://nodejs.org/. You will get npm package manager bundled with Node.js.

You will also have to clone the repository to your working directory with any method you like, or by using the git command line command:

```bash
git clone https://github.com/TTGSocIT/Role_Permisssion_Management_Bot.git
```

Then, while in the working directory of the cloned repository, install all the dependencies by running:
```bash
npm ci
```

**2. Environment Variable**

Create an .env file which has the following environment variables: 
```env
DISCORD_TOKEN="your bot token"
UNVERIFIED_ROLE_ID="your unverified role id"
VERIFIED_ROLE_ID="your verified role id"
```
The bot uses the IDs to give new users to the discord server the unverified role, and to detect when a user has then been verified. The name of the verified and unverified roles should be filled as well in `index.js` for the purpose of logging.

To setup what permission roles are given for which ping roles, a new object needs to be added to the "rolePairs" list in config.json. The object should have ave "pingRole" and a "ChannelRole" key. The values of both key should be another object which has the "name" and "id" key which are strings to the role name and id (on discord) respectively.

**3. Configure Role Pairs**

The bot assigns channel roles basead on pings roles. To configure this, edit the `config.json` to follow this structure.
```json
{
  "rolePairs": [
    {
      "pingRole": { "name": "ping role name here", "id": "ping role id here" },
      "channelRole": { "name": "ping role name here", "id": "channel role id here" }
    }
  ]
}
```

The pingRole tells the bot the role to trigger the assignment. The channelRole is the corrosponding role the bot should give the user. To add more role pairs, add more objects to the rolePair array in the same format.

**4. Running**

To run, simply type:
```bash
npm start
```

