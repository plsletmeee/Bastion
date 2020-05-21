/*!
 * @author Sankarsan Kampa (k3rn31p4nic)
 * @copyright 2020 - The Bastion Bot Project
 */

import { User } from "discord.js";


const BADGES = {
    BASTION_DEVELOPER: 1 << 0,
    BASTION_VERIFIED_USER: 1 << 1,
    BASTION_VERIFIED_GUILD: 1 << 2,
    BASTION_PARTNER_USER: 1 << 3,
    BASTION_PARTNER_GUILD: 1 << 4,
    BASTION_LEAP_OF_FAITH: 1 << 5,
    BASTION_DIAMOND_USER: 1 << 6,
    BASTION_DIAMOND_GUILD: 1 << 7,
    BASTION_PLATINUM_USER: 1 << 8,
    BASTION_PLATINUM_GUILD: 1 << 9,
    BASTION_GOLD_USER: 1 << 10,
    BASTION_GOLD_GUILD: 1 << 11,
    BASTION_SUPPORTER: 1 << 12,
    BASTION_WHITE_HAT: 1 << 13,
    BASTION_BUG_HUNTER: 1 << 14,
    BASTION_OPEN_SORCERER: 1 << 15,
    BASTION_ARTISAN: 1 << 16,
    BASTION_TRANSLATOR: 1 << 17,
    BASTION_PLUGIN_DEVELOPER: 1 << 18,
    BASTION_PLUGIN_SUPPORT_GUILD: 1 << 19,

    GUILD_OWNER: 1 << 20,
    GUILD_STAFF: 1 << 21,
    GUILD_NEW_MEMBER: 1 << 22,
    GUILD_1Y_CLUB: 1 << 23,
    GUILD_2Y_CLUB: 1 << 24,
    GUILD_3Y_CLUB: 1 << 25,
    GUILD_4Y_CLUB: 1 << 26,
    GUILD_5Y_CLUB: 1 << 27,
    GUILD_6Y_CLUB: 1 << 28,
    GUILD_7Y_CLUB: 1 << 29,
    GUILD_8Y_CLUB: 1 << 30,
    GUILD_9Y_CLUB: 1 << 31,
};

const COLORS = {
    TWITCH: 0x9146ff,
    YOUTUBE: 0xff0000,
    MIXER: 0x1fbaed,

    APEX_LEGENDS: 0xda292a,
    CSGO: 0xf3a11d,
    DESTINY_2: 0x9d9a93,
    FORTNITE: 0x149af9,
    OVERWATCH: 0xf99e1a,
    PUBG: 0xf2a900,
    RAINBOW6: 0x36a9e0,
    ROCKET_LEAGUE: 0x0475d0,

    PATREON: 0xff514d,

    DIAMOND: 0xb9f2ff,
    PLATINUM: 0xe5e4e2,
    GOLD: 0xffd700,
};

const isPublicBastion = (user: User): boolean => {
    return user.id === "267035345537728512";
};


export {
    BADGES,
    COLORS,
    isPublicBastion,
};
