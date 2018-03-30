import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

import * as Text from 'assets/themes/text';

const Collapsable = styled.div`width: 100%;`;

Collapsable.container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

Collapsable.toggleButton = styled(FontAwesome)`
  ${Text.REGULAR_BODY};
  align-items: center;
  cursor: pointer;
  display: flex;
  height: 30px;
  justify-content: center;
  width: 45px;
`;

export default Collapsable;
