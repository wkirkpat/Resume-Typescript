let myName: string = "Will Kirkpatrick"

console.log("Name: " + myName.toUpperCase());
console.log("Job: Game Master at Breakout Birmingham");
console.log("Description: I am definitely a human");
console.log("\n");
console.log("Interests:");
console.log("* Tabletop Games");
console.log("* Video Games");
console.log("* Game Design");
console.log("* Good Stories");
console.log("\n");
console.log("My Previous Experience:");
displayPosition("Ayres Composite Panels", "Factory Laborer", "Worked in a general factory environment making giant aluminum panels");
displayPosition("University of Montevallo", "Microfridge Technician", "Transported and Repaired university appliances, mainly refrigerators.");
displayPosition("Breakout Brimingham", "Game Master", "Supervised games being played by customers to ensure the experience is as safe and fun as possible");
console.log("\n");
console.log("My Skills:");
displaySkill("Guitar", true);
displaySkill("Brewing Beer",true);
displaySkill("Technical Writing", false);
displaySkill("Dungeon Mastering", true);
displaySkill("Game Design", true);
displaySkill("TCGs", true);

function displayPosition(companyName: string, jobTitle: string, description: string) {
    console.log("* " + jobTitle + ' at ' + companyName + " - " + description);
}

function displaySkill(skill: string, isCool: boolean) {
    if (isCool) {
        console.log("* BAM: " + skill);
    } else {
        console.log("* " + skill)
    }
}