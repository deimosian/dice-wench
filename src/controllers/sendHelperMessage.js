const Discord = require("discord.js");
const { prefix, inviteLink, supportServerLink } = require("../../config.json");
const { availableDice, maxDice } = require("../constants");
const { logEvent } = require("../services");

const sendHelperMessage = async (message, name, logOutputChannel, args) => {
  try {
    const embed = new Discord.MessageEmbed()
      .setColor("#0000ff")
      .addFields(
        {
          name: `Need help? 😅`,
          value: `You need to put least one valid argument after the **${prefix}${name}** command.\nArguments must be in valid [dice notation](http://dmreference.com/MRD/Basics/The_Basics/Dice_Notation.htm).\nYou can roll any of these dice: **${availableDice
            .map((dice) => `d${dice}`)
            .join(", ")}**.`,
        },
        {
          name: "Basic rolls",
          value: `\`${prefix}${name} 1d20\`: roll one twenty sided die\n\`${prefix}${name} 1d20 1d12 1d8\`: roll one twenty-sided die, one twelve-sided die, and one eight-sided die\n\`${prefix}${name} 1d12+3 5d4\`: roll one twelve-sided die, adding three to the total, and five four-sided dice\n\nYou can also subtract\`-\`, multiply\`*\`, and divide\`/\` rolls.\nYou can roll up to **${maxDice}** dice at once 😈\n\n`,
        },
        {
          name: "Advanced rolls and modifiers",
          value: `Type \`${prefix}kb <topic>\` for explanations and examples:\n\nMin/Max: \`${prefix}kb minmax\`\nExploding 💥: \`${prefix}kb exploding\`\nRe-roll ♻: \`${prefix}kb reroll\`\nKeep/drop AKA Advantage: \`${prefix}kb keepdrop\`\nTarget success/failure 🎯: \`${prefix}kb target\`\nCritical success/failure ⚔: \`${prefix}kb crit\`\nSorting ↕: \`${prefix}kb sort\`\nMath 🧮: \`${prefix}kb math\`\nModifier icon legend: \`${prefix}kb legend\``,
        }
      )
      .addField(
        "\u200B",
        `_Sent to ${message.author.username}_ | [Invite me](${inviteLink}) | [Support server](${supportServerLink})`
      );
    await message.channel.send(embed);
    return logEvent(
      "sentHelperMessage",
      logOutputChannel,
      message,
      undefined,
      args
    );
  } catch (err) {
    console.error(err);
    return null;
  }
};

module.exports = sendHelperMessage;
