import * as React from 'react';
import { Link } from 'gatsby';

const NotFoundPage = () => {
  return (
    <main className="not-found">
      <div className="not-found__wrapper not-found__wrapper--higher">
        <h1
          className="not-found__hero not-found__glitch not-found__layers"
          data-text="404"
        >
          <span className="not-found__span">404</span>
        </h1>
      </div>
      <div className="not-found__wrapper not-found__wrapper--lower">
        <p className="not-found__para">
          Page not found. Come back&nbsp;
          <Link to={`/`} className="not-found__link">
            home
          </Link>
          .
        </p>
      </div>
    </main>
  );
};

export default NotFoundPage;
