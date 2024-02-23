import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";

type CheckboxProps = {
  checked: boolean;
  size: number;
  color?: string;
  handleClick: () => void;
};

type CheckboxContainerProps = {
  size: number;
  color?: string;
};

const CheckboxContainer = styled.div<CheckboxContainerProps>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border: 1px solid ${(props) => props.color};
  border-color: ${(props) => props.color};
  background-color: rgba(0, 0, 0, 0.1);
  color: ${(props) => props.color};
  margin: 0 5px;
  cursor: pointer;
  display: inline-block;

  & svg {
    padding-bottom: ${(props) =>
      props.size < 20 ? (props.size * 3) / 4 + "px" : 0};
  }
`;

export const Checkbox = ({
  checked,
  size,
  color,
  handleClick,
}: CheckboxProps) => {
  return (
    <CheckboxContainer size={size} color={color} onClick={handleClick}>
      <AnimatePresence initial={checked}>
        {checked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox={"0 0 24 24"}
            strokeWidth={1.5}
            stroke="currentColor"
            style={{ display: "block" }}
          >
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              exit={{ pathLength: 0 }}
              transition={{
                type: "tween",
                duration: 0.2,
                ease: checked ? "easeOut" : "easeIn",
              }}
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        )}
      </AnimatePresence>
    </CheckboxContainer>
  );
};
