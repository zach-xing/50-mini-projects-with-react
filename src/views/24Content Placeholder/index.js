import React from 'react'
import { Main, Loading } from "./styled";

const Card = React.lazy(() => import("./card.js"));

function ContentPlaceholder() {
  return (
    <Main>
      <React.Suspense fallback={<Loading />}>
        <Card />
      </React.Suspense>
    </Main>
  );
}

export default ContentPlaceholder
