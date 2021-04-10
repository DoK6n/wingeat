const size = {
  mobileMax: '480px', // 320-480
  tabletMin: '480px', // 320-480
  tabletMax: '968px', // 320-480
  pc: '1024px',
};

const theme = {
  mobile: `(max-width: ${size.mobileMax})`,
  tablet: `(min-width: ${size.tabletMin}) and (max-width: ${size.tabletMax})`,
  pc: `(min-width: ${size.pc})`,
};

export default theme;