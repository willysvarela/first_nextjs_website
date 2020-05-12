import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Head from "next/head";

import Layout from "../../components/layout";

const FirstPost = (props) => {
  return (
    <Layout>
      <Head>
        <title>First Page</title>
      </Head>
      <h1>Primeiro Post</h1>
      <Link href="/">
        <a>Página Principal</a>
      </Link>
    </Layout>
  );
};

FirstPost.propTypes = {};

export default FirstPost;
