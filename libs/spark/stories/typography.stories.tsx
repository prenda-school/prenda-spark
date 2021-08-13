import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Typography, TypographyProps, styled } from '../src';

export default {
  title: 'prenda-spark/Typography',
  component: Typography,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: [
          'inherit',
          'display-lg',
          'display-md',
          'display-sm',
          'heading-xl',
          'heading-lg',
          'heading-md',
          'heading-sm',
          'smallcaps-lg',
          'smallcaps-md',
          'smallcaps-sm',
          'label-xl',
          'label-lg',
          'label-md',
          'label-sm',
          'paragraph-xl',
          'paragraph-lg',
          'paragraph-md',
          'paragraph-sm',
          'code-lg',
          'code-md',
          'code-sm',
        ],
      },
    },
    color: {
      control: {
        type: 'select',
        options: [
          'initial',
          'inherit',
          'textOnDark',
          'textOnDarkLowContrast',
          'textOnLight',
          'textOnLightLowContrast',
          'tertiaryBlue2',
        ],
      },
    },
  },
  args: {
    variant: 'paragraph-lg',
    color: 'textOnLight',
  },
} as Meta;

type TextKey =
  | 'display'
  | 'heading'
  | 'smallcaps'
  | 'label'
  | 'paragraph'
  | 'code';

const text = {
  display: 'Empower learners everywhere',
  heading: 'Empower learners everywhere',
  smallcaps: 'Passion to learn',
  label: 'Label',
  paragraph:
    'When we allow students to own their education, connect them with quality learning tools, caring adults, and a community, their natural love of learning takes over and they become unstoppable.',
  code: `<script>
  let mystring = 'abc123';
</script>

<h1>This is {myString}</h1>`,
} as const;

/**
 * Utility to get suitable text string for configurable typography.
 * @param {Variant} variant
 * @returns {string}
 */
function getText(variant: string): string {
  return text[variant.split('-')[0] as TextKey] || text.paragraph;
}

const Template: Story<TypographyProps> = (args) => (
  <Typography {...args}>{getText(String(args.variant))}</Typography>
);
export const ConfigurableTypography = Template.bind({});

enum Bases {
  Display = 'Display',
  Heading = 'Heading',
  Smallcaps = 'Small caps',
  Labels = 'Labels',
  Paragraph = 'Paragraph',
  Code = 'Code',
}

enum Sizes {
  XXLarge = 'XXLarge',
  XLarge = 'XLarge',
  XLargeStrong = 'XLarge - Strong',
  Large = 'Large',
  LargeStrong = 'Large - Strong',
  Medium = 'Medium',
  MediumStrong = 'Medium - Strong',
  Small = 'Small',
  SmallStrong = 'Small - Strong',
}

enum Styles {
  Extrabold = 'ExtraBold',
  Bold = 'Bold',
  Semibold = 'Condensed/SemiBold',
  Medium = 'Medium',
  Regular = 'Regular',
}

type BaseInfo = Pick<TypographyProps, 'variant'> & {
  text: Sizes;
  values: string;
  style: Styles;
  isStrong?: boolean;
};

