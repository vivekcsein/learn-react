import { useCallback, useEffect, useState } from "react";

type UseHamburgerReturn = {
  isOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
};

const useHamburger = (menuRef?: React.RefObject<HTMLElement>): UseHamburgerReturn => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    const menuEl = menuRef?.current;
    if (!menuEl) return;

    if (isOpen) {
      menuEl.classList.add("open");
      menuEl.setAttribute("aria-expanded", "true");
    } else {
      menuEl.classList.remove("open");
      menuEl.setAttribute("aria-expanded", "false");
    }
  }, [isOpen, menuRef]);

  // Optional: Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef?.current && !menuRef.current.contains(e.target as Node)) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, closeMenu, menuRef]);

  return { isOpen, toggleMenu, closeMenu };
};

export default useHamburger;
