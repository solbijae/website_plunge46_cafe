import * as S from './styles';

type CategoryButtonProps = {
  categories: string[];
}

const CategoryButton = ({ categories }: CategoryButtonProps) => {
  return (
    <S.Container>
      {categories.map((category, index) => (
        <S.ButtonWrap>
          <S.CategoryButton key={index}>{category}</S.CategoryButton>
          <S.PlusIcon />
        </S.ButtonWrap>
      ))}
    </S.Container>
  );
};

export default CategoryButton;
