import styled from 'styled-components';

export const CadastroContainer = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 120px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  // align-items: center;
`;

export const Wrapper = styled.div`
  max-width: 100%;
`;

export const Column = styled.div`
  flex: ${({ flex }) => flex};
  padding-right: 24px;
`;

export const Title = styled.h2`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;

  max-width: 90%;
  margin-bottom: 20px;
  line-height: 44px;

  color: #ffffff;
`;

export const TitleCadastro = styled.h2`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;

  max-width: 90%;
  margin-bottom: 8px;
  line-height: 44px;

  color: #ffffff;
`;

export const SubtitleCadastro = styled.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  margin-bottom: 20px;
`;

export const PoliticasText = styled.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  margin: 20px auto;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const ContaText = styled.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  margin-right: 8px;
`;

export const FazerLoginText = styled.a`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  padding-left: 10px;

  text-decoration: none;
  color: #23dd7a;
`;
