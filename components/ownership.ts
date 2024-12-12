/*
 *     The Peacock Project - a HITMAN server replacement.
 *     Copyright (C) 2021-2024 The Peacock Project Team
 *
 *     This program is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU Affero General Public License as published by
 *     the Free Software Foundation, either version 3 of the License, or
 *     (at your option) any later version.
 *
 *     This program is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *     GNU Affero General Public License for more details.
 *
 *     You should have received a copy of the GNU Affero General Public License
 *     along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import type { GameVersion } from "./types/types"

export const H1_GOTY_UNLOCKABLES = [
    "TOKEN_OUTFIT_PARIS_CLOWN",
    "TOKEN_OUTFIT_HOKKAIDO_COWBOY",
    "PROP_MELEE_A_NEW_BAT",
    "FIREARMS_SNIPER_SIEGER_300_GHOST",
    "FIREARMS_PISTOL_STRIKER",
    "TOKEN_OUTFIT_MARRAKESH_DARK_SNIPER",
]

export const H1_REQUIEM_UNLOCKABLES = [
    "TOKEN_OUTFIT_LEGACY_HERO_REQUIEMSUIT",
    "PROP_DEVICE_SONYPREORDER_WHITE_RUBBERDUCK_REMOTE_EXPLOSIVE",
    "FIREARMS_HERO_PISTOL_TACTICAL_015_SU_SKIN05",
]

export const H2_RACCOON_STINGRAY_UNLOCKABLES = [
    // RACCOON mastery
    "PROP_TOOL_GOLD_BAR_SMALL",
    "PROP_DEVICE_ICA_REMOTE_FLASH",
    "FIREARMS_HERO_SHOTGUN_BARTOLI_12G_SAWED_OFF",
    "TOKEN_OUTFIT_BANK_STARTING_SUIT_REWARD",
    // RACCOON others
    "TOKEN_OUTFIT_GREEDY_HERO_GREEDYSUIT",
    // STINGRAY mastery
    "PROP_MELEE_PIRATE_SABRE",
    "PROP_DEVICE_ICA_REMOTE_GAS_EMETIC",
    "FIREARMS_PISTOL_DARTGUN_SICK",
    "PROP_MELEE_TREASURE_KNIFE",
    "TOKEN_OUTFIT_STINGRAY_MASTERY_REWARD_SUIT",
    "FIREARMS_SNIPER_JAEGER_7_TUATARA",
    // STINGRAY others
    "TOKEN_OUTFIT_OPULENT_HERO_OPULENTSUIT",
    "TOKEN_OUTFIT_HERO_PIRATE_SUIT",
]

export const LEGACY_UNLOCKABLES = [
    // Paris Mastery
    "PROP_POISON_VIAL_SEDATIVE",
    "FIREARMS_HERO_SNIPER_JAEGER",
    "FIREARMS_HERO_PISTOL_HWK_21",
    "PROP_DEVICE_NAPOLEON_FIGURE_REMOTE_EXPLOSIVE",
    "FIREARMS_HERO_PISTOL_TACTICAL_SILVERBALLER",
    "FIREARMS_HERO_SMG_TAC_SMG",
    "PROP_POISON_VIAL_FAST",
    "PROP_MELEE_SYRINGE_SEDATIVE",
    "FIREARMS_HERO_PISTOL_LIGHT_HWK_21_COVERT",
    "PROP_DEVICE_ICA_MODULAR_REMOTE_EXPLOSIVE",
    // Sapienza Mastery
    "PROP_MELEE_SYRINGE_LETHAL",
    "FIREARMS_HERO_RIFLE_FULLAUTO_TAC_4_AUTO",
    "PROP_MELEE_COMBAT_KNIFE",
    "PROP_DEVICE_ICA_MODULAR_REMOTE_AUDIODISTRACTION",
    "PROP_DISTRACTION_FIRECRACKER",
    "FIREARMS_HERO_SHOTGUN_SEMIAUTO_ENRAM_HV",
    "PROP_DEVICE_ICA_MODULAR_REMOTE_BREACHCHARGE",
    "FIREARMS_HERO_SNIPER_HEAVY_JAEAGER_LANCER",
    "PROP_MELEE_ANTIQUE_SYRINGE_EMETIC",
    // Marrakesh Mastery
    "PROP_DEVICE_ICA_MODULAR_PROXIMITY_EXPLOSIVE",
    "FIREARMS_HERO_PISTOL_TACTICAL_ICA_19_FA",
    "PROP_POISON_VIAL_SICK",
    "PROP_DEVICE_ICA_RUBBERDUCK_REMOTE_EXPLOSIVE",
    "PROP_MELEE_CEREMONIAL_DAGGER",
    "FIREARMS_HERO_SHOTGUN_SEMIAUTO_ENRAM_HV_CM",
    "PROP_DEVICE_ICA_C4_PROXIMITY_EXPLOSIVE",
    "FIREARMS_HERO_RIFLE_FULLAUTO_TAC_4_AR_STEALTH",
    "PROP_MELEE_CRYSTALBALL",
    // Bangkok Mastery
    "PROP_MELEE_MACHETE_BLOODY",
    "FIREARMS_HERO_SHOTGUN_SEMIAUTO_ENRAM_HV_COVERT",
    "FIREARMS_HERO_SMG_TACTICAL_TAC_SMG_S",
    "PROP_MELEE_SYRINGE_EMETIC",
    "PROP_MELEE_ANTIQUE_SYRINGE_LETHAL",
    "FIREARMS_HERO_SNIPER_HEAVY_JAEGER_TIGER",
    "PROP_DEVICE_ICA_PHONE_EXPLOSIVE",
    "FIREARMS_HERO_PISTOL_KRUGERMEIER",
    "PROP_DEVICE_ICA_MODULAR_REMOTE_MUSICDISTRACTION",
    // Colorado Mastery
    "FIREARMS_HERO_RIFLE_FULLAUTO_RS_15",
    "FIREARMS_HERO_RIFLE_SEMIAUTO_TAC_4_SA_STEALTH",
    "PROP_MELEE_EXPANDABLE_BATON",
    "FIREARMS_HERO_PISTOL_TACTICAL_ICA_19_FA_STEALTH",
    "PROP_TOOL_ELECTRICAL_KIT",
    "FIREARMS_HERO_SNIPER_MEDIUM_SIEGER_300",
    "PROP_DEVICE_ICA_C4_REMOTE_EXPLOSIVE",
    // Hokkaido Mastery
    "PROP_MELEE_SHURIKEN",
    "FIREARMS_HERO_PISTOL_CUSTOM5MM",
    "PROP_MELEE_NINJATONFA",
    "PROP_MELEE_KATANA_ENGRAVED",
    "PROP_MELEE_HIDDEN_BLADE",
    "PROP_EXPLOSIVE_EXPLOSIVE_COMPOUND",
    "FIREARMS_HERO_SNIPER_MEDIUM_SIEGER_300_ADVANCED",
    "PROP_MELEE_JAPANESE_BASEBALLBAT",
    // Starting suits
    "TOKEN_OUTFIT_GREENLAND_HERO_TRAININGSUIT",
    "TOKEN_OUTFIT_PARIS_HERO_PARISSUIT",
    "TOKEN_OUTFIT_SAPIENZA_HERO_SAPIENZASUIT",
    "TOKEN_OUTFIT_SAPIENZA_HERO_SAPIENZASUIT_NOGLASSES",
    "TOKEN_OUTFIT_MARRAKESH_HERO_MARRAKESHSUIT",
    "TOKEN_OUTFIT_BANGKOK_HERO_BANGKOKSUIT",
    "TOKEN_OUTFIT_COLORADO_HERO_COLORADOSUIT",
    "TOKEN_OUTFIT_HOKKAIDO_HERO_HOKKAIDOSUIT",
    "TOKEN_OUTFIT_HOKKAIDO_HERO_NINJASUIT",
    // ICA Facility Challenges
    "PROP_TOOL_LOCK_PICK",
    // Paris Challenges
    "PROP_DEVICE_EXPLOSIVE_PRESENT",
    "TOKEN_OUTFIT_HERO_SANTACLAUS_SUIT",
    "PROP_DEVICE_LIL_FLASHY_REMOTE_FLASH",
    "PROP_MELEE_A_NEW_BAT",
    // Sapienza Challenges (None)
    // Marrakesh Challenges
    "FIREARMS_SNIPER_SIEGER_300_GHOST",
    // Bangkok Challenges (None)
    // Colorado Challenges (None)
    // Hokkaido Challenges
    "TOKEN_OUTFIT_REWARD_HERO_FALCON_ICE_SUIT",
    "TOKEN_OUTFIT_REWARD_SNOWFESTIVAL_SUIT",
    "FIREARMS_HERO_PISTOL_ICEBALLER",
    "PROP_MELEE_ICE_PICK",
    "FIREARMS_PISTOL_STRIKER",
    // ET challenges rewards
    "TOKEN_OUTFIT_HERO_PARISSUITANDGLOVES",
    "TOKEN_OUTFIT_HERO_SAPIENZASUITANDGLOVES",
    "TOKEN_OUTFIT_HERO_MARRAKESHSUITANDGLOVES",
    "TOKEN_OUTFIT_HERO_BANGKOKSUITANDGLOVES",
    "TOKEN_OUTFIT_HERO_COLORADOSUIT_ALTERNATIVE",
    "TOKEN_OUTFIT_HERO_HOKKAIDOSUIT_ET_ALTERNATIVE",
    // Escalations - Track 1 challenges rewards
    "PROP_DEVICE_ACTIONFIGURE_PROXIMITY_EXPLOSIVE",
    "FIREARMS_HERO_RIFLE_FULLAUTO_016_SU_SKIN06",
    "PROP_DEVICE_ICA_RUBBERDUCK_PROXIMITY_EXPLOSIVE",
    "PROP_MELEE_PHONE_CORD",
    "FIREARMS_HERO_RIFLE_SEMIAUTO_011_SU_SKIN10",
    "TOKEN_OUTFIT_SNAKE_CHARMER_SUIT",
]

export const WINTERSPORTS_UNLOCKABLES = [
    "TOKEN_OUTFIT_ARCTICPACK_SUIT",
    "PROP_CONTAINER_SUITCASE_ARCTIC_TOOL_BOX",
    "PROP_MELEE_SNOWBALL",
    "PROP_MELEE_QUICKDRAW",
    "PROP_MELEE_PITON",
]

export const EXECUTIVE_UNLOCKABLES = [
    "FIREARMS_HERO_PISTOL_TACTICAL_ICA_19_BLACK_LILLY",
    "TOKEN_OUTFIT_MIDNIGHT_BLACK_COLLECTORS",
    "PROP_CONTAINER_SUITCASE_ICA_DELUXE",
]

export const SMART_CASUAL_UNLOCKABLES = [
    "TOKEN_OUTFIT_URBAN_CLASSIC",
    "PROP_DEVICE_ICA_REMOTE_FLASH_PHONE",
    "PROP_MELEE_BLACK_PHONE_CORD",
]

export const DELUXE_UNLOCKABLES = [
    // dubai
    "PROP_CONTAINER_SUITCASE_GOLDEN",
    "TOKEN_OUTFIT_HERO_GOLDEN_DEVIL_SUIT",
    "FIREARMS_SMG_TACTICAL_DAK_DTI_GOLD_COVERT",
    // dartmoor
    "HUNTING_SHOTGUN_REWARD_DELUXE",
    "TOKEN_OUTFIT_HERO_HUNTING_SUIT",
    "PROP_CONTAINER_SUITCASE_HUNTING",
    // berlin
    "FIREARMS_PISTOL_DARTGUN_SEDATIVE_ASYLUM",
    "PROP_MELEE_LEATHERBELT_ASYLUM",
    "TOKEN_OUTFIT_HERO_ASYLUM_SUIT",
    // chongkoats
    "TOKEN_OUTFIT_HERO_CHINESE_SUIT",
    "FIREARMS_SNIPER_CHINESE_DRAGON",
    "PROP_CONTAINER_SUITCASE_CHINESE",
    // mendozer
    "TOKEN_OUTFIT_HERO_GURU_SUIT",
    "PROP_EMETIC_POISON_PEN_SYRINGE_GURU",
    "PROP_GAS_GRENADE_EMETIC_GURU",
    // *throws up* romania
    "FIREARMS_SNIPER_SIEGER_300_WHITE_NINJA",
    "PROP_MELEE_KATANA_WHITE_NINJA",
    "TOKEN_OUTFIT_HERO_WHITE_NINJA_SUIT",
]

export const SIN_GREED_UNLOCKABLES = [
    "PROP_MELEE_CANE_GREED",
    "PROP_TOOL_GREED_COIN",
    "TOKEN_OUTFIT_HERO_GREED_SUIT",
]

export const SIN_PRIDE_UNLOCKABLES = [
    "PROP_MELEE_PRIDE_SABER",
    "FIREARMS_SNIPER_PRIDE",
    "TOKEN_OUTFIT_HERO_PRIDE_SUIT",
]

export const SIN_SLOTH_UNLOCKABLES = [
    "PROP_DEVICE_AUDIO_SEDATIVE_MINE_SLOTH",
    "FIREARMS_HERO_SMG_DAKX2_COVERT_SLOTH",
    "TOKEN_OUTFIT_HERO_SLOTH_SUIT",
]

export const SIN_LUST_UNLOCKABLES = [
    "TOKEN_OUTFIT_HERO_LUST_SUIT",
    "PROP_DEVICE_REMOTE_EXPLOSIVE_LUST",
    "FIREARMS_PISTOL_DARTGUN_BLINDING_LUST",
]

export const SIN_GLUTTONY_UNLOCKABLES = [
    "TOKEN_OUTFIT_HERO_GLUTTONY_SUIT",
    "PROP_POISON_SEDATIVE_GUM_GLUTTONY",
    "FIREARMS_HERO_SHOTGUN_SAWED_OFF_GLUTTONY",
]

export const SIN_ENVY_UNLOCKABLES = [
    "TOKEN_OUTFIT_HERO_ENVY_SUIT",
    "FIREARMS_SNIPER_JAEGER_7_TUATARA_ENVY",
    "PROP_MELEE_DAGGER_ENVY",
]

export const SIN_WRATH_UNLOCKABLES = [
    "TOKEN_OUTFIT_HERO_WRATH_SUIT",
    "PROP_DEVICE_PROXIMITY_FLASH_WRATH",
    "FIREARMS_HERO_RIFLE_SHASKA_A33_WRATH",
]

export const TRINITY_UNLOCKABLES = [
    "TOKEN_OUTFIT_HERO_BIRTH_SUIT",
    "FIREARMS_PISTOL_BIRTH_BALLER",
    "PROP_CONTAINER_SUITCASE_BIRTH",
    "TOKEN_OUTFIT_HERO_LIFE_SUIT",
    "FIREARMS_PISTOL_LIFE_BALLER",
    "PROP_CONTAINER_SUITCASE_LIFE",
    "FIREARMS_PISTOL_DEATH_BALLER",
    "TOKEN_OUTFIT_HERO_DEATH_SUIT",
    "PROP_CONTAINER_SUITCASE_DEATH",
]

export const MAKESHIFT_UNLOCKABLES = [
    "FIREARMS_HERO_PISTOL_MAKESHIFT",
    "FIREARMS_HERO_SHOTGUN_MAKESHIFT",
    "FIREARMS_HERO_RIFLE_MAKESHIFT",
    "FIREARMS_HERO_SMG_TAC_SMG_MAKESHIFT",
    "FIREARMS_HERO_SNIPER_MAKESHIFT",
    "PROP_MELEE_KATANA_MAKESHIFT",
    "TOKEN_OUTFIT_HERO_MAKESHIFT",
]

export const CONCRETEART_UNLOCKABLES = [
    "FIREARMS_HERO_PISTOL_CONCRETEART",
    "FIREARMS_HERO_SHOTGUN_CONCRETEART",
    "FIREARMS_HERO_RIFLE_CONCRETEART",
    "FIREARMS_HERO_SMG_TAC_SMG_CONCRETEART",
    "FIREARMS_HERO_SNIPER_CONCRETEART",
    "PROP_MELEE_BASEBALLBAT_CONCRETEART",
    "TOKEN_OUTFIT_HERO_CONCRETEART",
]

export const SAMBUCA_UNLOCKABLES = [
    "TOKEN_OUTFIT_REWARD_HERO_SB_PATCH_SUIT",
    "PROP_EXPLOSIVE_PEN_SAMBUCA",
    "PROP_GADGET_ROBOT_FLASH_SAMBUCA",
    "PROP_MELEE_BLACK_PHONE_CORD_SAMBUCA",
]

export const PENICILLIN_UNLOCKABLES = [
    "TOKEN_OUTFIT_REWARD_HERO_PEN_COAT_SUIT",
    "PROP_MELEE_STRENGTHBAND_PENICILLIN",
    "PROP_MELEE_KETTLEBELL_PENICILLIN",
    "PROP_MELEE_CANE_PENICILLIN",
]

export const TOMORROWLAND_UNLOCKABLES = [
    "TOKEN_OUTFIT_TOMORROWLAND_DJSUIT_REWARD",
    "PROP_MELEE_SHURIKEN_LP_TOMORROWLAND",
    "PROP_EXPLOSIVE_GRENADE_FLASH_TOMORROWLAND",
    "PROP_CONTAINER_SUITCASE_DJ_BAG",
]

export const LAMBIC_UNLOCKABLES = [
    "TOKEN_OUTFIT_LAMBIC_KICKBOXER_REWARD",
    "FIREARMS_HERO_SMG_HX_10_LAMBIC",
    "PROP_MELEE_KUKRI_KNIFE_LAMBIC",
    "PROP_MELEE_VHS_LAMBIC",
]

export const brokenItems = [
    // duped dart gun (thanks IOI)
    "835ad050-6d19-4e94-80b1-f5cec9815ba3",
    // broken blood money suit
    "051825b9-44f2-4b3d-8ab1-8d4a07393c76",
    // eiffel tower melee weapon
    "a8a8f0da-a69b-428d-b8c1-faf8660ec318",
    // PROP_DEVICE_REMOTE_EXPLOSIVE_ANCESTRAL (doesn't exist as of 3.140)
    "099afc37-609b-48c9-9278-d3389b45829b",
    // Remove TOKEN_OUTFIT_NEWZEALAND_HERO_NEWZEALANDSUIT, which is the New Zealand default suit.
    // Duplicate of TOKEN_OUTFIT_WET_SUIT, which is an unlock of The Mills Reverie challenge.
    "3a4bcbbf-d451-4853-8a85-649120e384df",
    // Remove TOKEN_OUTFIT_COLORADO_HERO_RABIESSUIT
    // Duplicate of TOKEN_OUTFIT_COLORADO_HERO_COLORADOSUIT.
    "e3234256-c061-48e6-b543-008d990affa1",
    // Remove TOKEN_OUTFIT_HOKKAIDO_HERO_FLUSUIT
    // Duplicate of TOKEN_OUTFIT_GREENLAND_HERO_TRAININGSUIT.
    "86c32734-a879-41e6-bd4e-6af1a95f1127",
    // Remove TOKEN_OUTFIT_HERO_EASTER_RAVER_BUNNY_SUIT
    // Duplicate of TOKEN_OUTFIT_HERO_EASTER_SUIT.
    "da4f6106-0585-4a69-815d-51336d581a9b",
]

/**
 * Translates entitlements from HITMAN 3's values to an older game's values.
 *
 * @param newGameVersion Either "h1" or "h2".
 * @param entitlements The entitlements array.
 * @returns The translated entitlements.
 */
export function translateEntitlements(
    newGameVersion: GameVersion,
    entitlements: string[] | undefined | null,
): string[] {
    const newEntitlements: string[] = []

    if (!Array.isArray(entitlements)) {
        return []
    }

    if (
        newGameVersion === "h1" &&
        entitlements.includes("H1_LEGACY_EXPANSION")
    ) {
        newEntitlements.push("GOTY_PATIENT_ZERO")
    }

    return newEntitlements
}
