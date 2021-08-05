import { CommandInteraction, Message, TextChannel } from "discord.js";
import { Command, DiceArray, Result, TitledRollProps } from "../types";
import { availableDice, maxDice } from "../constants";
import {
  sendDiceResultMessage,
  sendHelperMessage,
  sendDiceRolledMessage,
  sendDiceOverMaxMessage,
  sendGetRollTitleMessage,
  sendNeedPermissionMessage
} from "../messages";
import {
  rollDice,
  generateDiceAttachment,
  checkForAttachPermission
} from "../services";
import { getTotalDiceRolled } from "../helpers";

module.exports = {
  name: "titledroll",
  aliases: ["tr"],
  description: "Throw some dice with a displayed title",
  usage:
    "-- Works exactly like roll, but you'll be prompted for a title before performing the roll",
  async execute({
    message,
    args,
    logOutputChannel,
    interaction
  }: TitledRollProps) {
    if (!args.length) {
      sendHelperMessage(
        message,
        module.exports.name,
        logOutputChannel,
        undefined,
        interaction
      );
      return;
    }
    if (!checkForAttachPermission(message, interaction)) {
      sendNeedPermissionMessage(message, logOutputChannel);
      return;
    }

    const {
      diceArray,
      resultArray
    }: { diceArray: DiceArray; resultArray: Result[] } = rollDice(
      args,
      availableDice
    );

    if (!diceArray.length) {
      sendHelperMessage(message, module.exports.name, logOutputChannel);
      return;
    }
    if (getTotalDiceRolled(diceArray) > maxDice) {
      sendDiceOverMaxMessage(message, logOutputChannel, args);
      return;
    }

    const title = await sendGetRollTitleMessage(message, logOutputChannel);

    if (title) {
      sendDiceRolledMessage(message, diceArray, interaction);
      const attachment = await generateDiceAttachment(diceArray);
      sendDiceResultMessage(
        resultArray,
        message,
        attachment,
        logOutputChannel,
        undefined,
        title
      );
      return;
    }
  }
};
