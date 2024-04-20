import styled from 'styled-components';
import { animated } from 'react-spring';

export const Container = styled.div`
display:flex;
justify-content:center;
align-items:center;
margin:20px;
`
// Outer circle styled component
export const OuterCircle= styled(animated.div)`
  width: 200px; 
  height: 200px; 
  border-radius: 50%; 
  background-color: #72549B; 
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Inner circle styled component
export const InnerCircle = styled.div`
  width: 130px; 
  height: 120px; 
  border-radius: 50%; 
  background-color: #E8EAEE; 
  display: flex;
  justify-content: center;
  align-items: center;
`;
