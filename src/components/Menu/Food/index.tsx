import * as S from './styles';
import { useState, useEffect, useRef } from 'react';
import CategoryButton from '../CategoryButton';
import useFetchData from 'hooks/useFetchData';
import { FoodType } from 'types/food';

const Food = () => {
  const { data: menu, error } = useFetchData<FoodType>('/data/menu-food.json');
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const itemsContainerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState(0);
  useEffect(() => {
    if (itemsContainerRef.current) {
      console.log(itemsContainerRef.current.offsetHeight)
      setContainerHeight(itemsContainerRef.current.offsetHeight);
    }
  }, [expandedCategory]);

  if (error) {
    console.log(error);
  }

  // categories를 id와 name을 가진 객체로 변환
  const categories =
    menu?.categories.map((category) => ({
      id: category.type, // 'type'을 id로 사용
      name: category.type, // name도 'type'으로 사용
    })) || [];

  const handleCategoryClick = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  return (
    <S.Container>
      <S.Title>FOOD</S.Title>
      <S.MenuContainer>
        {categories.map((category, idx) => (
          <S.CategorySection key={category.id}>
            <CategoryButton
              category={category}
              isExpanded={expandedCategory === category.id}
              onCategoryClick={handleCategoryClick}
            />
            {expandedCategory === category.id && (
              <div>
                <div style={{ height: `${containerHeight}px` }}></div>
                <S.ItemsContainer ref={itemsContainerRef} categoryIndex={idx}>
                  {menu?.categories
                    .find((cat) => cat.type === category.id)
                    ?.items.map((item) => (
                      <S.MenuItem key={item.id}>
                        <S.ItemName>
                          {item.name}
                          {item.dietary && ` (${item.dietary})`}
                        </S.ItemName>
                        <S.ItemPrice>
                          {item.price && `$${item.price}`}
                        </S.ItemPrice>
                        <S.ItemDescription>{item.description}</S.ItemDescription>
                        {item.extras && (
                          <S.ItemExtras>
                            {item.extras.map((extra, index) => (
                              <p key={index}>
                                - {extra.option} (${extra.price})
                              </p>
                            ))}
                          </S.ItemExtras>
                        )}
                      </S.MenuItem>
                    ))}
                </S.ItemsContainer>
              </div>
            )}
          </S.CategorySection>
        ))}
      </S.MenuContainer>
    </S.Container>
  );
};

export default Food;
