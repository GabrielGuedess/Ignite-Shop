import Image from 'next/image';

import * as S from './styles';

export type SuccessProps = {
  customerName: string;
  product: {
    name: string;
    imageUrl: string;
  };
};

export const Success = ({ customerName, product }: SuccessProps) => (
  <S.Wrapper>
    <S.Title>Compra efetuada!</S.Title>

    <S.ImageContainer>
      <Image
        width={114.65}
        height={106.1}
        src={product.imageUrl}
        alt={product.name}
      />
    </S.ImageContainer>

    <S.Description>
      Uhuul <strong>{customerName}</strong>, sua <strong>{product.name}</strong>{' '}
      já está a caminho da sua casa.
    </S.Description>

    <S.Button href="/">Voltar ao catálogo</S.Button>
  </S.Wrapper>
);
