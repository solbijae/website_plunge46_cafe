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
    primaryColor: '#F16446',
    backGroundColor: '#FBF5E6',
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
    title1_24_B: typoCreator('1.5rem', 700, '-1.2%', '32px'),
    title1_24_R: typoCreator('1.5rem', 400, '-1.2px', '26px'),
    title2_20_B: typoCreator('1.25rem', 700, '-0.24px', '28px'),
    title2_20_R: typoCreator('1.25rem', 400, '-1.2px', '26px'),
    title3_28_B: typoCreator('1.75rem', 700, '0px', '40px'),
    body1_18_B: typoCreator('1.125rem', 700, '0px', '27px'),
    body1_18_R: typoCreator('1.125rem', 400, '-1.2px', '26px'),
    body2_16_B: typoCreator('1rem', 700, '-1.2px', '23px'),
    body2_16_R: typoCreator('1rem', 400, '-0.192px', '23px'),
    label1_16_B: typoCreator('1rem', 700, '-0.192px', '24px'),
    label1_16_M: typoCreator('1rem', 500, '-1.2px', '24px'),
    label1_16_R: typoCreator('1rem', 400, '-0.192px', '24px'),
    label2_14_B: typoCreator('0.875rem', 700, '0.28px', '20px'),
    label2_14_M: typoCreator('0.875rem', 500, '0.28px', '25px'),
    label2_14_R: typoCreator('0.875rem', 400, '0.28px', '20px'),
    caption1_12_R: typoCreator('0.75rem', 400, '-0.12px', '17.5px'),
    caption1_12_B: typoCreator('0.75rem', 700, '0.24px', '20px'),
  },
};

export type TColor = keyof (typeof ThemeConfig)['colors'];
