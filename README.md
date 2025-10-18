# Role Permission Management Bot

![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![discord.js](https://img.shields.io/badge/discord.js-v14-blue)

A Discord bot built with [discord.js](https://discord.js.org/) that automatically assigns channel or permission roles to users after they have been verified.
> ⚠️ **Note**: This bot does not handle verification itself. It only manages role assignments based on the ping roles the user has after their verification.

# Setup
### 1. Installation

You will need to install [Node.js v18 or higher](https://nodejs.org/). You will get npm (Node Package Manager) bundled with Node.js.

Clone the repository to your working directory using your preferred method, or by running:

```bash
git clone https://github.com/TTGSocIT/Role_Permisssion_Management_Bot.git
```

Then, while in the working directory of the cloned repository, install all the dependencies by running:
```bash
npm ci
```

### 2. Discord Bot

First, create a bot with the correct permissions.

1. Go to the **Discord Developer Portal** → click **New Application**.
2. Under **Installation → Installation Contexts**, enable **Guild Install**.
3. Under the new **Default Install Settings**, add **Bot** under **Scopes**.
4. In the **Permissions** dropdown, enable **Manage Roles**.
5. Under **Bot → Privileged Gateway Intents**, enable **Server Members Intent**.

Next, set up this bot on your Discord server:

1. Under **Installation → Install Link**, choose **Discord Provided Link**.
2. Copy the link and open it in a browser.
3. Select the server and authorize the bot with **Manage Roles** permission.
4. On the server, under **Roles**, a new role with the same name as your bot will appear. Move this role **above all roles** the bot will assign later.

> ⚠️ **Note:** The bot must have **Manage Roles** permission and its role must be above all roles it will assign.

### 3. Environment Variable

Create an `.env` file with the following environment variables: 
```env
DISCORD_TOKEN="YOUR_BOT_TOKEN_HERE"
UNVERIFIED_ROLE_ID="UNVERIFIED_ROLE_ID_HERE"
VERIFIED_ROLE_ID="VERIFIED_ROLE_ID_HERE"
```
The bot uses the IDs to assign the **Unverified role** to new users, and to detect when a user has then been verified. Make sure the name of the **Verified** and **Unverified** role names are specified in the `index.js` file for the purpose of logging.

### 4. Role Pair Configuration

The bot assigns channel roles based on **ping roles**. To configure this, edit the `config.json` file to follow this structure:
```json
{
  "rolePairs": [
    {
      "pingRole": { "name": "PING_ROLE_NAME_HERE", "id": "PING_ROLE_ID_HERE" },
      "channelRole": { "name": "CHANNEL_ROLE_NAME_HERE", "id": "CHANNEL_ROLE_ID_HERE" }
    }
  ]
}
```

The `pingRole` tells the bot which role to trigger the assignment. The `channelRole` is the corresponding role the bot should give the user. To add more role pairs, add more objects to the `rolePairs` array in the same format.

<details>
<summary> 💡 Example Role Pair Configuration </summary>
  
```json
{
  "rolePairs": [
    {
      "pingRole": { "name": "Announcements Ping", "id": "123456789012345678" },
      "channelRole": { "name": "Announcements Access", "id": "987654321098765432" }
    },
    {
      "pingRole": { "name": "Events Ping", "id": "234567890123456789" },
      "channelRole": { "name": "Events Access", "id": "876543210987654321" }
    }
  ]
}
```
</details>

### 5. Usage

To run, simply type:
```bash
npm start
```

