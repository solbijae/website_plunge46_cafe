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
    gray_5: '#F6F6F6',
    white: '#FFFFFF',
    black: '#000000',
    darkBlack: '#292929',
    primaryColor: 'black',
    // backGroundColor: '#FBF5E6',
    // backGroundColor2: '#fdfdf7',
    backGroundColor: '#fff',
    backGroundColor2: '#fff',
    cardColor: '#f7f1de',
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
    desktop_title_h2: typoCreator('8.86rem', 900, '0', '1'),
    desktop_title_h3: typoCreator('3rem', 700, '0', '1'),
    desktop_body_20_M: typoCreator('1.25rem', 600, '0', '27px'),
    desktop_body_18_R: typoCreator('1.125rem', 400, '-0.192px', '24px'),
    desktop_body_16_R: typoCreator('1rem', 400, '-0.192px', '23px'),
    desktop_footer_12_M: typoCreator('0.75rem', 600, '0.24px', '20px'),
  },
};

export type TColor = keyof (typeof ThemeConfig)['colors'];
