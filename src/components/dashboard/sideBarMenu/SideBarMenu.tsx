import React, { FC } from 'react';
import {
  Layout,
  ProjectNameContainer,
  SideMenuContainer,
  BackToProjects
} from './SideBarMenu.styles';
import Menu, { IMenu } from '../../menu/Menu';
import { useTranslation } from 'react-i18next';

interface IOwnProps {
  name: string;
}

const menu: IMenu[] = [
  {
    name: 'UI Components',
    children: ['Alert', 'Button']
  },
  {
    name: 'Brand missions'
  }
];

const SideBarMenu: FC<IOwnProps> = ({ name }) => {
  const { t } = useTranslation();

  return (
    <Layout>
      <ProjectNameContainer>{name}</ProjectNameContainer>
      <SideMenuContainer>
        <Menu items={menu} />
      </SideMenuContainer>
      <BackToProjects>
        <a href="/projects">{t('backToProjects')}</a>
      </BackToProjects>
    </Layout>
  );
};

export default SideBarMenu;
