import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import SectionMessage from './SectionMessage';
import SectionMessageTitle from '../SectionMessageTitle';
import styled from '../styled';
import {
  ChangelogTemplate,
  DocumentationTemplate,
} from '../../stories/templates';

export default {
  title: 'PDS/@ps/SectionMessage',
  component: SectionMessage,
  argTypes: {
    severity: {
      control: 'select',
      options: ['error', 'info', 'warning', 'success'],
    },
  },
  args: {
    severity: 'info',
  },
} as Meta;

const Template: Story = (args) => (
  <SectionMessage {...args}>
    <SectionMessageTitle>Section Message</SectionMessageTitle>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </SectionMessage>
);

export const Configurable = Template.bind({});

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
});

const SeverityTemplate: Story = (args) => (
  <Container>
    <SectionMessage {...args} severity="info">
      <SectionMessageTitle>Section Message</SectionMessageTitle>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </SectionMessage>
    <SectionMessage {...args} severity="success">
      <SectionMessageTitle>Section Message</SectionMessageTitle>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </SectionMessage>
    <SectionMessage {...args} severity="warning">
      <SectionMessageTitle>Section Message</SectionMessageTitle>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </SectionMessage>
    <SectionMessage {...args} severity="error">
      <SectionMessageTitle>Section Message</SectionMessageTitle>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </SectionMessage>
  </Container>
);

export const Severity = SeverityTemplate.bind({});

export const SeverityClose = SeverityTemplate.bind({});
SeverityClose.args = {
  onClose: () => {
    return;
  },
};

export const SeverityCloseFocus = SeverityTemplate.bind({});
SeverityCloseFocus.args = {
  onClose: () => {
    return;
  },
};
SeverityCloseFocus.parameters = { pseudo: { focus: true } };

const SectionMessageDocTemplate = (args) => <DocumentationTemplate {...args} />;

export const Documentation: Story = SectionMessageDocTemplate.bind({});
Documentation.args = {
  underlyingComponent: {
    name: 'Alert',
    href: 'https://v4.mui.com/components/alert/#alert',
  },
  props: {
    extends: {
      href: 'https://v4.mui.com/api/alert/#props',
    },
    omits: [
      {
        name: 'variant',
        defaultValue: "'standard'",
      },
    ],
  },
  css: {
    extends: {
      href: 'https://v4.mui.com/api/alert/#css',
    },
  },
};

const SectionMessageChangelogTemplate = (args) => (
  <ChangelogTemplate {...args} />
);

export const Changelog: Story = SectionMessageChangelogTemplate.bind({});
Changelog.args = {
  history: [
    {
      version: 'v0.12.0',
      versionDate: '2021-09-28',
      changes: ['Feat: Initial implementation.'],
    },
  ],
};