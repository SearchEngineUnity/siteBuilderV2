export const determineColor = (color = {}) => {
  const { rgb: { r, g, b, a } = {} } = color;

  return color?.rgb ? `rgba(${r}, ${g}, ${b}, ${a})` : null;
};

export const lrColCalculator = (value) => {
  switch (value) {
    case 9:
      return {
        xs: 12,
        sm: 6,
        md: 9,
      };
    case 8:
      return {
        xs: 12,
        sm: 6,
        md: 8,
      };
    case 7:
      return {
        xs: 12,
        sm: 6,
        md: 7,
      };
    case 6:
      return {
        xs: 12,
        sm: 6,
        md: 6,
      };
    case 5:
      return {
        xs: 12,
        sm: 6,
        md: 5,
      };
    case 4:
      return {
        xs: 12,
        sm: 6,
        md: 4,
      };
    case 3:
      return {
        xs: 12,
        sm: 6,
        md: 3,
      };
    default:
      console.log('calculator missing');
      return null;
  }
};

export const stackColCalculator = (value) => {
  switch (value) {
    case 12:
      return {
        xs: 12,
      };
    case 10:
      return {
        xs: 12,
        md: 10,
      };
    case 9:
      return {
        xs: 12,
        md: 9,
      };
    case 8:
      return {
        xs: 12,
        md: 8,
      };
    case 7:
      return {
        xs: 12,
        md: 7,
      };
    case 6:
      return {
        xs: 12,
        md: 6,
      };
    case 5:
      return {
        xs: 12,
        md: 5,
      };
    case 4:
      return {
        xs: 12,
        md: 4,
      };
    case 3:
      return {
        xs: 12,
        md: 3,
      };
    case 2:
      return {
        xs: 12,
        md: 2,
      };
    default:
      console.log('calculator missing');
      return null;
  }
};
