import React, { FC } from 'react';
import { Layout } from './SubItem.styles';

export interface IOwnProps {
  name: string;
  onSelect(name: string): void;
  isSelected: boolean;
}

const SubItem: FC<IOwnProps> = ({ name, onSelect, isSelected }) => (
  <Layout onClick={() => onSelect(name)} isSelected={isSelected}>
    {name}
  </Layout>
);

export default SubItem;
