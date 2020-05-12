import React from "react";
import PropTypes from "prop-types";
import "../styles/global.css";

const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

App.propTypes = {};

export default App;
