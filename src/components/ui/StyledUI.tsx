import styled from "styled-components";
import { motion } from "framer-motion";

// Animated heading for displaying count
export const HeadingText = styled(motion.h1)`
  width: 100%;
  margin: 0;
  font-size: 2rem;
  text-align: center;
  padding: 10px 5px;
`;

export const ParaText = styled(motion.p)`
  width: fit-content;
  max-width: 300px;
  margin: 0;
  font-size: 1rem;
  text-align: start;
  padding: 10px 20px;
  font-weight: bold;
  text-decoration: none;
  word-wrap: break-word;
  overflow-wrap: break-word;
  cursor: pointer;
  transition: all 0.3s ease;
`;

// Wrapper for centering content vertically and horizontally
export const CenteredFlexContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  padding: 20px;
`;

// Horizontal layout box with spacing between children
export const HorizontalItemGroup = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 10px;
`;

export const VerticalItemGroup = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const VerticalListGroup = styled(motion.ul)`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const VerticalListItems = styled(motion.li)`
  flex: 1;
  padding: 5px;
  text-align: left;
`;

export const IconButton = styled.span`
  padding: 5px 10px;
  cursor: pointer;
  white-space: nowrap;
`;
