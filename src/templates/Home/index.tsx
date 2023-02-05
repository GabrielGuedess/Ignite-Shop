import { useKeenSlider } from 'keen-slider/react';

import { Product } from 'components/molecules/Product';

import * as S from './styles';

import 'keen-slider/keen-slider.min.css';

export type HomeProps = {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
  }[];
};

export const Home = ({ products }: HomeProps) => {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  return (
    <S.Wrapper ref={sliderRef} className="keen-slider">
      {products.map(product => (
        <Product key={product.id} {...product} />
      ))}
    </S.Wrapper>
  );
};
