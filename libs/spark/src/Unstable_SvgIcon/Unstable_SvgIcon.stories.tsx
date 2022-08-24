import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { Unstable_SvgIcon } from '..';

export const _retyped = Unstable_SvgIcon as typeof Unstable_SvgIcon;

export default {
  title: '@ps/Unstable_SvgIcon',
  component: _retyped,
  excludeStories: ['_retyped'],
  args: {
    // default values aren't picked up by auto-docs
    color: 'inherit',
    fontSize: 'inherit',
  },
} as Meta;

const Template = (args) => (
  <Unstable_SvgIcon {...args}>
    <path d="M13.075 1.985a.804.804 0 011.307.885l-.786 1.835-.01.023c-.164.383-.302.705-.396.971-.095.271-.172.556-.165.856a2.25 2.25 0 001.313 1.99c.273.126.565.167.852.186.281.019.631.019 1.049.019h1.166c.977 0 1.662 0 2.19.046.521.045.811.13 1.02.248.454.258.804.666.99 1.154.086.225.125.524.09 1.046-.035.53-.139 1.206-.287 2.172l-.523 3.4c-.113.733-.192 1.242-.284 1.637-.09.385-.18.608-.29.777a2.25 2.25 0 01-.956.82c-.184.083-.417.139-.812.169-.404.03-.919.031-1.661.031H9.8c-.852 0-1.447 0-1.91-.038-.453-.038-.714-.107-.911-.207a2.25 2.25 0 01-.984-.983c-.1-.198-.17-.459-.207-.913-.037-.462-.038-1.057-.038-1.909v-3.224c0-1.503.005-2.132.145-2.716a5.25 5.25 0 01.629-1.518c.314-.512.755-.96 1.818-2.023l4.733-4.734zM13.644.25c-.611 0-1.197.243-1.63.675L7.282 5.658l-.072.073c-.969.968-1.546 1.546-1.964 2.227a6.75 6.75 0 00-.809 1.952c-.186.777-.186 1.594-.186 2.963V16.232c0 .813 0 1.469.043 2 .045.546.14 1.026.366 1.47a3.75 3.75 0 001.639 1.64c.444.226.924.32 1.47.365.531.043 1.187.043 2 .043h7.144c.705 0 1.277 0 1.745-.036.483-.036.91-.114 1.317-.298a3.75 3.75 0 001.593-1.367c.244-.374.386-.784.495-1.256.107-.457.194-1.022.301-1.72l.005-.03.523-3.4.005-.033c.142-.924.256-1.665.296-2.266.041-.616.012-1.164-.185-1.68a3.75 3.75 0 00-1.65-1.924c-.48-.273-1.018-.385-1.633-.438-.6-.052-1.35-.052-2.284-.052h-1.176c-.45 0-.749 0-.975-.015-.226-.015-.302-.042-.326-.053a.75.75 0 01-.438-.664c0-.027.005-.107.08-.32.075-.214.193-.49.37-.903l.786-1.834A2.304 2.304 0 0013.644.25zM2.75 8a.75.75 0 00-1.5 0v12a.75.75 0 001.5 0V8z" />
  </Unstable_SvgIcon>
);

export const Default: Story = Template.bind({});
Default.storyName = '(default)';

export const ColorInherit: Story = Template.bind({});
ColorInherit.args = { color: 'inherit' };
ColorInherit.storyName = 'color=inherit';

export const ColorNormal: Story = Template.bind({});
ColorNormal.args = { color: 'normal' };
ColorNormal.storyName = 'color=normal';

export const ColorSecondary: Story = Template.bind({});
ColorSecondary.args = { color: 'secondary' };
ColorSecondary.storyName = 'color=secondary';

export const ColorInverse: Story = Template.bind({});
ColorInverse.args = { color: 'inverse' };
ColorInverse.storyName = 'color=inverse';

export const ColorInverseSecondary: Story = Template.bind({});
ColorInverseSecondary.args = { color: 'inverseSecondary' };
ColorInverseSecondary.storyName = 'color=inverseSecondary';

export const FontSizeInherit: Story = Template.bind({});
FontSizeInherit.args = { fontSize: 'inherit' };
FontSizeInherit.storyName = 'fontSize=inherit';

export const FontSizeSmall: Story = Template.bind({});
FontSizeSmall.args = { fontSize: 'small' };
FontSizeSmall.storyName = 'fontSize=small';

export const FontSizeMedium: Story = Template.bind({});
FontSizeMedium.args = { fontSize: 'medium' };
FontSizeMedium.storyName = 'fontSize=medium';

export const FontSizeLarge: Story = Template.bind({});
FontSizeLarge.args = { fontSize: 'large' };
FontSizeLarge.storyName = 'fontSize=large';

export const FontSizeXLarge: Story = Template.bind({});
FontSizeXLarge.args = { fontSize: 'xlarge' };
FontSizeXLarge.storyName = 'fontSize=xlarge';
