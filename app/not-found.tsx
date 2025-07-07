import Link from 'next/link';
import css from './page.module.css';

const PageNotFound = () => {
  return (
    <div className={css.notfound}>
      <h1 className={css.title}>404 - Page not found</h1>
      <p className={css.description}>
        Sorry, the page you are looking for does not exist.
      </p>
      <Link href={'/'} className={css.tag}>
        Go back
      </Link>
    </div>
  );
};

export default PageNotFound;
