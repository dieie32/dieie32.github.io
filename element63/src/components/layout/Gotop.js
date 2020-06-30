import React, { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";

const ScrollToTop = () => {
  const { y: pageYOffset } = useWindowScroll();
  const [visble, setVisibility] = useState(false);

  useEffect(() => {
      if (pageYOffset > 200) {
          setVisibility(true);
      } else {
          setVisibility(false);
      }
  }, [pageYOffset]);

  const ScrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if(!visble) {
      return false;
  }

  return (
      <div className="Scrolltop bounce" onClick={ScrollToTop} >
        <i className="fa fa-angle-up" />
      </div>
  );
};

export default ScrollToTop;