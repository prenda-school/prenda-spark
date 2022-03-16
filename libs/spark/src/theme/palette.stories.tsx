import * as React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { styled, useTheme } from '..';

interface ColorBoxProps {
  color: string;
  colorLabel: string;
  textColor: string;
}

function ColorBox(props: ColorBoxProps) {
  return (
    <div
      style={{
        color: props.textColor,
        backgroundColor: props.color,
        width: '22em',
        height: '6em',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'row',
        paddingTop: '5px',
        fontSize: '0.80em',
        margin: '1px',
        wordWrap: 'break-word',
      }}
    >
      <div>
        <div>{props.colorLabel}</div>
        <div>{props.color}</div>
      </div>
    </div>
  );
}

export default {
  title: '@ps/theme/palette',
  component: ColorBox,
} as Meta;

export const PrendaColors: Story = () => {
  const theme = useTheme();

  return (
    <>
      <ColorContainerTitle>Prenda colors</ColorContainerTitle>
      <ColorContainer>
        <RowContainer>
          <ColorBox
            color={theme.palette.brand.blue}
            textColor={theme.palette.text.light}
            colorLabel="theme.palette.brand.blue"
          />
          <ColorBox
            color={theme.palette.brand.lightBlue}
            textColor={theme.palette.text.dark}
            colorLabel="theme.palette.brand.lightBlue"
          />
          <ColorBox
            color={theme.palette.brand.orange}
            textColor={theme.palette.text.light}
            colorLabel="theme.palette.brand.orange"
          />
          <ColorBox
            color={theme.palette.brand.peach}
            textColor={theme.palette.text.dark}
            colorLabel="theme.palette.brand.peach"
          />
        </RowContainer>
      </ColorContainer>
      <ColorContainer>
        <RowContainer>
          <ColorBox
            color={theme.palette.blue[5]}
            textColor={theme.palette.text.light}
            colorLabel="theme.palette.blue[5]"
          />
          <ColorBox
            color={theme.palette.grey.dark}
            textColor={theme.palette.text.dark}
            colorLabel="theme.palette.grey.dark"
          />
          <ColorBox
            color={theme.palette.grey.medium}
            textColor={theme.palette.text.dark}
            colorLabel="theme.palette.grey.medium"
          />
          <ColorBox
            color={theme.palette.grey.light}
            textColor={theme.palette.text.dark}
            colorLabel="theme.palette.grey.light"
          />
          <ColorBox
            color={theme.palette.grey.lighter}
            textColor={theme.palette.text.dark}
            colorLabel="theme.palette.grey.lighter"
          />
          <ColorBox
            color={theme.palette.common.white}
            textColor={theme.palette.text.dark}
            colorLabel="theme.palette.common.white"
          />
        </RowContainer>
      </ColorContainer>

      <ColorContainerTitle>Background colors</ColorContainerTitle>
      <ColorContainer>
        <RowContainer>
          <ColorBox
            color={theme.palette.background.navy}
            textColor={theme.palette.text.light}
            colorLabel="theme.palette.background.navy"
          />
          <ColorBox
            color={theme.palette.background.navy}
            textColor={theme.palette.text.lightLowContrast}
            colorLabel="theme.palette.background.navy"
          />
          <ColorBox
            color={theme.palette.background.blue}
            textColor={theme.palette.text.light}
            colorLabel="theme.palette.background.blue"
          />
          <ColorBox
            color={theme.palette.background.blue}
            textColor={theme.palette.text.lightLowContrast}
            colorLabel="theme.palette.background.blue"
          />
        </RowContainer>
      </ColorContainer>
      <ColorContainer>
        <RowContainer>
          <ColorBox
            color={theme.palette.background.lightGrey}
            textColor={theme.palette.text.dark}
            colorLabel="theme.palette.background.lightGrey"
          />
          <ColorBox
            color={theme.palette.background.lightGrey}
            textColor={theme.palette.text.darkLowContrast}
            colorLabel="theme.palette.background.lightGrey"
          />
          <ColorBox
            color={theme.palette.common.white}
            textColor={theme.palette.text.dark}
            colorLabel="theme.palette.common.white"
          />
          <ColorBox
            color={theme.palette.common.white}
            textColor={theme.palette.text.darkLowContrast}
            colorLabel="theme.palette.common.white"
          />
          <ColorBox
            color={theme.palette.background.lightBlue}
            textColor={theme.palette.text.dark}
            colorLabel="theme.palette.background.lightBlue"
          />
          <ColorBox
            color={theme.palette.background.lightBlue}
            textColor={theme.palette.text.darkLowContrast}
            colorLabel="theme.palette.background.lightBlue"
          />
        </RowContainer>
      </ColorContainer>

      <ColorContainerTitle>Product colors</ColorContainerTitle>
      <ColorContainer>
        <ColorBox
          color={theme.palette.info.main}
          textColor={theme.palette.text.light}
          colorLabel="theme.palette.info.main"
        />
        <ColorBox
          color={theme.palette.success.main}
          textColor={theme.palette.text.light}
          colorLabel="theme.palette.success.main"
        />
        <ColorBox
          color={theme.palette.warning.main}
          textColor={theme.palette.text.dark}
          colorLabel="theme.palette.warning.main"
        />
        <ColorBox
          color={theme.palette.error.main}
          textColor={theme.palette.text.light}
          colorLabel="theme.palette.error.main"
        />
      </ColorContainer>

      <ColorContainerTitle>Full palette</ColorContainerTitle>
      <ColorContainer>
        <div>
          <ColorBox
            color={theme.palette.red[1]}
            textColor={theme.palette.text.dark}
            colorLabel="theme.palette.red[1]"
          />
          <ColorBox
            color={theme.palette.red[2]}
            textColor={theme.palette.text.light}
            colorLabel="theme.palette.red[2]"
          />
          <ColorBox
            color={theme.palette.red[3]}
            textColor={theme.palette.text.light}
            colorLabel="theme.palette.red[3]"
          />
          <ColorBox
            color={theme.palette.red[4]}
            textColor={theme.palette.text.light}
            colorLabel="theme.palette.red[4]"
          />
          <ColorBox
            color={theme.palette.red[5]}
            textColor={theme.palette.text.light}
            colorLabel="theme.palette.red[5]"
          />
        </div>
        <div>
          <ColorBox
            color={theme.palette.orange[1]}
            textColor={theme.palette.text.dark}
            colorLabel="theme.palette.orange[1]"
          />
          <ColorBox
            color={theme.palette.orange[2]}
            textColor={theme.palette.text.dark}
            colorLabel="theme.palette.orange[2]"
          />
          <ColorBox
            color={theme.palette.orange[3]}
            textColor={theme.palette.text.dark}
            colorLabel="theme.palette.orange[3]"
          />
          <ColorBox
            color={theme.palette.orange[4]}
            textColor={theme.palette.text.light}
            colorLabel="theme.palette.orange[4]"
          />
          <ColorBox
            color={theme.palette.orange[5]}
            textColor={theme.palette.text.light}
            colorLabel="theme.palette.orange[5]"
          />
        </div>
        <div>
          <ColorBox
            color={theme.palette.yellow[1]}
            textColor={theme.palette.text.dark}
            colorLabel="theme.palette.yellow[1]"
          />
          <ColorBox
            color={theme.palette.yellow[2]}
            textColor={theme.palette.text.dark}
            colorLabel="theme.palette.yellow[2]"
          />
          <ColorBox
            color={theme.palette.yellow[3]}
            textColor={theme.palette.text.dark}
            colorLabel="theme.palette.yellow[3]"
          />
          <ColorBox
            color={theme.palette.yellow[4]}
            textColor={theme.palette.text.light}
            colorLabel="theme.palette.yellow[4]"
          />
          <ColorBox
            color={theme.palette.yellow[5]}
            textColor={theme.palette.text.light}
            colorLabel="theme.palette.yellow[5]"
          />
        </div>
        <div>
          <ColorBox
            color={theme.palette.green[1]}
            textColor={theme.palette.text.dark}
            colorLabel="theme.palette.green[1]"
          />
          <ColorBox
            color={theme.palette.green[2]}
            textColor={theme.palette.text.dark}
            colorLabel="theme.palette.green[2]"
          />
          <ColorBox
            color={theme.palette.green[3]}
            textColor={theme.palette.text.light}
            colorLabel="theme.palette.green[3]"
          />
          <ColorBox
            color={theme.palette.green[4]}
            textColor={theme.palette.text.light}
            colorLabel="theme.palette.green[4]"
          />
          <ColorBox
            color={theme.palette.green[5]}
            textColor={theme.palette.text.light}
            colorLabel="theme.palette.green[5]"
          />
        </div>
        <div>
          <ColorBox
            color={theme.palette.blue[1]}
            textColor={theme.palette.text.dark}
            colorLabel="theme.palette.blue[1]"
          />
          <ColorBox
            color={theme.palette.blue[2]}
            textColor={theme.palette.text.dark}
            colorLabel="theme.palette.blue[2]"
          />
          <ColorBox
            color={theme.palette.blue[3]}
            textColor={theme.palette.text.light}
            colorLabel="theme.palette.blue[3]"
          />
          <ColorBox
            color={theme.palette.blue[4]}
            textColor={theme.palette.text.light}
            colorLabel="theme.palette.blue[4]"
          />
          <ColorBox
            color={theme.palette.blue[5]}
            textColor={theme.palette.text.light}
            colorLabel="theme.palette.blue[5]"
          />
        </div>
        <div>
          <ColorBox
            color={theme.palette.purple[1]}
            textColor={theme.palette.text.dark}
            colorLabel="theme.palette.purple[1]"
          />
          <ColorBox
            color={theme.palette.purple[2]}
            textColor={theme.palette.text.light}
            colorLabel="theme.palette.purple[2]"
          />
          <ColorBox
            color={theme.palette.purple[3]}
            textColor={theme.palette.text.light}
            colorLabel="theme.palette.purple[3]"
          />
          <ColorBox
            color={theme.palette.purple[4]}
            textColor={theme.palette.text.light}
            colorLabel="theme.palette.purple[4]"
          />
          <ColorBox
            color={theme.palette.purple[5]}
            textColor={theme.palette.text.light}
            colorLabel="theme.palette.purple[5]"
          />
        </div>
      </ColorContainer>
    </>
  );
};

const RowContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
});

const ColorContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  fontWeight: 400,
});

const ColorContainerTitle = styled('div')({
  fontWeight: 600,
  fontSize: 24,
  paddingBottom: 8,
  paddingLeft: 5,
});