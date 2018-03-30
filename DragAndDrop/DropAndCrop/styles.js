import styled from 'styled-components';
import { COLOR_PALETTE, PADDING } from 'constants/styles';

export const ModalContent = styled.div`
  background-color: ${COLOR_PALETTE.LIGHT_GREY};
  height: 75%;
  width: 75%;
`;

export const DropLocationContainer = styled.div`
  margin: 0 auto 35px auto;
  color: black;
  border: 2px dashed ${COLOR_PALETTE.BORDER_STROKE};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 175px;
  padding: ${PADDING.HALF};
`;

export const Image = styled.img`
  height: ${props => props.styles.height || '150px'};
  width: ${props => props.styles.width || '150px'};
  border-radius: ${props => props.styles.borderRadius || '0'};
`;
