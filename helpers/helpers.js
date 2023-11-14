/*
+--------------------+
|                    |
| helpers/helpers.js |
|                    |
+--------------------+
*/

// Helper file of specific functions

const getNames = (array, elements) => {
    const obj = array.map(x => elements.find(y => y.id == x));
    return obj.map(x => x.name);
}

const oldReplace = str => {
    const regex = new RegExp("-", 'g');
    return str.replace(regex, " ");
} 

const olderReplace = (old_str, new_str, str) => {
    const regex = new RegExp(old_str, 'g');
    return str.replace(regex, new_str);
}

const replaceChar = str => {
    str = str.toLowerCase();
    str = str.charAt(0).toUpperCase() + str.slice(1);

    if (str.includes("-")) {
        const regex = new RegExp("-", 'g');
        const text = str.replace(regex, " ");

        const indexSpace = text.indexOf(" "); 
        return text.slice(0, indexSpace) + " " + text.charAt(indexSpace + 1).toUpperCase() + text.slice(indexSpace + 2);
    } else {
        return str;
    }
    
    
}

const displayUnitsNamesInCiv = (civ, elements) => {
    const units = civ.units
    
    return {
        units: {
            infantry: getNames(units.infantry, elements),
            archery: getNames(units.archery, elements),
            cavalry: getNames(units.cavalry, elements),
            siege: getNames(units.siege, elements),
            academy: getNames(units.academy, elements),
            navy: getNames(units.navy, elements),
            misc: getNames(units.misc, elements)
        }
    }
}

const displayBuildingsNamesInCiv = (civ, elements) => {
    const building = civ.buildings
    
    return {
        building: {
            stone_age: getNames(building.stone_age, elements),
            tool_age: getNames(building.tool_age, elements),
            bronze_age: getNames(building.bronze_age, elements),
            iron_age: getNames(building.iron_age, elements)
        }
    }
}

const displayTechsNamesInCiv = (civ, elements) => {
    const tech = civ.tech
    
    return {
        tech: {
            town_center: getNames(tech.town_center, elements),
            barracks: getNames(tech.barracks, elements),
            storage_pit: getNames(tech.storage_pit, elements),
            dock: getNames(tech.dock, elements),
            granary: getNames(tech.granary, elements),
            archery_range: getNames(tech.archery_range, elements),
            market: getNames(tech.market, elements),
            stable: getNames(tech.stable, elements),
            goverment_center: getNames(tech.goverment_center, elements),
            siege_workshop: getNames(tech.siege_workshop, elements),
            academy: getNames(tech.academy, elements),
            temple: getNames(tech.temple, elements)
        }
    }
}

const displayMissingTechInCiv = (civ, elements) => {
    const allTech = Object.entries(civ.tech).map(x => x[1]).flat();

    return (elements.filter(x => !allTech.includes(x.id))).map(x => x.name)
}

const displayMissingUnitInCiv = (civ, elements) => {
    const allUnits = Object.entries(civ.units).map(x => x[1]).flat();

    return (elements.filter(x => !allUnits.includes(x.id))).map(x => x.name)
}

module.exports = {
    oldReplace,
    olderReplace,
    replaceChar,
    displayUnitsNamesInCiv,
    displayBuildingsNamesInCiv,
    displayTechsNamesInCiv,
    displayMissingTechInCiv,
    displayMissingUnitInCiv
}