const baseMap = {
  [Bases.Display]: [
    {
      text: Sizes.Large,
      values: '64px/64px',
      style: Styles.Extrabold,
      variant: 'display-lg',
    } as BaseInfo,
    {
      text: Sizes.Medium,
      values: '56px/56px',
      style: Styles.Extrabold,
      variant: 'display-md',
    } as BaseInfo,
    {
      text: Sizes.Small,
      values: '48px/48px',
      style: Styles.Extrabold,
      variant: 'display-sm',
    } as BaseInfo,
  ],
  [Bases.Heading]: [
    {
      text: Sizes.XLarge,
      values: '34px/34px',
      style: Styles.Bold,
      variant: 'heading-xl',
    } as BaseInfo,
    {
      text: Sizes.Large,
      values: '28px/30px',
      style: Styles.Bold,
      variant: 'heading-lg',
    } as BaseInfo,
    {
      text: Sizes.Medium,
      values: '24px/26px',
      style: Styles.Bold,
      variant: 'heading-md',
    } as BaseInfo,
    {
      text: Sizes.Small,
      values: '20px/22px',
      style: Styles.Bold,
      variant: 'heading-sm',
    } as BaseInfo,
  ],
  [Bases.Smallcaps]: [
    {
      text: Sizes.Large,
      values: '16px/16px/10%',
      style: Styles.Extrabold,
      variant: 'smallcaps-lg',
    } as BaseInfo,
    {
      text: Sizes.Medium,
      values: '14px/14px/10%',
      style: Styles.Extrabold,
      variant: 'smallcaps-md',
    } as BaseInfo,
    {
      text: Sizes.Small,
      values: '12px/12px/10%',
      style: Styles.Extrabold,
      variant: 'smallcaps-sm',
    } as BaseInfo,
  ],
  [Bases.Labels]: [
    {
      text: Sizes.XLarge,
      values: '18px/24px',
      style: Styles.Semibold,
      variant: 'label-xl',
    } as BaseInfo,
    {
      text: Sizes.XLargeStrong,
      values: '18px/24px',
      style: Styles.Medium,
      variant: 'label-xl',
      isStrong: true,
    } as BaseInfo,
    {
      text: Sizes.Large,
      values: '16px/24px',
      style: Styles.Semibold,
      variant: 'label-lg',
    } as BaseInfo,
    {
      text: Sizes.LargeStrong,
      values: '16px/24px',
      style: Styles.Medium,
      variant: 'label-lg',
      isStrong: true,
    } as BaseInfo,
    {
      text: Sizes.Medium,
      values: '14px/20px',
      style: Styles.Semibold,
      variant: 'label-md',
    } as BaseInfo,
    {
      text: Sizes.MediumStrong,
      values: '14px/20px',
      style: Styles.Medium,
      variant: 'label-md',
      isStrong: true,
    } as BaseInfo,
    {
      text: Sizes.Small,
      values: '12px/20px',
      style: Styles.Semibold,
      variant: 'label-sm',
    } as BaseInfo,
    {
      text: Sizes.SmallStrong,
      values: '12px/20px',
      style: Styles.Medium,
      variant: 'label-sm',
      isStrong: true,
    } as BaseInfo,
  ],
  [Bases.Paragraph]: [
    {
      text: Sizes.XLarge,
      values: '18px/28px',
      style: Styles.Regular,
      variant: 'paragraph-xl',
    } as BaseInfo,
    {
      text: Sizes.Large,
      values: '16px/24px',
      style: Styles.Regular,
      variant: 'paragraph-lg',
    } as BaseInfo,
    {
      text: Sizes.Medium,
      values: '14px/20px',
      style: Styles.Regular,
      variant: 'paragraph-md',
    } as BaseInfo,
    {
      text: Sizes.Small,
      values: '12px/18px',
      style: Styles.Regular,
      variant: 'paragraph-sm',
    } as BaseInfo,
  ],
  [Bases.Code]: [
    {
      text: Sizes.Large,
      values: '18px/28px',
      style: Styles.Regular,
      variant: 'code-lg',
    } as BaseInfo,
    {
      text: Sizes.Medium,
      values: '16px/24px',
      style: Styles.Regular,
      variant: 'code-md',
    } as BaseInfo,
    {
      text: Sizes.Small,
      values: '14px/20px',
      style: Styles.Regular,
      variant: 'code-sm',
    } as BaseInfo,
  ],
};

type TypogPageProps = {
  variantBase: Bases;
};

const SizeSection = styled('div')({
  margin: '2.5rem 0',
  display: 'grid',
  gridTemplateColumns: '11rem 1.5rem auto',
  gridTemplateRows: '1.5rem auto',

  '& .pos-1': {
    gridColumn: 1,
    gridRow: 1,
  },

  '& .pos-2': {
    gridColumn: 1,
    gridRow: 2,
    paddingTop: '0.5rem',
  },

  '& .pos-3': {
    gridColumn: 3,
    gridRow: '1 / span 2',
  },
});

const TypogPage = ({ variantBase }: TypogPageProps) => {
  return (
    <div>
      <Typography variant="heading-lg">{variantBase}</Typography>
      <hr />
      {baseMap[variantBase].map(
        ({ text, values, style, variant, isStrong }: BaseInfo) => (
          <SizeSection key={text}>
            <Typography
              variant="heading-sm"
              color="tertiaryBlue2"
              className="pos-1"
            >
              {text}
            </Typography>

            <Typography
              variant="paragraph-md"
              color="tertiaryBlue2"
              className="pos-2"
            >
              {values}
              <br />
              {style}
            </Typography>

            <Typography variant={variant} className="pos-3">
              {isStrong ? (
                <strong>{getText(variant)}</strong>
              ) : (
                getText(variant)
              )}
            </Typography>
          </SizeSection>
        )
      )}
    </div>
  );
};

export const Overview = () => (
  <div>
    <TypogPage variantBase={Bases.Display} />
    <TypogPage variantBase={Bases.Heading} />
    <TypogPage variantBase={Bases.Smallcaps} />
    <TypogPage variantBase={Bases.Labels} />
    <TypogPage variantBase={Bases.Paragraph} />
    <TypogPage variantBase={Bases.Code} />
  </div>
);
