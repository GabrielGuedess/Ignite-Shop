import Image from 'next/image';

import * as S from './styles';

export const Header = () => (
  <S.Wrapper>
    <Image width={130} height={52} src="/svg/logo.svg" alt="Logo" />
  </S.Wrapper>
);
