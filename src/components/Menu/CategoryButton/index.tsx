import { useState } from 'react';
import * as S from './styles';
import MenuImageSkeleton from 'components/Skeleton/MenuImage';

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
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const handleImageLoad = () => {
    setIsImageLoaded(true);
  }

  return (
    <S.ButtonWrap>
      <S.CategoryButton onClick={() => onCategoryClick(category.id)}>
        {category.name}
        {!isImageLoaded && <MenuImageSkeleton />}
        <S.Image
          src={`/images/${category.name}.png`}
          alt='food and drinks'
          onLoad={handleImageLoad}
          style={{ display: isImageLoaded ? 'block' : 'none' }}
        ></S.Image>
        <S.PlusIcon isExpanded={isExpanded} />
      </S.CategoryButton>
    </S.ButtonWrap>
  );
};

export default CategoryButton;
