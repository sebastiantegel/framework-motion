import { motion } from "framer-motion";
import { ReactNode } from "react";
import styled from "styled-components";

type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
  color?: string;
};

type StyledButtonProps = {
  color?: string;
};

const StyledButton = styled.button<StyledButtonProps>`
  border: 1px solid ${(props) => props.color || "grey"};
  color: ${(props) => props.color || "black"};
  margin: 5px;

  &:focus {
    outline: 0;
  }

  &:hover {
    border-color: ${(props) => props.color || "grey"};
  }
`;

export const Button = ({ children, onClick, color }: ButtonProps) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <StyledButton type="button" onClick={onClick} color={color}>
        {children}
      </StyledButton>
    </motion.div>
  );
};
