import './PageNotFound.css';
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <section className="not-found">
      <h2 className="not-found__error">404</h2>
      <p className="not-found__description">Страница не найдена</p>
      <Link to="/" className="link link_type_entrance hover-link">Назад</Link>
    </section>
  )
}

export default PageNotFound;
