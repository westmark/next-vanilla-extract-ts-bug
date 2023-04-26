import { style } from '@vanilla-extract/css';
import { sprinkles } from '../../styling';

const container = style({
  boxShadow: '0.1rem 0 0.4rem 0.1rem rgba(0, 0, 0, 0.3)',
  display: 'grid',
  gridTemplateRows: '[heading] auto [content] 1fr',
  minWidth: '5rem',
  minHeight: '5rem',
});

export const cardWrapper = style([
  container,
  sprinkles({
    background: 'primary',
    color: 'primary',
    padding: 'large',
  }),
]);
