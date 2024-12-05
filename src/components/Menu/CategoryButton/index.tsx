import * as S from './styles';

type CategoryButtonProps = {
  category: {
    id: string;
    name: string;
  };
  isExpanded: boolean;
  onCategoryClick: (categoryId: string) => void;
}

const CategoryButton = ({
  category,
  isExpanded,
  onCategoryClick
}: CategoryButtonProps) => {
  return (
    <S.ButtonWrap>
      <S.CategoryButton onClick={() => onCategoryClick(category.id)}>
        {category.name}
      </S.CategoryButton>
      <S.PlusIcon isExpanded={isExpanded} />
    </S.ButtonWrap>
  );
};

export default CategoryButton;
