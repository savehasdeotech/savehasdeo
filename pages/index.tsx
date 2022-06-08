import HomePage from "../src/screens/HomePage";
import Head from "next/head";

const meta = {
  title: "Save Hasdeo – Rural Economic Transformation",
  description:
    "Save Hasdeo is a movement of Nation Building through Rural Economic Transformation started by Mayank Gandhi with a focused goal of Increasing Farmer Incomes.",
  keywords: "Save Hasdeo,Global Vikas Trust,Mayank Gandhi,Farmers,rural development,Indian farmers,rural economy,mass plantation,environment, innovation, technology, marketing, transformation, development, rural india, green india, climate change, economy, income, inspiration, motivation, volunteering, farmers first, new India, better india, success stories, Happy farmers, Smiling farmers, farmers in india, what do farmers do, farmers meaning, farmers login,importance of farmers, types of farmers, farmers market, farmers finance, help farmers india, Increasing Farmer incomes, Transform India",
  url: "https://globalparli.org/about",
  image: "logoblack.png",
  twitterHandle: "@GlobalParli",
};
export default function Home() {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:url" content={meta.url} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta name="description" content={meta.description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={meta.image} />
        <meta name="keywords" content={meta.keywords} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:site" content={meta.twitterHandle} />
        <meta name="twitter:url" content={meta.url} />
        <meta name="twitter:description" content={meta.description} />
      </Head>
      <HomePage />
    </>
  );
}
