import React, { FC, useState } from 'react';
import {
  Layout,
  ItemNameContainer,
  ChildrenContainer
} from './MenuItem.styles';
import { IMenu } from '../Menu';
import ArrowUp from '../../../assets/icons/arrow-up.svg';
import ArrowDown from '../../../assets/icons/arrow-down.svg';
import SubItem from '../subItem/SubItem';

export interface IOwnProps {
  item: IMenu;
  setSelectItem(name: string): void;
  isSelected: boolean;
}

const MenuItem: FC<IOwnProps> = ({ item, setSelectItem, isSelected }) => {
  const [isOpen, shouldOpen] = useState(false);
  const [selectedItem, setSelect] = useState<string>('');

  return (
    <Layout>
      <ItemNameContainer
        isSelected={isSelected}
        onClick={() => {
          shouldOpen(!isOpen);
          setSelectItem(item.name || '');
        }}
      >
        <div>{item.name}</div>
        {item.children ? isOpen ? <ArrowUp /> : <ArrowDown /> : null}
      </ItemNameContainer>
      {item.children && isOpen && (
        <ChildrenContainer>
          {item.children.map((child: string, key: number) => (
            <SubItem
              key={key}
              onSelect={setSelect}
              name={child}
              isSelected={child === selectedItem}
            />
          ))}
        </ChildrenContainer>
      )}
    </Layout>
  );
};

export default MenuItem;
