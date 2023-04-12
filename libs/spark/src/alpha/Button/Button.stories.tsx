import React from 'react';
import type { Meta, Story as DefaultStory } from '@storybook/react/types-6-0';
import { theme } from '../..';
import { Avatar, Button, ButtonProps } from '..';
import {
  ChevronDown,
  containBoxShadowInline,
  Plus,
  sparkThemeProvider,
} from '../../../stories';

export const _retyped = Button as typeof Button;

export default {
  title: '@ps/Button',
  component: _retyped,
  excludeStories: ['_retyped'],
  parameters: { actions: { argTypesRegex: '^on.*' } },
  argTypes: {
    leadingAvatar: {
      control: 'select',
      options: ['undefined', '(Guide)', '(Initials)'],
      mapping: {
        undefined: undefined,
        '(Guide)': <Avatar src="/img/guide-2.png" alt="Adult woman smiling" />,
        '(Initials)': <Avatar color="blue">M</Avatar>,
      },
    },
    leadingIcon: {
      control: 'select',
      options: ['undefined', 'Plus'],
      mapping: {
        undefined: undefined,
        Plus: <Plus />,
      },
    },
    trailingIcon: {
      control: 'select',
      options: ['undefined', 'ChevronDown'],
      mapping: {
        undefined: undefined,
        ChevronDown: <ChevronDown />,
      },
    },
    disabled: {
      control: 'boolean',
    },
  },
  args: {
    children: <>Label</>,
  },
} as Meta;

const Template = (args) => <Button {...args} />;

type Story = DefaultStory<ButtonProps>;

export const Default: Story = Template.bind({});
Default.storyName = '(default)';

export const STP: Story = Template.bind({});
STP.decorators = [sparkThemeProvider];
STP.storyName = '(STP)';

export const FullWidth: Story = Template.bind({});
FullWidth.args = { fullWidth: true };
FullWidth.storyName = 'fullWidth';

const variants: Array<ButtonProps['variant']> = [
  'primary',
  'stroked',
  'ghost',
  'destructive',
];
const sizes: Array<ButtonProps['size']> = ['large', 'medium', 'small'];

const SizeByVariantTemplate = (args) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      // space for focus indicator
      gap: 8,
    }}
  >
    {sizes.map((size) => (
      <div
        key={size}
        style={{ display: 'flex', gap: 4, alignItems: 'flex-start' }}
      >
        {variants.map((variant) => (
          <Button key={variant} {...args} variant={variant} size={size} />
        ))}
      </div>
    ))}
    {sizes.map((size) => (
      <div
        key={size}
        style={{
          display: 'flex',
          gap: 4,
          alignItems: 'flex-start',
          backgroundColor: theme.unstable_palette.background.inverse,
          margin: -4,
          padding: 4,
        }}
      >
        {variants.map((variant) => (
          <Button
            key={variant}
            {...args}
            variant={variant}
            size={size}
            color="inverse"
          />
        ))}
      </div>
    ))}
  </div>
);

export const SizeByVariant: Story = SizeByVariantTemplate.bind({});
SizeByVariant.storyName = 'size ⨯ variant';

export const SizeByVariantSTP: Story = SizeByVariantTemplate.bind({});
SizeByVariantSTP.decorators = [sparkThemeProvider];
SizeByVariantSTP.storyName = 'size ⨯ variant (STP)';

export const SizeByVariantHover: Story = SizeByVariantTemplate.bind({});
SizeByVariantHover.parameters = { pseudo: { hover: true } };
SizeByVariantHover.storyName = 'size ⨯ variant :hover';

export const SizeByVariantHoverSTP: Story = SizeByVariantTemplate.bind({});
SizeByVariantHoverSTP.decorators = [sparkThemeProvider];
SizeByVariantHoverSTP.parameters = { pseudo: { hover: true } };
SizeByVariantHoverSTP.storyName = 'size ⨯ variant :hover (STP)';

export const SizeByVariantActive: Story = SizeByVariantTemplate.bind({});
SizeByVariantActive.parameters = { pseudo: { active: true } };
SizeByVariantActive.storyName = 'size ⨯ variant :active';

