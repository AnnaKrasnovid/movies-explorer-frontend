import './PageNotFound.css';
import { Link, useHistory } from 'react-router-dom';

function PageNotFound() {
  const history = useHistory();

  function handleGoBack() {
    history.goBack()
  }

  return (
    <section className="not-found">
      <h2 className="not-found__error">404</h2>
      <p className="not-found__description">Страница не найдена</p>
      <Link to="/" className="link link_type_entrance hover-link" onClick={handleGoBack}>Назад</Link>
    </section>
  )
}

export default PageNotFound;
