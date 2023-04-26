import React from 'react';
import type { FunctionComponent } from 'react';
import { Box } from '../box';
import { cardWrapper } from './Card.css';
import clsx from 'clsx';

interface CardProps {
  className?: string;
}

export const Card: FunctionComponent<React.PropsWithChildren<CardProps>> = ({
  children,
  className,
}) => {
  return <Box className={clsx(className, cardWrapper)}>{children}</Box>;
};
