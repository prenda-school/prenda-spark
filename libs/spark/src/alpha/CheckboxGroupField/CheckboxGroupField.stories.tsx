import React from 'react';
import type { Meta, Story as DefaultStory } from '@storybook/react/types-6-0';
import type { CheckboxGroupFieldProps } from '..';
import { CheckboxField, CheckboxGroupField } from '..';
import { containBoxShadow, Info } from '../../../stories';

export const _retyped = CheckboxGroupField as typeof CheckboxGroupField;

export default {
  title: '@ps/CheckboxGroupField',
  component: _retyped,
  excludeStories: ['_retyped'],
  decorators: [containBoxShadow],
  argTypes: {
    children: {
      control: 'select',
      options: ['(CheckboxFields)', '(CheckboxFields helperText)', '(i)'],
      mapping: {
        '(CheckboxFields)': (
          <>
            <CheckboxField label="Label one" value="value-1" />
            <CheckboxField label="Label two" value="value-2" />
            <CheckboxField label="Label three" value="value-3" />
            <CheckboxField label="Label four" value="value-4" disabled />
          </>
        ),
        '(CheckboxFields helperText)': (
          <>
            <CheckboxField
              helperText="Helper text one"
              label="Label one"
              value="value-1"
            />
            <CheckboxField
              FormHelperTextProps={{
                // @ts-expect-error component prop isn't recognized
                component: 'span',
              }}
              helperText={
                <ul>
                  <li>Helping line item one</li>
                  <li>Helping line item two</li>
                  <li>Helping line item three</li>
                </ul>
              }
              label="Label two"
              value="value-2"
            />
            <CheckboxField
              FormHelperTextProps={{
                // @ts-expect-error component prop isn't recognized
                component: 'span',
                leadingIcon: <Info />,
              }}
              helperText={
                <span>
                  More help:
                  <ol>
                    <li>Helping line item</li>
                    <li>Helping line item</li>
                    <li>Helping line item</li>
                  </ol>
                </span>
              }
              label="Label three"
              value="value-3"
            />
            <CheckboxField
              helperText="Helper text four"
              disabled
              label="Label four"
              value="value-4"
            />
          </>
        ),
      },
    },
  },
} as Meta;

const Template = (args) => <CheckboxGroupField {...args} />;

type Story = DefaultStory<CheckboxGroupFieldProps>;

export const LabelHelperText: Story = Template.bind({});
LabelHelperText.args = {
  children: '(CheckboxFields)',
  label: 'Label',
  helperText: 'Helper text',
};
LabelHelperText.storyName = 'children=(CheckboxFields) label helperText';

export const LabelHelperTextDisabled: Story = Template.bind({});
LabelHelperTextDisabled.args = {
  children: '(CheckboxFields)',
  label: 'Label',
  helperText: 'Helper text',
  disabled: true,
};
LabelHelperTextDisabled.storyName =
  'children=(CheckboxFields) label helperText disabled';

export const LabelHelperTextDisabledError: Story = Template.bind({});
LabelHelperTextDisabledError.args = {
  children: '(CheckboxFields)',
  label: 'Label',
  helperText: 'Helper text',
  disabled: true,
  error: true,
};
LabelHelperTextDisabledError.storyName =
  'children=(CheckboxFields) label helperText disabled error';

export const LabelHelperTextError: Story = Template.bind({});
LabelHelperTextError.args = {
  children: '(CheckboxFields)',
  label: 'Label',
  helperText: 'Helper text',
  error: true,
};
LabelHelperTextError.storyName =
  'children=(CheckboxFields) label helperText error';

export const LabelHelperTextFullWidth: Story = Template.bind({});
LabelHelperTextFullWidth.args = {
  children: '(CheckboxFields)',
  label: 'Label',
  helperText: 'Helper text',
  fullWidth: true,
};
LabelHelperTextFullWidth.storyName =
  'children=(CheckboxFields) label helperText fullWidth';

export const LabelHelperTextRequired: Story = Template.bind({});
LabelHelperTextRequired.args = {
  children: '(CheckboxFields)',
  label: 'Label',
  helperText: 'Helper text',
  required: true,
};
LabelHelperTextRequired.storyName =
  'children=(CheckboxFields) label helperText required';

export const LabelHelperTextRow: Story = Template.bind({});
LabelHelperTextRow.args = {
  children: '(CheckboxFields)',
  label: 'Label',
  helperText: 'Helper text',
  row: true,
};
LabelHelperTextRow.storyName = 'children=(CheckboxFields) label helperText row';

export const LabelHelperTextRowFullWidth: Story = Template.bind({});
LabelHelperTextRowFullWidth.args = {
  children: '(CheckboxFields)',
  label: 'Label',
  helperText: 'Helper text',
  row: true,
  fullWidth: true,
};
LabelHelperTextRowFullWidth.storyName =
  'children=(CheckboxFields) label helperText row fullWidth';

export const Children2LabelHelperText: Story = Template.bind({});
Children2LabelHelperText.args = {
  children: '(CheckboxFields helperText)',
  label: 'Label',
  helperText: 'Helper text',
};
Children2LabelHelperText.storyName =
  'children=(CheckboxFields helperText) label helperText';

const SideBySideTemplate = (args) => (
  <div style={{ display: 'flex' }}>
    <CheckboxGroupField {...args} />
    <CheckboxGroupField {...args} />
  </div>
);

export const SideBySide: Story = SideBySideTemplate.bind({});
SideBySide.args = {
  children: '(CheckboxFields)',
  label: 'Label',
  helperText: 'Helper text',
};
SideBySide.storyName = '(side by side)';