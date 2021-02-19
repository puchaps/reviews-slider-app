/* eslint-disable react/jsx-props-no-spreading */
import React from "react";

import "./custom-arrow.styles.scss";

const CustomArrow = ({ onTypeArrow = "", children, ...otherProps }) => (
  <div className={`custom-arrow ${onTypeArrow}`} {...otherProps}>
    {children}
  </div>
);
export default CustomArrow;
