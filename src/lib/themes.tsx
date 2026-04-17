import type { CategoryName } from "./types";

export const Qwiz_Themes: Record<CategoryName, { id: string; name: string }[]> =
  {
    Sports: [
      { id: "brazilian_football", name: "Brazilian Football" },
      { id: "english_football", name: "English Football" },
      { id: "spanish_football", name: "Spanish Football" },
      { id: "italian_football", name: "Italian Football" },
      { id: "french_football", name: "French Football" },
      { id: "fifa_world_cups", name: "FIFA World Cups" },
      { id: "eurocup", name: "Eurocup" },
      { id: "copa_america", name: "Copa América" },
      { id: "african_cup_of_nations", name: "African Cup of Nations" },
      { id: "asian_cup", name: "Asian Cup" },
      { id: "uefa_champions_league", name: "UEFA Champions League" },
      { id: "conmebol_libertadores", name: "CONMEBOL Libertadores" },
      { id: "nba", name: "NBA" },
      { id: "nfl", name: "NFL" },
      { id: "tennis", name: "Tennis" },
      { id: "formula_1", name: "Formula 1" },
      { id: "olympics", name: "Olympics" },
    ],

    Geography: [
      { id: "country_flags", name: "Country Flags" },
      { id: "capital_cities", name: "Capital Cities" },
      { id: "world_map", name: "World Map" },
      { id: "tourist_attractions", name: "Tourist Attractions" },
      { id: "physical_geography", name: "Physical Geography" },
    ],

    Sciences: [
      { id: "mathematics", name: "Mathematics" },
      { id: "physics", name: "Physics" },
      { id: "chemistry", name: "Chemistry" },
      { id: "astronomy", name: "Astronomy" },
      { id: "biology", name: "Biology" },
      { id: "human_body", name: "Human Body" },
      { id: "planet_earth", name: "Planet Earth" },
      { id: "inventions_and_inventors", name: "Inventions and Inventors" },
      { id: "internet_and_computers", name: "Internet and Computers" },
    ],

    History: [
      { id: "ancient_egypt", name: "Ancient Egypt" },
      { id: "ancient_greece", name: "Ancient Greece" },
      { id: "ancient_rome", name: "Ancient Rome" },
      { id: "ancient_age", name: "Ancient Age" },
      { id: "middle_ages", name: "Middle Ages" },
      { id: "modern_age", name: "Modern Age" },
      { id: "french_revolution", name: "French Revolution" },
      { id: "industrial_revolution", name: "Industrial Revolution" },
      { id: "world_war_1", name: "World War I" },
      { id: "russian_revolution", name: "Russian Revolution" },
      { id: "world_war_2", name: "World War II" },
      { id: "cold_war", name: "Cold War" },
      { id: "brazil_history", name: "Brazil" },
      { id: "latin_america_history", name: "Latin America" },
      { id: "united_states_history", name: "United States" },
    ],

    Entertainment: [
      { id: "famous_movies", name: "Famous Movies" },
      { id: "actors_and_actresses", name: "Actors and Actresses" },
      { id: "harry_potter", name: "Harry Potter" },
      { id: "marvel_and_dc", name: "Marvel and DC" },
      { id: "disney_and_pixar", name: "Disney and Pixar" },
      { id: "tv_series", name: "TV Series" },
      { id: "videogames", name: "Videogames" },
      { id: "minecraft", name: "Minecraft" },
      { id: "call_of_duty", name: "Call of Duty" },
      { id: "assassins_creed", name: "Assassin's Creed" },
      { id: "mario_bros", name: "Mario Bros" },
      { id: "grand_theft_auto", name: "Grand Theft Auto" },
      { id: "bands_and_artists", name: "Bands and Artists" },
    ],

    Arts: [
      { id: "history_of_art", name: "History of Art" },
      { id: "global_literature", name: "Global Literature" },
      { id: "paintings_and_sculptures", name: "Paintings and Sculptures" },
      { id: "art_movements", name: "Art Movements" },
      { id: "architecture", name: "Architecture" },
    ],

    Languages: [
      { id: "history_of_languages", name: "History of Languages" },
      { id: "english_language", name: "English" },
      { id: "portuguese_language", name: "Portuguese" },
    ],
  };
