import * as S from './styles';
import CategoryButton from '../CategoryButton';
import useFetchData from 'hooks/useFetchData';
import { FoodType } from 'types/food';

const Food = () => {
  const { data: menu, error } = useFetchData<FoodType>('/data/menu-food.json');

  if (error) {
    console.log(error);
  }
  const categories = menu?.categories.map((category) => category.type) || [];

  return (
    <S.Container>
      <S.Title>FOOD</S.Title>
      {categories.length > 0 && (
        <CategoryButton categories={categories} />
      )}
    </S.Container>
  );
};

export default Food;