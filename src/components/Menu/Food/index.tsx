import * as S from './styles';
import { useState, useEffect } from 'react';
import CategoryButton from '../CategoryButton';
import useFetchData from 'hooks/useFetchData';
import { FoodType } from 'types/food';

const Food = () => {
  const { data: menu, error } = useFetchData<FoodType>('/data/menu-food.json');
  const [expandedCategory, setExpandedCategory] = useState<string | null>("Breakfast - All Day");

  if (error) {
    console.log(error);
  }

  const categories = menu?.categories.map((category) => category.type) || [];

  const handleCategoryClick = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  }

  return (
    <S.Container>
      <S.Title>FOOD</S.Title>
      <S.MenuContainer>
        {categories.map((category) => (
          <S.CategorySection key={category}>
            <CategoryButton
              category={category}
              isExpanded={expandedCategory === category}
              onCategoryClick={handleCategoryClick}
            />
            {expandedCategory === category && (
              <S.ItemsContainer>
                {menu?.categories
                  .find((cat) => cat.type === category)
                  ?.items.map((item) => (
                    <S.MenuItem key={item.id}>
                      <S.ItemName>
                        {item.name}
                        {item.dietary && `(${item.dietary})`}
                      </S.ItemName>
                      <S.ItemPrice>${item.price}</S.ItemPrice>
                      <S.ItemDescription>{item.description}</S.ItemDescription>
                      {item.extras && (
                        <S.ItemExtras>
                          {item.extras.map((extra, index) => (
                            <p>Option: {extra.option} (${extra.price})</p>
                          ))}
                        </S.ItemExtras>
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

export default Food;