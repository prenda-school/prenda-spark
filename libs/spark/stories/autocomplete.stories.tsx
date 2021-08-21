import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import {
  Autocomplete,
  Checkbox,
  ListItemText,
  ListItemIcon,
  TextField,
  Tag,
} from '../src';
import { DocTemplate } from './documentation-template';
import { ChangelogTemplate } from './changelog-template';

export default {
  title: 'prenda-spark/Autocomplete',
  component: Autocomplete,
  argTypes: {},
  args: {},
} as Meta;

const reasons = [
  { value: '1', label: 'Label' },
  { value: '2', label: 'Label' },
  { value: '3', label: 'Label' },
  { value: '4', label: 'Customer service' },
  { value: '5', label: 'Label' },
  { value: '6', label: 'Too expensive' },
  { value: '7', label: 'Label' },
];

export const MultipleValuesCheckboxes = (args) => (
  <Autocomplete
    multiple
    options={reasons}
    disableCloseOnSelect
    disableClearable
    getOptionLabel={({ label }) => label}
    style={{ width: 320 }}
    renderOption={(
      { value, label }: { value: string; label: string },
      { selected }
    ) => (
      <>
        <ListItemIcon>
          <Checkbox
            tabIndex={-1}
            inputProps={{ 'aria-labelledby': `label-for-${value}` }}
            checked={selected}
          />
        </ListItemIcon>
        <ListItemText id={`label-for-${value}`} primary={label} />
      </>
    )}
    renderInput={(params) => (
      <TextField
        {...params}
        label="Reasons for leaving this microschool?"
        placeholder="Reason"
      />
    )}
    renderTags={(value, getTagProps) =>
      value.map(({ label }, index) => (
        <Tag label={label} {...getTagProps({ index })} />
      ))
    }
    {...args}
  />
);

const AutocompleteDocTemplate = (args) => <DocTemplate {...args} />;

export const Documentation: Story = AutocompleteDocTemplate.bind({});
Documentation.args = {
  underlyingComponent: {
    name: 'Autocomplete',
    href: 'https://material-ui.com/components/autocomplete',
  },
  props: {
    extends: {
      href: 'https://material-ui.com/api/autocomplete/#props',
    },
  },
  css: {
    extends: {
      href: 'https://material-ui.com/api/autocomplete/#css',
    },
  },
};

const AutocompleteChangelogTemplate = (args) => <ChangelogTemplate {...args} />;

export const Changelog: Story = AutocompleteChangelogTemplate.bind({});
Changelog.args = {
  history: [
    {
      version: 'vNext',
      versionDate: 'yyyy-mm-dd',
      changes: ['Initial styling implementation.'],
    },
  ],
};