export const SizeByVariantActiveSTP: Story = SizeByVariantTemplate.bind({});
SizeByVariantActiveSTP.decorators = [sparkThemeProvider];
SizeByVariantActiveSTP.parameters = { pseudo: { active: true } };
SizeByVariantActiveSTP.storyName = 'size ⨯ variant :active (STP)';

export const SizeByVariantExpanded: Story = SizeByVariantTemplate.bind({});
SizeByVariantExpanded.args = { 'aria-expanded': true };
SizeByVariantExpanded.storyName = 'size ⨯ variant aria-expanded';

export const SizeByVariantExpandedSTP: Story = SizeByVariantTemplate.bind({});
SizeByVariantExpandedSTP.args = { 'aria-expanded': true };
SizeByVariantExpandedSTP.decorators = [sparkThemeProvider];
SizeByVariantExpandedSTP.storyName = 'size ⨯ variant aria-expanded (STP)';

export const SizeByVariantFocusVisible: Story = SizeByVariantTemplate.bind({});
SizeByVariantFocusVisible.decorators = [containBoxShadowInline];
SizeByVariantFocusVisible.parameters = { pseudo: { focusVisible: true } };
SizeByVariantFocusVisible.storyName = 'size ⨯ variant :focus-visible';

export const SizeByVariantFocusVisibleSTP: Story = SizeByVariantTemplate.bind(
  {}
);
SizeByVariantFocusVisibleSTP.decorators = [
  sparkThemeProvider,
  containBoxShadowInline,
];
SizeByVariantFocusVisibleSTP.parameters = { pseudo: { focusVisible: true } };
SizeByVariantFocusVisibleSTP.storyName = 'size ⨯ variant :focus-visible (STP)';

export const SizeByVariantDisabled: Story = SizeByVariantTemplate.bind({});
SizeByVariantDisabled.args = { disabled: true };
SizeByVariantDisabled.storyName = 'size ⨯ variant disabled';

export const SizeByVariantDisabledSTP: Story = SizeByVariantTemplate.bind({});
SizeByVariantDisabledSTP.args = { disabled: true };
SizeByVariantDisabledSTP.decorators = [sparkThemeProvider];
SizeByVariantDisabledSTP.storyName = 'size ⨯ variant disabled (STP)';

export const SizeByVariantLeadingAvatar: Story = SizeByVariantTemplate.bind({});
SizeByVariantLeadingAvatar.args = { leadingAvatar: '(Guide)' };
SizeByVariantLeadingAvatar.storyName = 'size ⨯ variant leadingAvatar';

export const SizeByVariantLeadingAvatarDisabled: Story =
  SizeByVariantTemplate.bind({});
SizeByVariantLeadingAvatarDisabled.args = {
  leadingAvatar: '(Guide)',
  disabled: true,
};
SizeByVariantLeadingAvatarDisabled.storyName =
  'size ⨯ variant leadingAvatar disabled';

export const SizeByVariantLeadingIcon: Story = SizeByVariantTemplate.bind({});
SizeByVariantLeadingIcon.args = { leadingIcon: 'Plus' };
SizeByVariantLeadingIcon.storyName = 'size ⨯ variant leadingIcon';

export const SizeByVariantLeadingIconDisabled: Story =
  SizeByVariantTemplate.bind({});
SizeByVariantLeadingIconDisabled.args = {
  leadingIcon: 'Plus',
  disabled: true,
};
SizeByVariantLeadingIconDisabled.storyName =
  'size ⨯ variant leadingIcon disabled';

export const SizeByVariantTrailingIcon: Story = SizeByVariantTemplate.bind({});
SizeByVariantTrailingIcon.args = { trailingIcon: 'ChevronDown' };
SizeByVariantTrailingIcon.storyName = 'size ⨯ variant trailingIcon';

export const SizeByVariantTrailingIconDisabled: Story =
  SizeByVariantTemplate.bind({});
SizeByVariantTrailingIconDisabled.args = {
  trailingIcon: 'ChevronDown',
  disabled: true,
};
SizeByVariantTrailingIconDisabled.storyName =
  'size ⨯ variant trailingIcon disabled';
