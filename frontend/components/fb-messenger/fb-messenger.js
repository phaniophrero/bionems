import { useEffect } from "react";
import { initFbMessenger, cleanupFbMessenger } from "./fb";

export function FbMessenger() {
  useEffect(() => {
    // console.log("Fb Messenger");
    initFbMessenger();

    return () => {
      cleanupFbMessenger();
    };
  }, []);

  return (
    <div>
      <div id="fb-root"></div>

      <div id="fb-customer-chat" className="fb-customerchat"></div>
    </div>
  );
}
