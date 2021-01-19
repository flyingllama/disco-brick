import React from 'react';
import styled from 'styled-components';

import { SequenceListItem } from './sequenceListItem.component';

const Wrapper = styled.ul`
  display: flex;
  flex-flow: row wrap;
`;

export const SequenceList = () => {
  const sequenceListItems = [];

  for (let i = 0; i < 16; i += 1) sequenceListItems.push(<SequenceListItem key="`sequence-item-{i}`" />);

  return <Wrapper>{sequenceListItems}</Wrapper>;
};
