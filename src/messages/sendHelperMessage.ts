import Discord, {
  Message,
  TextChannel,
  MessageEmbed,
  CommandInteraction,
  MessageActionRow,
  MessageButton,
  MessageComponentInteraction,
  ButtonInteraction,
} from "discord.js";
import { prefix } from "../../config.json";
import {
  availableDice,
  deprecationWarning,
  footerButtonRow,
  maxImageDice,
} from "../constants";
import { sendLogEventMessage } from "../messages";
import { EventType } from "../types";

const sendHelperMessage = async (
  message: Message,
  name: string,
  logOutputChannel: TextChannel,
  args?: string[],
  interaction?: CommandInteraction | ButtonInteraction
) => {
  const kbButtonRow = new MessageActionRow()
    .addComponents(
      new MessageButton()
        .setCustomId(`kb-exploding${interaction ? "-slash" : ""}`)
        .setLabel("Exploding 💥")
        .setStyle("PRIMARY")
    )
    .addComponents(
      new MessageButton()
        .setCustomId(`kb-reroll${interaction ? "-slash" : ""}`)
        .setLabel("Re-roll ♻")
        .setStyle("PRIMARY")
    )
    .addComponents(
      new MessageButton()
        .setCustomId(`kb-keepdrop${interaction ? "-slash" : ""}`)
        .setLabel("Keep/drop 🚮")
        .setStyle("PRIMARY")
    )
    .addComponents(
      new MessageButton()
        .setCustomId(`kb-target${interaction ? "-slash" : ""}`)
        .setLabel("Targets 🎯")
        .setStyle("PRIMARY")
    )
    .addComponents(
      new MessageButton()
        .setCustomId(`kb-crit${interaction ? "-slash" : ""}`)
        .setLabel("Criticals ⚔")
        .setStyle("PRIMARY")
    );

  const kbButtonRow2 = new MessageActionRow()
    .addComponents(
      new MessageButton()
        .setCustomId(`kb-math${interaction ? "-slash" : ""}`)
        .setLabel("Math 🧮")
        .setStyle("PRIMARY")
    )
    .addComponents(
      new MessageButton()
        .setCustomId(`kb-sort${interaction ? "-slash" : ""}`)
        .setLabel("Sorting ↕")
        .setStyle("PRIMARY")
    )
    .addComponents(
      new MessageButton()
        .setCustomId(`kb-repeating${interaction ? "-slash" : ""}`)
        .setLabel("Repeating 👯‍♀️")
        .setStyle("PRIMARY")
    );

  const commandEmbed: MessageEmbed = new Discord.MessageEmbed()
    .setColor("#0000ff")
    .addFields(
      {
        name: `Need help ?😅`,
        value: `${deprecationWarning}\n\n You need to put least one valid argument after the **${prefix}${name}** command.\nArguments must be in valid [dice notation](http://dmreference.com/MRD/Basics/The_Basics/Dice_Notation.htm).\nYou can roll any dice, but you can only see images of these dice: **${availableDice
          .map((dice: number | string) => `d${dice}`)
          .join(
            ", "
          )}**.\nYou can roll up to **${maxImageDice}** dice at once 😈\n\n`,
      },
      {
        name: "Basic rolls",
        value: `\`${prefix}${name} 1d20\`: Roll one twenty-sided die.\n\`${prefix}${name} 1d20 1d12 1d8\`: Roll one twenty-sided die, one twelve-sided die, and one eight-sided die.\n\`${prefix}${name} 1d12+3 5d4\`: Roll one twelve-sided die, adding three to the total, and five four-sided dice.\n\`!roll 3d6+3d6\`: Roll two sets of three six-sided dice and add the total.\n\n`,
      },
      {
        name: "Advanced rolls and modifiers",
        value: "Click the buttons below for info on each topic 👇",
      }
    );

  const slashEmbed: MessageEmbed = new Discord.MessageEmbed()
    .setColor("#0000ff")
    .addFields(
      {
        name: `Need help? 😅`,
        value: `The  \`/roll\` command has three arguments: \`notation\`, \`title\`, and \`timestorepeat\`. The \`notation\` argument must be in valid [dice notation](http://dmreference.com/MRD/Basics/The_Basics/Dice_Notation.htm).\nYou can roll any dice, but you can only see images of these dice: **${availableDice
          .map((dice: number | string) => `d${dice}`)
          .join(
            ", "
          )}**.\nYou can roll up to **${maxImageDice}** dice at once 😈\n\n`,
      },
      {
        name: "Basic rolls",
        value: `\`/roll notation:1d20\`: roll one twenty sided die\n\`/roll notation:1d20 1d12 1d8\`: Roll one twenty-sided die, one twelve-sided die, and one eight-sided die.\n\`/roll notation:1d12+3 5d4\`: Roll one twelve-sided die, adding three to the total, and five four-sided dice.\n\`/roll notation:3d6+3d6\`: Roll two sets of three six-sided dice and add the total.\n\n`,
      },
      {
        name: "Advanced rolls and modifiers",
        value: "Click the buttons below for info on each topic 👇",
      }
    );

  const publicHelperMessage = ` 🚫🎲 Invalid dice notation! DMing you some help 😉`;
  try {
    interaction
      ? await interaction.followUp(publicHelperMessage)
      : await message.reply(publicHelperMessage);

    interaction
      ? await interaction.user.send({
          embeds: [slashEmbed],
          components: [kbButtonRow, kbButtonRow2, footerButtonRow],
        })
      : await message.author.send({
          embeds: [commandEmbed],
          components: [kbButtonRow, kbButtonRow2, footerButtonRow],
        });
  } catch (err) {
    console.error(err);
  }

  if (interaction && interaction.channel) {
    const filter = (i: MessageComponentInteraction) =>
      i.customId === "kb-exploding" ||
      i.customId === "kb-exploding-slash" ||
      i.customId === "kb-reroll" ||
      i.customId === "kb-reroll-slash" ||
      i.customId === "kb-keepdrop" ||
      i.customId === "kb-keepdrop-slash" ||
      i.customId === "kb-targetsuccessfailure" ||
      i.customId === "kb-keepdrop-slash" ||
      i.customId === "kb-targetsuccessfailure" ||
      i.customId === "kb-keepdrop-slash" ||
      i.customId === "kb-crit" ||
      i.customId === "kb-keepdrop-slash" ||
      i.customId === "kb-math" ||
      i.customId === "kb-keepdrop-slash" ||
      i.customId === "kb-sorting" ||
      i.customId === "kb-keepdrop-slash";
    const collector = interaction.channel.createMessageComponentCollector({
      filter,
      time: 15000,
    });

    collector.on("collect", async (i) => {
      if (filter(i)) {
        await i.update({ components: [footerButtonRow] });
      }
    });
  }

  sendLogEventMessage({
    eventType: EventType.SENT_HELER_MESSAGE,
    logOutputChannel,
    message,
    args,
    interaction,
  });
  return;
};

export default sendHelperMessage;
