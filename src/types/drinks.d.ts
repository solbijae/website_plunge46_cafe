export type DrinksType = {
  categories: {
    id: string;
    name: string;
    note?: string;
    regularPrice?: number;
    kidsPrice?: number;
    items: {
      id: string;
      name: string;
      regularPrice: number;
      largePrice?: number; // largePrice가 없는 항목도 있기 때문에 optional로 설정
      hasLargeSize: boolean;
      description?: string; // 일부 항목에 description이 있을 수 있음
      ingredients?: string[]; // ingredients 필드가 있는 항목들
      isLooseLeaf?: boolean; // 일부 항목에 isLooseLeaf가 있음
      servedIn?: string; // servedIn 필드가 있는 항목들
      isVegan?: boolean; // 일부 항목에 isVegan이 있음
      sizes?: {
        size: string;
        price: number;
      }[]; // sizes가 있는 항목들
      bottlePrice?: number; // bottlePrice가 있는 항목들
    }[];
    specialtyTeas?: {
      // specialtyTeas가 있을 수 있는 항목
      id: string;
      name: string;
      regularPrice: number;
      servedIn: string;
      description: string;
      hasCaffeine: boolean;
    }[];
  }[];
};
