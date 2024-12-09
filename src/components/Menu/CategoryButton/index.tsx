import * as S from './styles';

type CategoryButtonProps = {
  category: {
    id: string;
    name: string;
  };
  isExpanded: boolean;
  onCategoryClick: (categoryId: string) => void;
};

const CategoryButton = ({
  category,
  isExpanded,
  onCategoryClick,
}: CategoryButtonProps) => {
  return (
    <S.ButtonWrap>
      <S.CategoryButton onClick={() => onCategoryClick(category.id)}>
        {category.name}
        <S.Image src={`/images/${category.name}.png`} alt='food and drinks'></S.Image>
        <S.PlusIcon isExpanded={isExpanded} />
      </S.CategoryButton>
    </S.ButtonWrap>
  );
};

export default CategoryButton;
