import { useState } from "react";

/**
 * Custom hook to set the message when the string has no duplicates.
 * @returns {Object} - Object with the state and setState method.
 */
const useMessage = () => {
  const [message, setMessage] = useState("");

  const setCustomMessage = (customMessage) => {
    setMessage(customMessage);
  };

  return { message, setCustomMessage };
};

export default useMessage;
