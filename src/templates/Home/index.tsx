import { Product } from 'components/molecules/Product';

import { useKeenSlider } from 'keen-slider/react';

import * as S from './styles';

import 'keen-slider/keen-slider.min.css';

export const Home = () => {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  return (
    <S.Wrapper ref={sliderRef} className="keen-slider">
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </S.Wrapper>
  );
};
