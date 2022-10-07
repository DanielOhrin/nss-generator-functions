const coloredReindeerBuilder = function () {
    const reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"]
    const color = ["Blue", "Red", "Orange", "Purple", "Goldenrod", "Aquamarine", "Olive", "Azure", "Fuchsia", "Chocolate", "Salmon", "Amaranth"]

    const coloredReindeer = [];


    const newColor = function* () {
        let i = 0;
        while (i < color.length) {
            yield color[i];
            i++;
        }
        
    }
    const reindeerColor = newColor();

    for (const deer of reindeer) {
        tempDeer = {};
        tempDeer.name = deer;
        tempDeer.color = reindeerColor.next().value;
        coloredReindeer.push(tempDeer);    
    }

    return coloredReindeer;
}

const reindeer = coloredReindeerBuilder();
console.log(reindeer);

