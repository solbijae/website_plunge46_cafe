import * as S from './styles';

type CategoryButtonProps = {
  category: string;
  isExpanded: boolean;
  onCategoryClick: (category: string) => void;
}

const CategoryButton = ({
  category,
  isExpanded,
  onCategoryClick
}: CategoryButtonProps) => {
  return (
    <S.ButtonWrap>
      <S.CategoryButton onClick={() => onCategoryClick(category)}>
        {category}
      </S.CategoryButton>
      <S.PlusIcon isExpanded={isExpanded} />
    </S.ButtonWrap>
  );
};

export default CategoryButton;
