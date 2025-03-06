import fs from "fs";
import json from "./quests-first-filtered.json" assert { type: "json" };

function removeKeyRecursively(obj, targetKey) {
  if (typeof obj !== "object" || obj === null) return;

  delete obj[targetKey];
  for (const key in obj) {
    if (typeof obj[key] === "object") {
      removeKeyRecursively(obj[key], targetKey);
    }
  }
}

const array = json.map((obj) => {
  removeKeyRecursively(obj, "visibilityConditions");
  removeKeyRecursively(obj, "completeInSeconds");
  removeKeyRecursively(obj, "dynamicLocale");
  removeKeyRecursively(obj, "isNecessary");
  removeKeyRecursively(obj, "parentId");
  removeKeyRecursively(obj, "isEncoded");
  removeKeyRecursively(obj, "index");
  removeKeyRecursively(obj, "unknown");
  return obj;
});

fs.writeFile("quests-second-filtered.json", JSON.stringify(array), () => {});
