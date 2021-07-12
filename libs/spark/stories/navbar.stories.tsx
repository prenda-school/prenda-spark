import React from 'react';
import styled from 'styled-components';
import { Meta } from '@storybook/react/types-6-0';
import { NavBar, NavBarProps, PrendaMonogramDark, NavBarButton } from '../src';
import HomeIconDuotone from '../src/icons/duotone/Home';
import CheckCircleIconDuotone from '../src/icons/duotone/CheckCircle';
// import RocketIconDuotone from '../src/icons/duotone/Rocket';
import InboxFilledIconDuotone from '../src/icons/duotone/InboxFilled';
import UserIconDuotone from '../src/icons/duotone/User';
import Toolbar from '@material-ui/core/Toolbar';
import { theme } from '../src/styles';
import UsersIconDuotone from '../src/icons/duotone/Users';

export default {
  title: 'prenda-spark/NavBar',
  component: NavBar,
  argTypes: {},
  args: {},
} as Meta;

const UserMenu = styled.div`
  display: flex;
  align-items: center;
`;

const Template = (args: NavBarProps) => (
  <NavBar {...args}>
    <Toolbar style={{ gap: 8 }}>
      <PrendaMonogramDark fontSize="72px" />
      <NavBarButton href="" startIcon={<HomeIconDuotone />} aria-current="page">
        Home
      </NavBarButton>
      <NavBarButton href="" startIcon={<CheckCircleIconDuotone />}>
        Conquer
      </NavBarButton>
      <NavBarButton href="" startIcon={<UsersIconDuotone />}>
        Collaborate
      </NavBarButton>
      <NavBarButton href="" startIcon={<CheckCircleIconDuotone />}>
        Create
      </NavBarButton>
      <NavBarButton
        href=""
        startIcon={<InboxFilledIconDuotone />}
        style={{ marginLeft: 'auto' }}
      >
        0
      </NavBarButton>
      <UserMenu>
        <UserIconDuotone fontSize="large" />
      </UserMenu>
    </Toolbar>
  </NavBar>
);

export const Basic = Template.bind({});
