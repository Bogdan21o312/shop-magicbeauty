import { ReactNode } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import { Main } from './Main';
import { Wrapper } from '@shop-magicbeauty/common';

export async function LayoutMain({ children }: { children: ReactNode }) {
  return (
    <Wrapper>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  );
}
