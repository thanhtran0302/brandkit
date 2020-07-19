import React, { FC } from 'react';
import { Layout } from './SideBarMenu.styles';

interface IOwnProps {
  name: string;
}

const SideBarMenu: FC<IOwnProps> = ({ name }) => <Layout>{name}</Layout>;

export default SideBarMenu;
