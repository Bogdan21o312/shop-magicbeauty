import { EntityContainer } from '@shop-magicbeauty/common';
import classes from './Header.module.scss';
import {
  ABOUT_PAGE_URL,
  CATEGORIES_PAGE_URL,
  HOME_PAGE_URL,
  NEWS_PAGE_URL,
  OPT_PAGE_URL,
} from '../../../../shared';
import Link from 'next/link';
export const links = [
  {
    test: 'Головна',
    link: HOME_PAGE_URL,
  },
  {
    test: 'Категорії',
    link: CATEGORIES_PAGE_URL,
  },
  {
    test: 'Про нас',
    link: ABOUT_PAGE_URL,
  },
  {
    test: 'Новини',
    link: NEWS_PAGE_URL,
  },
  {
    test: 'Опт',
    link: OPT_PAGE_URL,
  },
];
export function Header() {
  return (
    <header className={classes.header}>
      <EntityContainer>
        <div className={classes.logo}>
          <Link href={HOME_PAGE_URL}>LOGO</Link>
        </div>
        <nav className={classes.menu}>
          <ul className={classes.list}>
            {links.map((link) => (
              <li key={link.link} className={classes.item}>
                <Link href={link.link} className={classes.link}>
                  {link.test}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </EntityContainer>
    </header>
  );
}
