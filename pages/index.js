import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";

import utils from "../styles/utils.module.css";

import { getSortedPostsData } from "./../lib/posts";

export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
};

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={utils.headingMd}>
        <p>First website built using next.js</p>
        <ul>
          {allPostsData.map((post) => (
            <li key={post.id}>
              <Link href="/posts/[id]" as={`/posts/${post.id}`}>
                <a>{post.title}</a>
              </Link>
              <h6>
                {post.id} - {post.date}
              </h6>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
