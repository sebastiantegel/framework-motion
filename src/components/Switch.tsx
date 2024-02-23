import { motion } from "framer-motion";
import styled from "styled-components";

type CheckSliderProps = {
  checked: boolean;
  toggle: () => void;
  size: number;
  color?: string;
};

type ContainerProps = {
  size: number;
  color?: string;
};

const SwitchContainer = styled.div<ContainerProps>`
  width: ${(props) => props.size + "px"};
  height: ${(props) => props.size / 2 + "px"};
  border: 1px solid ${(props) => props.color || "grey"};
  border-radius: ${(props) => props.size + "px"};
  background-color: rgba(0, 0, 0, 0.1);

  display: inline-flex;
  cursor: pointer;
  justify-content: flex-start;

  &[data-ison="true"] {
    justify-content: flex-end;
  }

  .handle {
    background-color: ${(props) => props.color || "black"};
    width: ${(props) => props.size * 0.5 - 10 + "px"};
    height: ${(props) => props.size * 0.5 - 10 + "px"};
    border-radius: 50%;
    margin: 5px;
  }
`;

const spring = {
  type: "spring",
  stiffness: 800,
  damping: 30,
};

export const Switch = ({ checked, toggle, size, color }: CheckSliderProps) => {
  return (
    <SwitchContainer
      data-ison={checked}
      onClick={toggle}
      size={size}
      color={color}
    >
      <motion.div layout transition={spring} className="handle"></motion.div>
    </SwitchContainer>
  );
};
