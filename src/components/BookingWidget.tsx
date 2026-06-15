import { useEffect } from "react";

export default function BookingWidget() {
  useEffect(() => {
    if (document.querySelector('script[src*="bookinglite"]')) return;
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://www.bookinglite.ru/widgetBL/js/wid.js";
    (window as Window & { widgetOptions?: object }).widgetOptions = {
      token: "45A25BC09A55C2797F59C982A04EBB39",
      target: "search-widget",
    };
    document.getElementsByTagName("head")[0].appendChild(script);
  }, []);

  return <div id="search-widget" />;
}