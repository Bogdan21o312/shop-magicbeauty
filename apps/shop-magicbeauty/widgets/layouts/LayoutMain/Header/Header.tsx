'use client'
import { EntityContainer, IconSearch } from '@shop-magicbeauty/common';
import classes from './Header.module.scss';
import Link from 'next/link';
import { HOME_PAGE_URL } from '../../../../shared';
import { links } from './links';

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
        <div className={classes.actions}>
          <button type='button' className={classes.action}>
            <IconSearch/>
          </button>
        </div>
      </EntityContainer>
    </header>
  );
}
