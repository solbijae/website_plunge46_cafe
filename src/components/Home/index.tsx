import * as S from './styles';

const Home = () => {
  return (
    <S.Container>
      <S.TextContainer>
        <S.Title>PLUNGE NO 46</S.Title>
        <S.TextWrap>
          <p>Mediterranean inspired menu with locally roasted coffe.</p>
          <p>
            Situated in Summer Hill, welcoming everyone 7 days a weeks with all
            day breakfast and lunch menu
          </p>
        </S.TextWrap>
      </S.TextContainer>
      <S.Image src="/images/main.jpg" alt="main" />
    </S.Container>
  );
};

export default Home;
