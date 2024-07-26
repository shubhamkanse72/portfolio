import { useEffect, useCallback } from "react";
import { useSelector } from "react-redux";

const CustomHook = (refTab = null) => {
  const scrollTab = refTab;
  const activeTab = useSelector((state) => state.activeTab);

  const scrollToMenu = useCallback(() => {
    if (scrollTab.current && scrollTab.current.classList.contains(activeTab)) {
      const componentNode = scrollTab.current;
      componentNode.scrollIntoView({ behavior: "smooth" });
    }
  }, [scrollTab, activeTab]);

  useEffect(() => {
    scrollToMenu();
  }, [activeTab, scrollToMenu]);
};

export default CustomHook;
