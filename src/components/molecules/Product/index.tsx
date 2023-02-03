import Image from 'next/image';

import camiseta1 from 'assets/camisetas/1.png';

import * as S from './styles';

export const Product = () => (
  <S.Wrapper className="keen-slider__slide">
    <Image src={camiseta1} width={520} height={480} alt="camiseta" />

    <S.Footer>
      <S.Title>Camiseta X</S.Title>
      <S.Price>R$ 79,90</S.Price>
    </S.Footer>
  </S.Wrapper>
);
