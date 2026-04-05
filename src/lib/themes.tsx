import type { CategoryName } from "./types";

export const Qwiz_Themes: Record<CategoryName, { id: string; name: string }[]> =
  {
    History: [
      { id: "world_war_2", name: "World War II" },
      { id: "ancient_egypt", name: "Ancient Egypt" },
    ],

    Sports: [{ id: "football", name: "Football" }],

    Geography: [],
    Sciences: [],
    Entertainment: [],
    Arts: [],
  };
