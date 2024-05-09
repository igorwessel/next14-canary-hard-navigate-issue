import Head from "next/head";
import Link from "next/link";

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <nav>
          <ul>
            <li>
              <Link href="/">Current Page</Link>
            </li>
            <li>
              <Link href="/page-with-prefetch">Page with prefetch</Link>
            </li>
            <li>
              <Link href="/page-without-prefetch" prefetch={false}>
                Page without prefetch
              </Link>
            </li>
          </ul>
        </nav>
      </main>
    </div>
  );
}

export const getServerSideProps = async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 300);
  });

  return { props: { custom: "custom" } };
};
