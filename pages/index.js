import Head from "next/head";
import Link from "next/link";

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
              <Link href="/page1">Another Page</Link>
            </li>
            <li>
              <Link href="/page2" prefetch={false}>
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
