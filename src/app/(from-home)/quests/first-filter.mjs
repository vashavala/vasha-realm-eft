import fs from "fs";
import json from "./quests-raw.json" assert { type: "json" };

const array = Object.values(json).map((quest) => ({
  name: quest.QuestName,
  id: quest._id,
  location: quest.location,
  traderId: quest.traderId,
  type: quest.type,
  conditions: quest.conditions,
  rewards: quest.rewards,
}));

console.log(array.length);
fs.writeFile("quests-first-filtered.json", JSON.stringify(array), () => {});
