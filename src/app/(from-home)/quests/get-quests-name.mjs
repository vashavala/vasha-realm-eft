import fs from "fs";
import json from "./quests-first-filtered.json" assert { type: "json" };

const array = json.map((quest) => quest.name);

fs.writeFile("quests-name.json", JSON.stringify(array), () => {});
