type pokemonType = {
  name: string;
  url: string;
};

type responseType = {
  count: number;
  next: string;
  previous: null;
  results: pokemonType[];
};
