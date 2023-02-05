import Image from 'next/image';

import * as S from './styles';

export type ProductProps = {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
};

export const Product = ({ id, name, price, imageUrl }: ProductProps) => (
  <S.Wrapper
    href={`/product/${id}`}
    className="keen-slider__slide"
    prefetch={false}
  >
    <Image src={imageUrl} width={520} height={480} alt="camiseta" />

    <S.Footer>
      <S.Title>{name}</S.Title>
      <S.Price>{price}</S.Price>
    </S.Footer>
  </S.Wrapper>
);
