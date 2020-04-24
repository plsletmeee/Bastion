/*!
 * @author Sankarsan Kampa (k3rn31p4nic)
 * @copyright 2020 - The Bastion Bot Project
 */

import { Listener, Constants } from "tesseract";
import { GuildMember, MessageReaction, User } from "discord.js";

import ReactionRoleGroup from "../models/ReactionRoleGroup";
import RoleModel from "../models/Role";
import * as emojis from "../utils/emojis";

export = class MessageReactionRemoveListener extends Listener {
    constructor() {
        super("messageReactionRemove", {
            mode: Constants.LISTENER_MODE.ON,
        });
    }

    handleReactionRoles = async (messageReaction: MessageReaction, member: GuildMember): Promise<void> => {
        // identify the reaction roles group for the reaction
        const reactionRolesGroup = await ReactionRoleGroup.findById(messageReaction.message.id);

        if (!reactionRolesGroup) return;

        // build the reaction emoji
        const emoji = messageReaction.emoji.id
            ? "<" + (messageReaction.emoji.animated ? "a" : "") + ":" + messageReaction.emoji.name + ":" + messageReaction.emoji.id + ">"
            : messageReaction.emoji.name;

        const emojiObject = emojis.parseEmoji(emoji);

        if (emojiObject) {
            // find the role for this emoji in the reaction roles group
            const reactionRole = await RoleModel.findOne({
                $or: reactionRolesGroup.roles.map(id => ({ _id: id })),
                guild: messageReaction.message.guild.id,
                emoji: emojiObject.value,
            });

            if (!reactionRole) return;

            // remove the reaction role
            await member.roles.remove(reactionRole._id, "Removed via Reaction Roles");
        }
    }

    exec = async (messageReaction: MessageReaction, user: User): Promise<void> => {
        // if the reaction has partial data, fetch it
        if (messageReaction.partial) {
            messageReaction = await messageReaction.fetch();
        }
        // if the reaction's message has partial data, fetch it too
        if (messageReaction.message.partial) {
            messageReaction.message = await messageReaction.message.fetch();
        }

        if (!messageReaction.message.guild) return;

        // identify the member
        const member = messageReaction.message.guild.member(user);

        // handle reaction roles
        this.handleReactionRoles(messageReaction, member).catch(() => {
            // this error can be ignored
        });
    }
}
