import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Card, CardContent, CardMedia, CardActions } from '@material-ui/core';
import { Typography } from '../src/Typography';
import { Button } from '../src/Button';
import { IconButton } from '@material-ui/core';
import { HeartIconDuotone } from '../src/icons';
import styled from 'styled-components';

export default {
  title: 'prenda-spark/Card',
  component: Card,
  argTypes: {},
  args: {},
} as Meta;

export const BasicCard = () => (
  <Card style={{ maxWidth: 400 }}>
    <CardContent>
      <Typography
        variant="heading-md"
        color="textOnLight"
        style={{ marginBottom: '1rem' }}
      >
        Heading
      </Typography>
      <Typography variant="paragraph-xl" color="textOnLight">
        This is a sample catalog of all the courses we offer. Browse by topic or
        difficulty. Sign up today and get access to our entire library. This is
        a sample catalog of all the courses we offer.
      </Typography>
    </CardContent>
    <CardActions>
      <Button variant="outlined" size="large">
        Action
      </Button>
    </CardActions>
  </Card>
);

const StyledImage = styled.img`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  object-position: 50% 10%;
  vertical-align: bottom;
`;

const FloatingIconButton = styled(IconButton)`
  position: absolute;
  right: 24px;
  top: 24px;
`;

export const CardWithImage = () => (
  <Card style={{ maxWidth: 580 }}>
    <CardMedia style={{ position: 'relative' }}>
      <StyledImage
        src="/img/multicolor-blobs.jpg"
        alt="Multicolor blobs, blurred on light grey background"
      />
      <FloatingIconButton className="variantSecondary" size="medium">
        <HeartIconDuotone />
      </FloatingIconButton>
    </CardMedia>
    <CardContent>
      <Typography
        variant="heading-md"
        color="textOnLight"
        style={{ marginBottom: '1rem' }}
      >
        Title
      </Typography>
      <Typography variant="paragraph-xl" color="textOnLightLowContrast">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis turpis
        interdum hendrerit massa imperdiet.
      </Typography>
    </CardContent>
  </Card>
);
