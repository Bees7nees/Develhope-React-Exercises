import { useEffect, useRef } from "react";

export function FocusableInput() {
  const inputRef = useRef(null);
  const mountedRef = useRef(false);

  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      console.log("The focusable input has been rendered for the first time.");
    }

    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h2>Focusable Input</h2>
      <input ref={inputRef} type="text" />
    </div>
  );
}
