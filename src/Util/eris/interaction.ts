/*
 * Copyright 2021-2022 mtripg6666tdr
 * 
 * This file is part of mtripg6666tdr/Discord-SimpleMusicBot. 
 * (npm package name: 'discord-music-bot' / repository url: <https://github.com/mtripg6666tdr/Discord-SimpleMusicBot> )
 * 
 * mtripg6666tdr/Discord-SimpleMusicBot is free software: you can redistribute it and/or modify it 
 * under the terms of the GNU General Public License as published by the Free Software Foundation, 
 * either version 3 of the License, or (at your option) any later version.
 *
 * mtripg6666tdr/Discord-SimpleMusicBot is distributed in the hope that it will be useful, 
 * but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. 
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along with mtripg6666tdr/Discord-SimpleMusicBot. 
 * If not, see <https://www.gnu.org/licenses/>.
 */

import type { CommandInteraction, ComponentInteraction, ComponentInteractionButtonData, ComponentInteractionSelectMenuData, Interaction } from "eris";

import { Constants } from "eris";

export const interactionUtils = {
  interactionIsCommandOrComponent(interaction:Interaction):interaction is CommandInteraction|ComponentInteraction{
    return "channel" in interaction;
  },
  componentInteractionDataIsButtonData(data:ComponentInteractionButtonData|ComponentInteractionSelectMenuData):data is ComponentInteractionButtonData{
    return data.component_type === Constants.ComponentTypes.BUTTON;
  },
  compoentnInteractionDataIsSelectMenuData(data:ComponentInteractionButtonData|ComponentInteractionSelectMenuData):data is ComponentInteractionSelectMenuData{
    return data.component_type === Constants.ComponentTypes.SELECT_MENU;
  },
} as const;