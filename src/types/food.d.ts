export type FoodType = {
  categories: {
    type: string;
    items: {
      id: number;
      name: string;
      price: number;
      description: string;
      dietary: string[];
      extras: {
        option: string;
        price: number;
      }[];
    }[];
  }[];
};
