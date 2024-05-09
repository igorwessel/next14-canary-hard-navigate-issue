import Head from "next/head";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <Head>
        <title>Page with Prefetch</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <nav>
          <ul>
            <li>
              <Link href="/">Go Back to Home</Link>
            </li>
          </ul>
        </nav>
      </main>
    </div>
  );
}

Page.getInitialProps = async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 300);
  });

  return { custom: "custom" };
};
