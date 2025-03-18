import { ICity } from '../(interfaces)';
import { CITIES } from '../(mocks)';

export const getCities = (searchString: string): Promise<ICity[]> => {
  return new Promise((res) => {
    setTimeout(() => {
      const searchResults: ICity[] = CITIES.filter((city: ICity) => city.name.toLowerCase().includes(searchString));

      res(searchResults);
    }, 5000);
  });
};
