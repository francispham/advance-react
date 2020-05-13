export const absolute = ({
  y = 'top',
  x = 'left'
}) => `
  position: absolute;
  ${y}: 0;
  ${x}: 0;
`;

export const fixed = ({ y = "top", x = "left", b = "bottom", r = "right" }) => `
  position: fixed;
  z-index: 1;
  ${y}: 0;
  ${x}: 0;
  ${b}: 0;
  ${r}: 0;
`;