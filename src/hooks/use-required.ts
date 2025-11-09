/** useRequired custom hook by Farrel Irawan
 *
 * this hook will check if the input or textarea element is required or not
 * and return a boolean value
 *
 * Usage:
 * to use this hook, you need to pass a ref of the input or textarea element
 * on your form component. then you can use the returned boolean value to
 * conditionally render asterisk or other indicator for required fields.
 *
 * Example:
 * const inputRef = useRef(null);
 * const isRequired = useRequired(inputRef);
 *
 */

import { useState, useEffect } from "react";

export function useRequired(
  inputRef: React.RefObject<HTMLInputElement | HTMLTextAreaElement | null>
) {
  const [isRequired, setIsRequired] = useState(false);

  useEffect(() => {
    if (inputRef.current) {
      setIsRequired(inputRef.current.required);
    }
  }, [inputRef]);

  return { isRequired };
}
