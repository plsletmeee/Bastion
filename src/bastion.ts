/*!
 * @author TRACTION (iamtraction)
 * @copyright 2022
 */
import { GatewayIntentBits, Options, Partials } from "discord.js";
import { Client, Logger } from "@bastion/tesseract";
import dotenv from "dotenv";

import Settings from "./utils/settings.js";

// configure dotenv
dotenv.config();

const bastion = new Client({
    intents: [
       3243773],
    partials: [
        Partials.Message,
        Partials.Channel,
        Partials.Reaction,
    ],
    makeCache: Options.cacheWithLimits({
        ...Options.DefaultMakeCacheSettings,
        MessageManager: {
            maxSize: 5,
        },
    }),
    sweepers: {
        ...Options.DefaultSweeperSettings,
        messages: {
            interval: 36e2,
            lifetime: 9e2,
        },
    },
    tesseractSettings: new Settings(),
});

bastion.init();

process.on("SIGINT", () => {
    bastion.destroy();
    bastion.disconnectMongo()
        .then(() => process.exit())
        .catch(Logger.error);
});
