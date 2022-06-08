import NextHead from "next/head";

export default function Head({ title = "" }) {
  return (
    <NextHead>
      <meta name="description" content="My portfolio" />
      <title>
        {title}
        {title ? " | " : ""}Portfolio
      </title>
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
}
