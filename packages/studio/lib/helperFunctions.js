/* eslint-disable import/prefer-default-export */
export const determineColor = (color = {}) => {
  const { rgb: { r, g, b, a } = {} } = color;

  return color?.rgb ? `rgba(${r}, ${g}, ${b}, ${a})` : null;
};
