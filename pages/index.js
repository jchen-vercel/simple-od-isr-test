import React from "react";

export function getStaticProps() {
  return {
    props: {
      time: new Date().toISOString(),
    },
  };
}

export function handleRevalidate() {
  fetch(`/api/revalidate?secret=TEST123`);
  console.log("Revalidating...");
}

export default function Home({ time }) {
  return (
    <>
      <h1>{time}</h1>
      <p>
        Click the Revalidate button and refresh the page to see on-demand ISR in
        action
      </p>
      <p>
        The revalidate button triggers an API call that will regenerate the page
        in the background and the first refresh will show the new time!
      </p>
      <p>
        If you click refresh without clicking the revalidate button then you
        should see no change in the time!
      </p>
      <button onClick={() => handleRevalidate()}>Revalidate</button>
    </>
  );
}
