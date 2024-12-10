import { css } from 'styled-components';

const typoCreator = (
  fontSize: string,
  fontWeight: number,
  letterSpacing: string,
  lineHeight: string,
) => {
  return css`
    font-size: ${fontSize};
    font-weight: ${fontWeight};
    letter-spacing: ${letterSpacing};
    line-height: ${lineHeight};
  `;
};

export const ThemeConfig = {
  colors: {
    gray_1: '#525252',
    gray_2: '#858585',
    gray_3: '#B5B5B5',
    gray_4: '#E9E9E9',
    white: '#FFFFFF',
    black: '#000000',
    darkBlack: '#292929',
    primaryColor: '#000000',
    backGroundColor: '#fff',
    backGroundColor2: '#D8DACF',
  },

  shadows: {
    upper: '0px 5px 10px rgba(0, 0, 0, 0.04)',
    card: '0px 8px 15px  0px rgba(0, 0, 0, 0.04)',
    smallMenu: '-2px 8px 30px 45px rgba(0, 0, 0, 0.35)',
    alertCard: '0px 8px 15px 10px rgba(156, 155, 155, 0.07)',
    overlap: '-4px 0px 12px rgba(0,0,0,0.35)',
    input: '0px -5px 10px rgba(0,0,0,0.04)',
    bottomTab: '0px -17px 39px -15px rgba(167,167,167,0.15)',
    dogCard: '0px 2px 7px 0px rgba(0, 0, 0, 0.04);',
  },

  typo: {
    desktop_title_h2: typoCreator('8.67rem', 900, '0', '1'),
    desktop_title_h3: typoCreator('3rem', 700, '0', '1'),
    desktop_body_24_M: typoCreator('1.15rem', 500, '0', '27px'),
    desktop_body_18_M: typoCreator('1.125rem', 500, '0', '27px'),
    desktop_body_18_R: typoCreator('1.125rem', 400, '-0.192px', '24px'),
    desktop_body_14_R: typoCreator('0.875rem', 400, '-0.192px', '23px'),
    desktop_body_12_M: typoCreator('0.75rem', 500, '0.24px', '20px'),

    tablet_title_h2: typoCreator('5rem', 900, '0', '1'),
    tablet_title_h3: typoCreator('2rem', 700, '0', '1'),
    tablet_body_24_M: typoCreator('0.85rem', 700, '0', '27px'),
    tablet_body_20_M: typoCreator('0.8rem', 500, '0', '27px'),
    tablet_body_18_R: typoCreator('0.8rem', 400, '0', '24px'),
    tablet_body_14_R: typoCreator('0.875rem', 400, '-0.192px', '23px'),
    tablet_body_12_M: typoCreator('0.65rem', 500, '0.24px', '20px'),

    mobile_title_h2: typoCreator('2.5rem', 900, '0', '1'),
    mobile_title_h3: typoCreator('2rem', 700, '0', '1'),
    mobile_body_24_M: typoCreator('1rem', 700, '0', '27px'),
    mobile_body_20_M: typoCreator('0.75rem', 500, '0', '27px'),
    mobile_body_18_R: typoCreator('0.65rem', 400, '0', '24px'),
    mobile_body_14_R: typoCreator('0.875rem', 400, '-0.192px', '23px'),
    mobile_body_12_M: typoCreator('0.65rem', 500, '0.24px', '20px'),
  },
};

export type TColor = keyof (typeof ThemeConfig)['colors'];
