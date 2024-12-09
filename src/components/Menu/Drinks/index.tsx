import * as S from './styles';
import { useState, useEffect, useRef } from 'react';
import CategoryButton from '../CategoryButton';
import useFetchData from 'hooks/useFetchData';
import { DrinksType } from 'types/drinks';

const Drinks = () => {
  const { data: menu, error } = useFetchData<DrinksType>(
    '/data/menu-drinks.json',
  );
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

  const categories =
    menu?.categories.map((category) => ({
      id: category.id,
      name: category.name,
      note: category.note,
      regularPrice: category.regularPrice,
      kidsPrice: category.kidsPrice,
      items: category.items,
    })) || [];

  const handleCategoryClick = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  return (
    <S.Container>
      <S.Title>DRINKS</S.Title>
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
                  <S.CategoryContainer
                    hasCategoryName={!!category.note}
                    hasCategoryPrice={!!category.regularPrice}
                  >
                    {category.note && (
                      <S.CategoryName>{category.note}</S.CategoryName>
                    )}
                    {category.regularPrice && (
                      <S.CategoryPrice>
                        All - ${category.regularPrice}
                        {category.kidsPrice &&
                          `/ Kids - ${category.kidsPrice}`
                        }
                      </S.CategoryPrice>
                    )}
                  </S.CategoryContainer>

                  {category.items.map((item) => (
                    <S.MenuItem key={item.id}>
                      <S.ItemName>{item.name}</S.ItemName>
                      <S.ItemPrice>
                        {item.regularPrice && `$${item.regularPrice}`}
                        {item.hasLargeSize && item.largePrice && (
                          <span> / Large: ${item.largePrice}</span>
                        )}
                        {item.bottlePrice && (
                          <span> / Bottle: ${item.bottlePrice}</span>
                        )}
                        {item.sizes && (
                          <span>
                            {item.sizes
                              .map((size) => `$${size.price} (${size.size})`)
                              .join(' / ')}
                          </span>
                        )}
                      </S.ItemPrice>

                      {item.description && (
                        <S.ItemDescription>{item.description}</S.ItemDescription>
                      )}

                      {item.ingredients && item.ingredients.length > 0 && (
                        <S.ItemIngredients>
                          <strong>Ingredients:</strong>{' '}
                          {item.ingredients.join(', ')}
                        </S.ItemIngredients>
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

export default Drinks;
