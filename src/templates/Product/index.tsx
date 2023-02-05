import Image from 'next/image';

import { useState } from 'react';

import axios from 'axios';

import * as S from './styles';

export type ProductProps = {
  name: string;
  imageUrl: string;
  describe: string | null;
  defaultPriceId: string;
  price: string;
};

export const Product = ({
  name,
  imageUrl,
  describe,
  defaultPriceId,
  price,
}: ProductProps) => {
  const [isCreatingCheckout, setIsCreatingCheckout] = useState(false);

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckout(true);

      const { data } = await axios.post('/api/checkout', {
        priceId: defaultPriceId,
      });

      const { checkoutUrl } = data;

      window.location.href = checkoutUrl;
    } catch (error) {
      setIsCreatingCheckout(false);
    }
  }

  return (
    <S.Wrapper>
      <S.ImageContainer>
        <Image
          src={imageUrl}
          width={520}
          height={480}
          style={{ objectFit: 'cover' }}
          alt={name}
        />
      </S.ImageContainer>

      <S.ProductDetails>
        <S.Title>{name}</S.Title>
        <S.Price>{price}</S.Price>

        <S.Description>{describe}</S.Description>

        <S.Button disabled={isCreatingCheckout} onClick={handleBuyProduct}>
          Comprar agora
        </S.Button>
      </S.ProductDetails>
    </S.Wrapper>
  );
};
