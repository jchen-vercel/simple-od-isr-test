export function getStaticProps() {
  return {
    props: {
      time: new Date().toISOString(),
    },
  };
}

export default function Home({ time }) {
  return <h1>{time}</h1>;
}
