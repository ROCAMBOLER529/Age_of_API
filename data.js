const data = {
    civilization: [{
        "name": {
            "common": "Assyrians",
            "historical": "Kingdom of Assyria",
        },
        "information": {
            "architecture": "Egyptian",
            "continent": "Western Asia",
            "features": [
                "Archers",
                "Siege"
            ],
            "image": "https://static.wikia.nocookie.net/ageofempires/images/f/f8/Assyrian_AOE_DE_ROR_icon.png/revision/latest?cb=20230611040714",
            "jingle": ""
        },

        "bonuses": {
            "focus": "",
            "single_bonus": [
                "Villagers move 10% faster",
                "Archers fire 33% faster",
                "Siege units upgrade cost -50%"
            ],
            "team_bonus": "Siege Workshop work 20% faster"
        },

        "AI_player_names": [
            "Tiglathpileser",
            "Ashurbanipal",
            "Shalmaneser",
            "Sargon II",
            "Adad-Nirari II",
            "Esharhaddon",
            "Shalmaneser II",
            "Sargon",
            "Adad-Nirari",
            "Essarhaddon",
            "Sennacherib",
            "Shamash",
            "Ashurnasirpal"
        ],

        "units": [
            // Infantry
            "Clubman",
            "Axeman",
            "Short Swordsman",
            "Broad Swordsman",
            "Long Swordsman",
            "Legionary",

            // Archery
            "Bowman",
            "Chariot Archer",
            "Horse Archer",

            // Cavalry
            "Scout",
            "Camel Rider",
            "Chariot",
            "Cavalry",
            "Heavy Cavalry",
            "Cataphract",

            // Siege
            "Stone Thrower",
            "Catapult",
            "Heavy Catapult",
            "Ballista",
            "Helepolis",

            // Elite Units
            "Hoplite",

            // Naval
            "Fishing Boat",
            "Fishing Ship",
            "Scout Ship",
            "Ligth Transport",
            "Heavy Transport",
            "Trade Boat",
            "Merchant Ship",
            "War Galley",
            "Trireme",
            "Fire Galley",

            // Misc
            "Priest",
            "Villger",
            "Trade Cart"
        ],

        "buildings": [
            // I
            "Town Center",
            "Barracks",
            "Storage Pit",
            "Dock",
            "Granary",
            "House",

            // II
            "Archery Range",
            "Market",
            "Watch Tower",
            "Stable",
            "Small Wall",
            "Small Gate",
            "Farm",

            // III
            "Goverment Center",
            "Temple",
            "Siege Workshop",
            "Academy",
            "Sentry Tower",
            "Medium Wall",
            "Medium Gate",

            // IV
            "Wonder",
            "Guard Tower",
            "Ballista Tower",
            "Fortified Wall",
            "Fortified Gate"
        ],
        
        "tech": [
            // Temple
            "Astrology",
            "Mysticism",
            "Polytheism",
            "Afterlife",
            "Monotheism",
            "Fanaticism",
            "Zealotry",
            "Medicine",
            "Theocracy",

            // Storage Pit
            "Toolworking",
            "Leather Armor for Infantry",
            "Leather Armor for Archery",
            "Leather Armor for Cavaltry",
            "Metalworking",
            "Scale Armor for Infantry",
            "Scale Armor for Archery",
            "Scale Armor for Cavaltry",
            "Metallurgy",
            "Chain Mail for Infantry",
            "Chain Mail for Archery",
            "Chain Mail for Cavaltry",

            // Goverment Center
            "Writing",
            "Logistics",
            "Ballistics",
            "Alchemy",
            "Engineering",
            "Conscription",
            "Urbanization",

            // Market 
            "Woodworking",
            "Stone Mining",
            "Gold Mining",
            "Domestication",
            "Artisanship",
            "Plow",
            "Wheel",
            "Craftmanship",
            "Siegecraft",
            "Coinage",
            "Irrigation",

            // Barracks
            "Broad Sowrd",
            "Long Sword",
            "Legionary (research)"
            
        ]
    },
    {
        "name": {
            "common": "Babylonians",
            "historical": "Babylonian Empire",
        },
        "information": {
            "architecture": "Mesopotamian",
            "continent": "Western Asia",
            "feature": [
                "Defense"
            ],
            "image": "https://static.wikia.nocookie.net/ageofempires/images/f/fe/Babylonian_AOE_DE_ROR_icon.png/revision/latest?cb=20230611040835",
            "jingle": ""
        },

        "bonuses": {
            "focus": "",
            "single_bonus": [
                "Stone miners work 20% faster and carry +2 stone",
                "Market technologies cost -30%",
                "Walls and towers have +60% hit points",
                "Priest rejuvenate 30% faster",
                "Chariot unit have +1 pierce armor"
            ],
            "team_bonus": "Builders work 10% faster"
        },

        "AI_player_names": [
            "Hammurabi",
            "Nebuchadnezzar",
            "Hammurabi II",
            "Nebuchad II",
            "Hammurabi III",
            "Nebuchadnezzar III",
            "Hammurabi IV",
            "Nebuchad",
            "Belshazzar",
            "Nabonidus",
            "Croesus",
            "Telepinus",
            "Astyages"
        ],

        "units": [
            // Infantry
            "Clubman",
            "Axeman",
            "Slinger",
            "Short Swordsman",
            "Broad Swordsman",
            "Long Swordsman",
            "Legionary",

            // Archery
            "Bowman",
            "Improved Bowman",
            "Composite Bowman",
            "Chariot Archer",
            "Horse Archer",

            // Cavalry
            "Scout",
            "Camel Rider",
            "Chariot",
            "Cavalry",

            // Siege
            "Stone Thrower",
            "Catapult",
            "Heavy Catapult",

            // Elite Units
            "Hoplite",

            // Naval
            "Fishing Boat",
            "Fishing Ship",
            "Scout Ship",
            "Ligth Transport",
            "Heavy Transport",
            "Trade Boat",
            "Merchant Ship",
            "War Galley",
            "Fire Galley",

            // Misc
            "Priest",
            "Villger",
            "Trade Cart"
        ],

        "buildings": [
            // I
            "Town Center",
            "Barracks",
            "Storage Pit",
            "Dock",
            "Granary",
            "House",

            // II
            "Archery Range",
            "Market",
            "Watch Tower",
            "Stable",
            "Small Wall",
            "Small Gate",
            "Farm",

            // III
            "Goverment Center",
            "Temple",
            "Siege Workshop",
            "Academy",
            "Sentry Tower",
            "Medium Wall",
            "Medium Gate",

            // IV
            "Wonder",
            "Guard Tower",
            "Ballista Tower",
            "Fortified Wall",
            "Fortified Gate"
        ],
        
        "tech": [
            // Temple
            "Astrology",
            "Mysticism",
            "Polytheism",
            "Afterlife",
            "Monotheism",
            "Fanaticism",
            "Zealotry",
            "Medicine",
            "Theocracy",

            // Storage Pit
            "Toolworking",
            "Leather Armor for Infantry",
            "Leather Armor for Archery",
            "Leather Armor for Cavaltry",
            "Metalworking",
            "Scale Armor for Infantry",
            "Scale Armor for Archery",
            "Scale Armor for Cavaltry",
            "Metallurgy",
            "Chain Mail for Infantry",
            "Chain Mail for Archery",
            "Chain Mail for Cavaltry",
            "Bronze Shield",

            // Goverment Center
            "Nobility",
            "Writing",
            "Architecture",
            "Logistics",
            "Urbanization",
            "Aristocracy",
            "Ballistics",
            "Alchemy",
            "Engineering",
            "Conscription",
            
            // Market 
            "Woodworking",
            "Stone Mining",
            "Gold Mining",
            "Domestication",
            "Artisanship",
            "Plow",
            "Wheel",
            "Craftmanship",
            "Siegecraft",
            "Coinage",
            "Irrigation",

            // Barracks
            "Broad Sowrd",
            "Long Sword",
            
        ]
    },
    {
        "name": {
            "common": "Carthagians",
            "historical": "Carthagian Empire",
        },
        "information": {
            "architecture": "Roman",
            "continent": "North Africa",
            "feature": [
                "Elephant units",
                "Camel units",
                "Navy"
            ],
            "image": "https://static.wikia.nocookie.net/ageofempires/images/f/fe/Babylonian_AOE_DE_ROR_icon.png/revision/latest?cb=20230611040835",
            "jingle": ""
        },

        "bonuses": {
            "focus": "",
            "single_bonus": [
                "Start the game with +50 of all resources",
                "Academy units & elephant units have +25% hit points, Camel Riders have +15% hit points",
                "Fire Galleys have +25% attack",
                "Transport ships move +25% faster",
                "Nobility is free"
            ],
            "team_bonus": "Fire Galleys have +1 pierce armor"
        },

        "AI_player_names": [
            "Dido",
            "Hamilcar Barca",
            "Mago",
            "Hasdrubal",
            "Hannibal",
            "Himilco",
            "Hammurabi IV",
            "Hanno",
            "Matho",
            "Gisco",
        ],

        "units": [
            // Infantry
            "Clubman",
            "Axeman",
            "Slinger",
            "Short Swordsman",
            "Broad Swordsman",
            "Long Swordsman",

            // Archery
            "Bowman",
            "Improved Bowman",
            "Horse Archer",
            "Elephant Archer",

            // Cavalry
            "Scout",
            "Camel Rider",
            "Cavalry",
            "Heavy Cavalry",
            "Cavalry",
            "War Elephant",
            "Armored Elephant",

            // Siege
            "Stone Thrower",
            "Ballista",
            "Helepolis",

            // Elite Units
            "Hoplite",
            "Phalangite",
            "Centurion",

            // Naval
            "Fishing Boat",
            "Fishing Ship",
            "Scout Ship",
            "Ligth Transport",
            "Heavy Transport",
            "Trade Boat",
            "Merchant Ship",
            "War Galley",
            "Trireme",
            "Fire Galley",

            // Misc
            "Priest",
            "Villger",
            "Trade Cart"
        ],

        "buildings": [
            // I
            "Town Center",
            "Barracks",
            "Storage Pit",
            "Dock",
            "Granary",
            "House",

            // II
            "Archery Range",
            "Market",
            "Watch Tower",
            "Stable",
            "Small Wall",
            "Small Gate",
            "Farm",

            // III
            "Goverment Center",
            "Temple",
            "Siege Workshop",
            "Academy",
            "Sentry Tower",
            "Medium Wall",
            "Medium Gate",

            // IV
            "Wonder",
            "Guard Tower",
            "Ballista Tower",
            "Fortified Wall",
            "Fortified Gate"
        ],
        
        "tech": [
            // Temple
            "Mysticism",
            "Polytheism",
            "Afterlife",
            "Zealotry",
            "Medicine",
            "Theocracy",

            // Storage Pit
            "Toolworking",
            "Leather Armor for Infantry",
            "Leather Armor for Archery",
            "Leather Armor for Cavaltry",
            "Metalworking",
            "Scale Armor for Infantry",
            "Scale Armor for Archery",
            "Scale Armor for Cavaltry",
            "Bronze Shield",
            "Iron Shield",
            "Tower Shield",

            // Goverment Center
            "Nobility",
            "Writing",
            "Architecture",
            "Logistics",
            "Urbanization",
            "Aristocracy",
            "Ballistics",
            "Alchemy",
            "Engineering",
            "Conscription",
            
            // Market 
            "Woodworking",
            "Stone Mining",
            "Gold Mining",
            "Domestication",
            "Artisanship",
            "Plow",
            "Wheel",
            "Craftmanship",
            "Coinage",
            "Irrigation",

            // Barracks
            "Broad Sowrd",
            "Long Sword",
            "Legionary (research)"
            
        ]
    },
    {
        "name": {
            "common": "Choson",
            "historical": "Kingdom of Gojoseon",
        },
        "information": {
            "architecture": "East Asian",
            "continent": "Asia",
            "feature": [
                "Infantry",
                "Tower"
            ],
            "image": "https://static.wikia.nocookie.net/ageofempires/images/a/ad/Choson_AOE_DE_ROR_icon.png/revision/latest?cb=20230611041036",
            "jingle": ""
        },

        "bonuses": {
            "focus": "",
            "single_bonus": [
                "Axemen, Short/Broad/Long Swordsman and Legionaries have +5/+15/+20/+60/+80 hit points",
                "Storage Pit tech cost -40%",
                "Towers have +2 range",
                "Priest cost -32%"
            ],
            "team_bonus": "Buildings have +2 Line of Sight"
        },

        "AI_player_names": [
            "Tan'gun-Wanggom",
            "Wiman Choson ",
            "Tan'gun II",
            "Wiman Choson II",
            "Tan'gun III",
            "Wiman Choson III",
            "Tan'gun IV",
            "Chun",
            "Ugo",
            "Wiman",
            "Wigut'ae",
            "Uiryo",
            "Hyon",
            "Suro"
        ],

        "units": [
            // Infantry
            "Clubman",
            "Axeman",
            "Slinger",
            "Short Swordsman",
            "Broad Swordsman",
            "Long Swordsman",
            "Legionary",

            // Archery
            "Bowman",
            "Improved Bowman",
            "Horse Archer",

            // Cavalry
            "Scout",
            "Cavalry",
            "Heavy Cavalry",
            "Cataphract",

            // Siege
            "Stone Thrower",
            "Ballista",
            "Helepolis",

            // Elite Units
            "Hoplite",

            // Naval
            "Fishing Boat",
            "Fishing Ship",
            "Scout Ship",
            "Ligth Transport",
            "Heavy Transport",
            "Trade Boat",
            "Merchant Ship",
            "War Galley",
            "Trireme",

            // Misc
            "Priest",
            "Villger",
            "Trade Cart"
        ],

        "buildings": [
            // I
            "Town Center",
            "Barracks",
            "Storage Pit",
            "Dock",
            "Granary",
            "House",

            // II
            "Archery Range",
            "Market",
            "Watch Tower",
            "Stable",
            "Small Wall",
            "Small Gate",
            "Farm",

            // III
            "Goverment Center",
            "Temple",
            "Siege Workshop",
            "Academy",
            "Sentry Tower",
            "Medium Wall",
            "Medium Gate",

            // IV
            "Wonder",
            "Guard Tower",
            "Ballista Tower",
            "Fortified Wall",
            "Fortified Gate"
        ],
        
        "tech": [
            // Temple
            "Astrology",
            "Mysticism",
            "Polytheism",
            "Afterlife",
            "Monotheism",
            "Fanaticism",
            "Zealotry",
            "Medicine",
            "Theocracy",

            // Storage Pit
            "Toolworking",
            "Leather Armor for Infantry",
            "Leather Armor for Archery",
            "Leather Armor for Cavaltry",
            "Metalworking",
            "Scale Armor for Infantry",
            "Scale Armor for Archery",
            "Scale Armor for Cavaltry",
            "Metallurgy",
            "Bronze Shield",

            // Goverment Center
            "Nobility",
            "Writing",
            "Architecture",
            "Logistics",
            "Ballistics",
            "Alchemy",
            "Conscription",
            
            // Market 
            "Woodworking",
            "Stone Mining",
            "Gold Mining",
            "Domestication",
            "Artisanship",
            "Plow",
            "Wheel",
            "Craftmanship",
            "Coinage",
            "Irrigation",

            // Barracks
            "Broad Sowrd",
            "Long Sword",
            "Legionary (research)"
            
        ]
    },
    {
        "name": {
            "common": "Egyptians",
            "historical": "Kingdom of Egypt",
        },
        "information": {
            "architecture": "Egyptian",
            "continent": "North Africa",
            "feature": [
                "Chariots",
                "Priest"
            ],
            "image": "https://static.wikia.nocookie.net/ageofempires/images/0/03/Egyptian_AOE_DE_ROR_icon.png/revision/latest?cb=20230611041147",
            "jingle": ""
        },

        "bonuses": {
            "single_bonus": [
                "Farms cost -20%",
                "Gold Miners work 20% faster and carry +2 gold",
                "Chariot units have +33% hit points",
                "Priests have +3 range"
            ],
            "team_bonus": "Priests have +1 pierce armor"
        },

        "AI_player_names": [
            "Ramses",
            "Thutmose",
            "Ramses II",
            "Thutmose II",
            "Ramses III",
            "Thutmose III",
            "Ramses IV",
            "Amosis",
            "Necho",
            "Seti",
            "Haremhab",
            "Amenophis",
            "Hatshepsut",
            "Menes"
        ],

        "units": [
            // Infantry
            "Clubman",
            "Axeman",
            "Slinger",
            "Short Swordsman",

            // Archery
            "Bowman",
            "Improved Bowman",
            "Chariot Archer",
            "Elephant Archer",

            // Cavalry
            "Scout",
            "Chariot",
            "Scythe Chariot",
            "Camel Rider",
            "War Elephant",

            // Siege
            "Stone Thrower",

            // Elite Units
            "Hoplite",

            // Naval
            "Fishing Boat",
            "Fishing Ship",
            "Scout Ship",
            "Ligth Transport",
            "Heavy Transport",
            "Trade Boat",
            "Merchant Ship",
            "War Galley",
            "Trireme",
            "Catapult Trireme",
            "Juggernaut",

            // Misc
            "Priest",
            "Villger",
            "Trade Cart"
        ],

        "buildings": [
            // I
            "Town Center",
            "Barracks",
            "Storage Pit",
            "Dock",
            "Granary",
            "House",

            // II
            "Archery Range",
            "Market",
            "Watch Tower",
            "Stable",
            "Small Wall",
            "Small Gate",
            "Farm",

            // III
            "Goverment Center",
            "Temple",
            "Siege Workshop",
            "Academy",
            "Sentry Tower",
            "Medium Wall",
            "Medium Gate",

            // IV
            "Wonder",
            "Guard Tower",
            "Ballista Tower",
            "Fortified Wall",
            "Fortified Gate"
        ],
        
        "tech": [
            // Temple
            "Astrology",
            "Mysticism",
            "Polytheism",
            "Afterlife",
            "Monotheism",
            "Fanaticism",
            "Zealotry",
            "Medicine",
            "Theocracy",

            // Storage Pit
            "Toolworking",
            "Leather Armor for Infantry",
            "Leather Armor for Archery",
            "Leather Armor for Cavaltry",
            "Metalworking",
            "Scale Armor for Infantry",
            "Scale Armor for Archery",
            "Scale Armor for Cavaltry",
            "Metallurgy",
            "Chain Mail for Infantry",
            "Chain Mail for Archery",
            "Chain Mail for Cavaltry",

            // Goverment Center
            "Nobility",
            "Writing",
            "Architecture",
            "Logistics",
            "Urbanization",
            "Aristocracy",
            "Ballistics",
            "Alchemy",
            "Engineering",
            "Conscription",
            
            // Market 
            "Woodworking",
            "Stone Mining",
            "Gold Mining",
            "Domestication",
            "Artisanship",
            "Plow",
            "Wheel",
            "Craftmanship",
            "Coinage",
            "Irrigation",

            // Barracks
            "Broad Sowrd",
            "Long Sword",
            "Legionary (research)"
            
        ]
    },
    {
        "name": {
            "common": "Greeks",
            "historical": "Mycenaean/Greek Civilization",
        },
        "information": {
            "architecture": "Greek",
            "continent": "Southeast Europe",
            "feature": [
                "Infantry",
                "Navy"
            ],
            "image": "https://static.wikia.nocookie.net/ageofempires/images/1/13/Greek_AOE_DE_ROR_icon.png/revision/latest?cb=20230611041250",
            "jingle": ""
        },

        "bonuses": {
            "single_bonus": [
                "Town Centers work 10% faster starting from Tool Age",
                "Academy units move 30% faster and cost -20%",
                "Ships move 20% faster",
                "Polytheism and Astrology free"
            ],
            "team_bonus": "Markets cost -50%"
        },

        "AI_player_names": [
            "Alexander",
            "Achilles",
            "Pericles",
            "Miltiades",
            "Leonidas",
            "Themistocles",
            "Alexander II",
            "Lysander",
            "Alcibiades",
            "Cleon",
        ],

        "units": [
            // Infantry
            "Clubman",
            "Axeman",
            "Slinger",
            "Short Swordsman",

            // Archery
            "Bowman",
            "Improved Bowman",
            "Chariot Archer",
            "Elephant Archer",

            // Cavalry
            "Scout",
            "Chariot",
            "Scythe Chariot",
            "Camel Rider",
            "War Elephant",

            // Siege
            "Stone Thrower",

            // Elite Units
            "Hoplite",

            // Naval
            "Fishing Boat",
            "Fishing Ship",
            "Scout Ship",
            "Ligth Transport",
            "Heavy Transport",
            "Trade Boat",
            "Merchant Ship",
            "War Galley",
            "Trireme",
            "Catapult Trireme",
            "Juggernaut",

            // Misc
            "Priest",
            "Villger",
            "Trade Cart"
        ],

        "buildings": [
            // I
            "Town Center",
            "Barracks",
            "Storage Pit",
            "Dock",
            "Granary",
            "House",

            // II
            "Archery Range",
            "Market",
            "Watch Tower",
            "Stable",
            "Small Wall",
            "Small Gate",
            "Farm",

            // III
            "Goverment Center",
            "Temple",
            "Siege Workshop",
            "Academy",
            "Sentry Tower",
            "Medium Wall",
            "Medium Gate",

            // IV
            "Wonder",
            "Guard Tower",
            "Ballista Tower",
            "Fortified Wall",
            "Fortified Gate"
        ],
        
        "tech": [
            // Temple
            "Astrology",
            "Mysticism",
            "Polytheism",
            "Afterlife",
            "Monotheism",
            "Fanaticism",
            "Zealotry",
            "Medicine",
            "Theocracy",

            // Storage Pit
            "Toolworking",
            "Leather Armor for Infantry",
            "Leather Armor for Archery",
            "Leather Armor for Cavaltry",
            "Metalworking",
            "Scale Armor for Infantry",
            "Scale Armor for Archery",
            "Scale Armor for Cavaltry",
            "Metallurgy",
            "Chain Mail for Infantry",
            "Chain Mail for Archery",
            "Chain Mail for Cavaltry",

            // Goverment Center
            "Nobility",
            "Writing",
            "Architecture",
            "Logistics",
            "Urbanization",
            "Aristocracy",
            "Ballistics",
            "Alchemy",
            "Engineering",
            "Conscription",
            
            // Market 
            "Woodworking",
            "Stone Mining",
            "Gold Mining",
            "Domestication",
            "Artisanship",
            "Plow",
            "Wheel",
            "Craftmanship",
            "Coinage",
            "Irrigation",

            // Barracks
            "Broad Sowrd",
            "Long Sword",
            "Legionary (research)"
            
        ]
    }
    ],

    technology: [
        {
            // Military
            "informantion": {
                "name": "Battle Axe",
                "bonus": "Clubman upgraded to Axeman",
                "aviable": "Tool Age",
                "image": ""
            },
            "research": {
                "building": "Barracks",
                "cost": [
                    "100 food"
                ],
                "time": "40 seconds"
            }
        },
        {
            "informantion": {
                "name": "Broad Sword",
                "bonus": "Short Swordman upgraded to Broad Swordman",
                "aviable": "Bronze Age",
                "image": ""
            },
            "research": {
                "building": "Barracks",
                "cost": [
                    "140 food",
                    "50 gold"
                ],
                "time": "90 seconds"
            }
        },
        {
            "informantion": {
                "name": "Long Sword",
                "bonus": "Broad Swordman upgraded to Long Swordman",
                "aviable": "Iron Age",
                "image": ""
            },
            "research": {
                "building": "Barracks",
                "cost": [
                    "240 food",
                    "100 gold"
                ],
                "time": "90 seconds"
            }
        },
        {
            "informantion": {
                "name": "Legionary (research)",
                "bonus": "Long Swordman upgraded to Legionary",
                "aviable": "Iron Age",
                "image": ""
            },
            "research": {
                "building": "Barracks",
                "cost": [
                    "1400 food",
                    "600 gold"
                ],
                "time": "150 seconds"
            }
        },
        {
            "informantion": {
                "name": "Improved Bow",
                "bonus": "Unlock Improved Bowman",
                "aviable": "Iron Age",
                "image": ""
            },
            "research": {
                "building": "Barracks",
                "cost": [
                    "140 food",
                    "80 wood"
                ],
                "time": "45 seconds"
            }
        },
        {
            "informantion": {
                "name": "Composite Bow",
                "bonus": "Unlock Improved Bowman",
                "aviable": "Iron Age",
                "image": ""
            },
            "research": {
                "building": "Barracks",
                "cost": [
                    "180 food",
                    "100 wood"
                ],
                "time": "100 seconds"
            }
        },
        
    ],
    units: [
        {
            "information": {
                "type": [],
                "aviable": "",
                "image": ""
            },
            "training": {
                "building": "",
                "cost": [],
                "time": ""
            },
            "statistics": {
                "HP": "",
                "melee_attack": "",
                "ranged_attack": "",
                "rate": "",
                "armor": {
                    "melee": "",
                    "pierce": "",
                    "class": ""
                },
                "speed": "",
                "line_of_sight": ""
            }
        }
    ],
    buildings: [
        {
            "information": {
                "type": "",
                "aviable": "",
                "use": "",
                "required_for": []
            },
            "construction": {
                "requeriments": "",
                "cost": [],
                "time": ""
            },
            "statistics": {
                "size": "",
                "HP": "",
                "garrison": "",
                "armor": {
                    "melee": "",
                    "pierce": ""
                },
                "line of sight": ""
            }
        }
    ]
}