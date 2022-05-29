import './ShowMoreButton.css';

function ShowMoreButton(props) {
  return (
    <>
      {
        (props.isNothingFound || props.moviesToRender.length === props.movies.length)
          ? "" : (
            <button className="button button_type_more hover-button" onClick={props.onShowMore}>Ещё</button>
          )
      }
    </>
  )
}

export default ShowMoreButton;
