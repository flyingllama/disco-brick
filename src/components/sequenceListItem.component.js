import { React } from 'react';
import styled from 'styled-components';

const Wrapper = styled.li`
  display: flex;
  height: 50px;
  width: 50px;
  border: 1px solid black;
  border-radius: 5px;
  margin: 5px;
`;

export const SequenceListItem = () => <Wrapper />;
