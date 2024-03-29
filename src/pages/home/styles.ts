import styled from 'styled-components';

export const HomeContainer = styled.main`
  width: 100%;
  max-height: 80%;
  margin: 0 auto;
  margin-top: 120px;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Title = styled.h2`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  width: 320px;
  margin-bottom: 20px;
  line-height: 44px;

  color: #ffffff;
`;

export const TitleHighLight = styled.span`
  color: #e4105d;
`;

export const TextContent = styled.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  width: 420px;
  margin-bottom: 20px;
  line-height: 22px;

  color: #ffffff;
`;
