import type {
  TypographyUtils,
  TypographyStyle,
  TypographyStyleOptions,
  FontStyleOptions,
} from '@material-ui/core/styles/createTypography';
import { buildVariant } from './typography';

export type Unstable_TypographyVariant =
  | 'display'
  | 'T32'
  | 'T28'
  | 'T22'
  | 'T18'
  | 'T14'
  | 'body'
  | 'label'
  | 'description'
  | 'code';

export interface Unstable_TypographyOptions
  extends TypographyUtils,
    Partial<
      Record<Unstable_TypographyVariant, TypographyStyleOptions> &
        FontStyleOptions
    > {}

const codeFontFamily = '"Roboto Mono", monospace';
const defaultFontFamily = '"Inter", sans-serif';
const headingFontFamily = '"Poppins", sans-serif';
const defaultFontSize = 16;
const pxToRem = (px: number) => `${px / defaultFontSize}rem`;

const customVariants: Record<Unstable_TypographyVariant, TypographyStyle> = {
  display: buildVariant(800, 48, 52, -0.01, undefined, headingFontFamily),
  T32: buildVariant(700, 32, 40, -0.01, undefined, headingFontFamily),
  T28: buildVariant(700, 28, 36, -0.01, undefined, headingFontFamily),
  T22: buildVariant(600, 22, 28, -0.01, undefined, headingFontFamily),
  T18: buildVariant(600, 18, 28, -0.01, undefined, headingFontFamily),
  T14: buildVariant(800, 14, 20, 0.04, 'uppercase', headingFontFamily),
  body: buildVariant(
    400,
    16,
    24,
    undefined,
    undefined,
    defaultFontFamily,
    "'cv05' 1, 'ss03' 1"
  ),
  label: buildVariant(
    600,
    16,
    20,
    undefined,
    undefined,
    defaultFontFamily,
    "'cv05' 1, 'ss03' 1"
  ),
  description: buildVariant(
    400,
    14,
    20,
    undefined,
    undefined,
    defaultFontFamily,
    "'cv05' 1, 'ss03' 1"
  ),
  code: buildVariant(400, 14, 24, undefined, undefined, codeFontFamily),
};

const unstable_typography: Unstable_TypographyOptions = {
  // override default Roboto
  fontFamily: defaultFontFamily,
  // override default 14px
  fontSize: defaultFontSize,
  // override default division by 14
  pxToRem,
  // :unstable_: uncomment once merged
  // specify all mui defaults (some Mui components rely on these by default)
  // h1: customVariants['T28'],
  // h2: customVariants['T22'],
  // h3: customVariants['T22'],
  // h4: customVariants['T22'],
  // h5: customVariants['T18'],
  // h6: customVariants['T18'],
  // subtitle1: customVariants['description'],
  // subtitle2: customVariants['description'],
  // body1: customVariants['body'],
  // body2: customVariants['body'],
  // override default text transform
  // button: { ...customVariants['body'], textTransform: 'none' },
  // caption: customVariants['description'],
  // overline: customVariants['T14'],
  ...customVariants,
};

export default unstable_typography;
