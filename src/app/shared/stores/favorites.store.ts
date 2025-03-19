import { create } from 'zustand';
import { IFavoriteCity } from '../interfaces';

interface State {
  cities: IFavoriteCity[];
}

interface Store extends State {
  checkIsFavorite: (id: number) => boolean;

  setFavoriteCities: () => void;

  addCityToFavorite: (city: IFavoriteCity) => void;

  removeCityToFavorite: (id: number) => void;
}

const initialState: State = {
  cities: [],
};

export const useFavorites = create<Store>((set, get) => ({
  ...initialState,

  checkIsFavorite: (id: number) => get().cities.some((city: IFavoriteCity) => city.id === id),

  setFavoriteCities: () => {
    const cities: IFavoriteCity[] = JSON.parse(localStorage.getItem('favorites') ?? '[]');

    set({ cities });
  },

  addCityToFavorite: (city: IFavoriteCity) => {
    const cities: IFavoriteCity[] = [...get().cities, city]
      .sort((a, b) => a.name.localeCompare(b.name));

    localStorage.setItem('favorites', JSON.stringify(cities));
    set({ cities });
  },

  removeCityToFavorite: (id: number) => {
    const cities: IFavoriteCity[] = get().cities.filter((city) => city.id !== id);

    localStorage.setItem('favorites', JSON.stringify(cities));
    set({ cities });
  },
}));
