import { EntityContainer } from '@shop-magicbeauty/common';
import classes from './Header.module.scss';

export function Header() {
  return (
    <header>
      <EntityContainer>
        <div className={classes.logo}>Logo</div>
      </EntityContainer>
    </header>
  );
}
