interface PlanetInfo {
  content: string;
  source: string;
}

interface PlanetImages {
  planet: string;
  internal: string;
  geology: string;
}

export interface Planet {
  name: string;
  overview: PlanetInfo;
  structure: PlanetInfo;
  geology: PlanetInfo;
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  images: PlanetImages;
}

export interface PlanetsData {
  planets: Planet[];
}
