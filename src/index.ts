import { Client, Intents } from "discord.js";
import axios from "axios";
import { ToadScheduler, SimpleIntervalJob, AsyncTask } from "toad-scheduler";
import events from "./events";
import {
  discordToken,
  logOutputChannel,
  clientID,
} from "../config.json";

const scheduler = new ToadScheduler();

const getHeaders = (key: string) => {
  return {
    headers: {
      Authorization: key,
    },
  };
};

const globalSlashCommands: any = [
  {
    name: "roll",
    description: "Throws some dice",
    options: [
      {
        name: "notation",
        required: true,
        description: "Dice notation, e.g. 1d6+2",
        type: "STRING",
      },
      {
        name: "title",
        description: "What is this roll for? e.g. attack with enchanted sword",
        type: "STRING",
      },
      {
        name: "timestorepeat",
        description:
          "If you would like to repeat this roll, enter the number of times here.",
        type: "STRING",
      },
    ],
  },
  {
    name: "status",
    description: "Pings Dice Witch",
  },
  {
    name: "knowledgebase",
    description: "Shows the Dice Witch knowledgebase",
    options: [
      {
        name: "topic",
        required: true,
        description: "what you want to know about",
        type: "STRING",
        choices: [
          {
            name: "Exploding dice",
            value: "kb-exploding-slash",
          },
          {
            name: "Auto-reroll",
            value: "kb-reroll-slash",
          },
          {
            name: "Keep/drop AKA advantage",
            value: "kb-keepdrop-slash",
          },
          {
            name: "Target success/failure AKA Dice pool",
            value: "kb-target-slash",
          },
          {
            name: "Critical success/failure",
            value: "kb-crit-slash",
          },
          {
            name: "Sorting",
            value: "kb-sort-slash",
          },
          {
            name: "Math",
            value: "kb-math-slash",
          },
          {
            name: "Repeating",
            value: "kb-repeating-slash",
          },
        ],
      },
    ],
  },
];

const startServer = () => {
  const discord = new Client({
    intents: [
      Intents.FLAGS.GUILDS,
      Intents.FLAGS.GUILD_MESSAGES,
      Intents.FLAGS.DIRECT_MESSAGES,
      Intents.FLAGS.DIRECT_MESSAGE_TYPING,
    ],
    partials: ["MESSAGE", "CHANNEL", "REACTION"],
  });
  discord.on("ready", async () => {
    let logOutputChannelTemp;
    discord.user ? discord.user.setActivity("/roll") : {};
    try {
      const channel: any = await discord.channels.fetch(logOutputChannel);
      logOutputChannelTemp = channel;
      console.log(`[Discord] Found log output channel ${channel.name}`);
      console.log(`[Discord] Registering global slash commands...`);
      await discord.application?.commands.set(globalSlashCommands);
      console.log(`[Discord] Registered.`);
    } catch (err) {
      console.error(err);
    }
    events(discord, logOutputChannelTemp);
  });
  discord.login(discordToken);
};

startServer();
