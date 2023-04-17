import React from 'react';
import type { Meta, Story as DefaultStory } from '@storybook/react/types-6-0';
import type { CheckboxListItemProps } from '..';
import { Avatar, CheckboxListItem } from '..';
import { containBoxShadow, enableHooks, statefulValue } from '../../../stories';
import { default as ListItemMeta } from '../ListItem/ListItem.stories';

export const _retyped = CheckboxListItem as typeof CheckboxListItem;

export default {
  title: '@ps/CheckboxListItem',
  component: _retyped,
  excludeStories: ['_retyped'],
  decorators: [statefulValue, enableHooks],
  args: { children: <>Label</> },
  argTypes: {
    secondaryAction: ListItemMeta.argTypes.secondaryAction,
  },
} as Meta;

const Template = (args) => <CheckboxListItem {...args} />;

type Story = DefaultStory<CheckboxListItemProps>;

export const Value: Story = Template.bind({});
Value.args = { value: 'value', checked: false };
Value.storyName = 'value';

export const ValueHover: Story = Template.bind({});
ValueHover.args = { value: 'value', checked: false };
ValueHover.parameters = { pseudo: { hover: true } };
ValueHover.storyName = 'value :hover';

export const ValueFocusVisible: Story = Template.bind({});
ValueFocusVisible.args = { value: 'value', checked: false };
ValueFocusVisible.decorators = [containBoxShadow];
ValueFocusVisible.parameters = { pseudo: { focusVisible: true } };
ValueFocusVisible.storyName = 'value :focus-visible';

export const ValueChecked: Story = Template.bind({});
ValueChecked.args = { value: 'value', checked: true };
ValueChecked.storyName = 'value checked';

export const ValueCheckedDisabled: Story = Template.bind({});
ValueCheckedDisabled.args = {
  value: 'value',
  checked: true,
  disabled: true,
};
ValueCheckedDisabled.storyName = 'value checked disabled';

export const ValueDisabled: Story = Template.bind({});
ValueDisabled.args = {
  value: 'value',
  disabled: true,
};
ValueDisabled.storyName = 'value disabled';

export const ValueSelected: Story = Template.bind({});
ValueSelected.args = {
  value: 'value',
  selected: true,
};
ValueSelected.storyName = 'value selected';

// ============
// = Examples =
// ============

export const Student: Story = Template.bind({});
Student.args = {
  checked: true,
  children: <>John Doe</>,
  ContentGroupProps: {
    leadingEl: (
      <Avatar size="small" src="/img/student-boy-1.png" alt="Boy smiling" />
    ),
    row: true,
    tertiary: '4th grade',
  },
  value: 'value',
};