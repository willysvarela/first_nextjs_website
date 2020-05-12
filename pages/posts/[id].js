import React from "react";
import PropTypes from "prop-types";

import Layout from "../../components/layout";

import { getAllPostIds, getPostData } from "../../lib/posts";

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false
  };
}

//const getStaticProps = async ({ params }) => {
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData
    }
  };
}

const Post = ({ postData }) => {
  return (
    <Layout>
      <p>{postData.title}</p>
      <h6>
        {postData.date} - {postData.id}
      </h6>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  );
};
Post.propTypes = {};

export default Post;
