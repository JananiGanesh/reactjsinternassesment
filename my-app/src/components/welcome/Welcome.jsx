import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { OuterCircle, Container } from './welcome.styles';

const StyledInnerCircle = styled.circle`
  fill: #E8EAEE;
`;

const Welcome = () => {
  const outerCircleRadius = 100; // Radius of the outer circle
  const innerCircleRadius = outerCircleRadius * (1.19 / 2); // Radius of the inner circle (3/4 of outer circle radius)

  return (
    <Container>
      <OuterCircle>
        <svg width="200" height="200" viewBox="0 0 200 200">
          <motion.circle
            cx="100"
            cy="100"
            r={outerCircleRadius} // Radius of the outer circle
            fill="none"
            strokeWidth="2" // Set the stroke width to make the circle visible
            strokeDasharray={outerCircleRadius * Math.PI * 2} // Set the stroke-dasharray to the circumference of the circle for animation
            strokeDashoffset={outerCircleRadius * Math.PI * 2} // Set the initial stroke-dashoffset to animate the stroke from the beginning
            animate={{
              fill: ['#72549B', '#8260AF', '#71539A', '#72549B', '#7659A0', '#8260AF', '#72549B', '#714AA5', '#72549B', '#805AB3', '#72549B', '#72549B', '#71539A', '#72549B', '#7659A0'], // Colors in clockwise direction
              opacity: [1, 0.5, 0.7, 0.5, 0.3, , 0.2, 0.5, 0.7, 1, 0.7, 0.5, 1, 0.7, 0.5, 0.3], // Adjusted opacity for each color
              stroke: ['#72549B', '#FFFFFF', '#72549B'], // Animating stroke color from purple to white and back
              strokeDashoffset: [0, outerCircleRadius * Math.PI * 2, 0], // Animate the stroke dash offset to create the effect of the stroke animating around the circle
              transition: { duration: 1, repeat: Infinity, ease: 'linear' } // Set duration to 1 second, linear easing, and repeat infinitely
            }}
          />
          <StyledInnerCircle
            cx="100"
            cy="100"
            r={innerCircleRadius} // Radius of the inner circle
          />
          <text x="100" y="105" textAnchor="middle" dominantBaseline="middle" fill="#000000" fontsize='150px' fontWeight="900">
            Welcome!!
          </text>
        </svg>
      </OuterCircle>
    </Container>
  );
};

export default Welcome;

