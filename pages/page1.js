import Head from "next/head";
import Link from "next/link";

export default function PageOne() {
  return (
    <div>
      <Head>
        <title>Page 1</title>
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

PageOne.getInitialProps = async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 300);
  });

  return { custom: "custom" };
};
