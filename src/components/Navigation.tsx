import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const animation = async () => {
      animate("li", { opacity: 1 });
    };

    animation();
  }, [animate, scope]);

  return (
    <nav>
      <motion.ul ref={scope}>
        <motion.li>
          <NavLink to="/">Hem</NavLink>
        </motion.li>
        <motion.li>
          <NavLink to="/contact">Kontakt</NavLink>
        </motion.li>
      </motion.ul>
    </nav>
  );
};
