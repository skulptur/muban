import { Circ } from 'gsap';
// import { Key } from 'ts-key-enum';

export const defaultSelectMultiple = false;

export const selectExpandDuration = 0.4;
export const selectExpandEase = Circ.easeInOut;
// export const selectKeyboardNavigation = [Key.ArrowUp, Key.ArrowDown];
export const selectOverflowBuffer = 4;

export const selectOptionExtractConfig = {
  list: true,
  query: '.select-option',
  data: {
    value: {
      query: 'button',
      attr: 'value',
    },
    selected: {
      query: 'button',
      attr: 'aria-selected',
      convert: 'boolean',
    },
    label: {
      query: '.button-label',
      html: true,
    },
  },
};