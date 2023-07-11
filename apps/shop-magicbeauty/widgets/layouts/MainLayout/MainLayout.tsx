import { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import {Wrapper} from "@shop-magicbeauty/ui"
import { Main } from "./Main";

export async function MainLayout({children}:{children: ReactNode}) {
  return (
    <Wrapper>
      <Header />
      <Main>
        {children}
      </Main>
      <Footer/>
    </Wrapper>
  )
}
