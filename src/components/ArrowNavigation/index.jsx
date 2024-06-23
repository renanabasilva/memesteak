import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function ArrowNavigation({ children }) {
  const navigate = useNavigate();
  useEffect(() => {
    const handleKeyDown = (event) => {
      const focusableElements =
        'a[href], button, span, [tabindex]:not([tabindex="-1"])';
      const focusable = Array.from(
        document.querySelectorAll(focusableElements)
      );
      const index = focusable.indexOf(document.activeElement);
      const horizontalContainer = document.querySelector('.horizontal-container');
      const isInsideHorizontalContainer = horizontalContainer && horizontalContainer.contains(document.activeElement);

      if (event.key === 'Backspace') {
        navigate('/dashboard');
        event.preventDefault();
        return;
      }

      if (isInsideHorizontalContainer) {
        const containerElements = Array.from(horizontalContainer.querySelectorAll(focusableElements));
        const containerFirstFocusableIndex = focusable.indexOf(containerElements[0]);
        const containerLastFocusableIndex = focusable.indexOf(containerElements[containerElements.length - 1]);
        if (event.key === 'ArrowRight') {
          if ( index < focusable.length - 1) {
            const nextIndex = index + 1;
            focusable[nextIndex].focus();
            event.preventDefault();
          }
        } else if (event.key === 'ArrowLeft') {
          if (index > 0) {
            const prevIndex = index - 1;
            focusable[prevIndex].focus();
            event.preventDefault();
          }
        } else if (event.key === 'ArrowUp') {
          focusable[containerFirstFocusableIndex - 1].focus();
          event.preventDefault();
        } else if (event.key === 'ArrowDown') {
          focusable[containerLastFocusableIndex + 1].focus();
          event.preventDefault();
        }
      } else {
        if (event.key === "ArrowDown" || event.key === "ArrowRight") {
          if (index < focusable.length - 1) {
            const nextIndex = (index + 1) % focusable.length;
            focusable[nextIndex].focus();
            event.preventDefault();
          }
        } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
          if (index > 0) {
            const prevIndex = (index - 1 + focusable.length) % focusable.length;
            focusable[prevIndex].focus();
            event.preventDefault();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [navigate]);

  return(
    <>
      <Outlet />
      {children}
    </>
  )
}

export default ArrowNavigation;
