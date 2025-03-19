import { AxiosResponse } from 'axios';
import { Subscription } from 'rxjs';
import { create } from "zustand";
import { ICity, IGetCitiesResponse } from '../(interfaces)';
import { getCities } from '../(services)';

interface State {
  isLoading: boolean;
  searchText: string;
  error: string;
  cities: ICity[];
}

interface Store extends State {
  setSearchText: (text: string) => void;

  getCities: () => void;

  destroy: () => void;

  reset: () => void;
}

const initialState: State = {
  isLoading: false,
  searchText: '',
  error: '',
  cities: []
};

export const useCitiesStore = create<Store>((set, get) => {
  let subscription: Subscription | null = null;

  const destroy = () => {
    if (!subscription) return;
    subscription.unsubscribe();
  };

  return {
    ...initialState,

    setSearchText: (searchText: string) => {
      const error: string = searchText.length < 2 ? "Enter at least 2 characters" : "";

      set({ searchText, error, cities: [] });
    },

    getCities: () => {
      destroy();

      set({ isLoading: true });

      subscription = getCities(get().searchText)
        .subscribe({
          next: ({ data }: AxiosResponse<IGetCitiesResponse>) => set({ cities: data.list, isLoading: false }),
          error: () => set({ isLoading: false })
        });
    },

    destroy,

    reset: () => {
      destroy();
      set(initialState);
    }
  };
});
