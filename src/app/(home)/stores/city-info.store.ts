import { AxiosResponse } from 'axios';
import { create } from 'zustand';
import { ICityInfo } from '../interfaces';
import { getCityInfo } from '../services';

interface State {
  isLoading: boolean;
  error: string;
  cityInfo: ICityInfo | null;
}

interface Store extends State {
  getCityInfo: (id: number) => void;
}

const initialState: State = {
  isLoading: false,
  error: '',
  cityInfo: null
};

export const useCityInfoStore = create<Store>((set) => ({
  ...initialState,

  getCityInfo: (id: number) => {
    set({ isLoading: true });

    getCityInfo(id)
      .subscribe({
        next: ({ data: cityInfo }: AxiosResponse<ICityInfo>) => {
          set({ cityInfo, isLoading: false });
          localStorage.setItem('cityId', JSON.stringify(cityInfo.id));
        },
        error: (err) => {
          const error: string = err.response?.data?.message || "Unknown error";

          set({ error, isLoading: false });
        }
      });
  }
}));
