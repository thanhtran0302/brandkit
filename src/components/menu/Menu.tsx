import React, { FC, useState } from 'react';
import { Layout } from './Menu.styles';
import MenuItem from './menuItem/MenuItem';

export interface IMenu {
  name: string;
  children?: string[];
}

export interface IOwnProps {
  items: IMenu[];
}

const Menu: FC<IOwnProps> = ({ items }) => {
  const [selectecItem, setSelectItem] = useState<string>('');

  return (
    <Layout>
      {items.map((item: IMenu, key: number) => (
        <MenuItem
          key={key}
          item={item}
          setSelectItem={setSelectItem}
          isSelected={selectecItem === item.name}
        />
      ))}
    </Layout>
  );
};

export default Menu;
