import styled from 'styled-components/macro';

const MaxWidthWrapper = styled.div`
  position: relative;
  max-width: min(100%, calc(1200px + 16px * 2));
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;
`;

export default MaxWidthWrapper;
