import * as S from './styles';
import { useState } from 'react';
import CategoryButton from '../CategoryButton';
import useFetchData from 'hooks/useFetchData';
import { DrinksType } from 'types/drinks';

const Drinks = () => {
  const { data: menu, error } = useFetchData<DrinksType>('/data/menu-drinks.json');
  const [expandedCategory, setExpandedCategory] = useState<string | null>('coffee');

  if (error) {
    console.log(error);
  }

  // 카테고리 목록과 아이템들을 가져옴
  const categories = menu?.categories.map((category) => ({
    id: category.id,
    name: category.name,
    regularPrice: category.regularPrice, // 카테고리의 regularPrice
    items: category.items
  })) || [];

  const handleCategoryClick = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  return (
    <S.Container>
      <S.Title>DRINKS</S.Title>
      <S.MenuContainer>
        {categories.map((category) => (
          <S.CategorySection key={category.id}>
            <CategoryButton
              category={category}
              isExpanded={expandedCategory === category.id}
              onCategoryClick={handleCategoryClick}
            />
            {expandedCategory === category.id && (
              <S.ItemsContainer>
                {category.regularPrice && (
                  <S.CategoryPrice>
                    All - ${category.regularPrice}
                  </S.CategoryPrice>
                )}
                
                {category.items.map((item) => (
                  <S.MenuItem key={item.id}>
                    <S.ItemName>{item.name}</S.ItemName>
                    <S.ItemPrice>
                      ${item.regularPrice}
                      {item.hasLargeSize && item.largePrice && (
                        <span> / Large: ${item.largePrice}</span>
                      )}
                    </S.ItemPrice>

                    {item.description && <S.ItemDescription>{item.description}</S.ItemDescription>}

                    {item.ingredients && item.ingredients.length > 0 && (
                      <S.ItemIngredients>
                        <strong>Ingredients:</strong> {item.ingredients.join(', ')}
                      </S.ItemIngredients>
                    )}
                  </S.MenuItem>
                ))}
              </S.ItemsContainer>
            )}
          </S.CategorySection>
        ))}
      </S.MenuContainer>
    </S.Container>
  );
};

export default Drinks;
