import React from 'react';
import { useNavigate } from 'react-router-dom';
import SelectSearch, {
  DomProps,
  SelectedOption,
  OptionSnapshot,
} from 'react-select-search';
import { emptyOptions, getOptions, WithPhoto } from './quick-search-helpers';
import StyledQuickSearch from './quicksearch.styled';
import useAddShows from './useAddShows';

function QuickSearch() {
  const navigate = useNavigate();
  const { user, addedShows, addNewShow, setAddedShows } = useAddShows();

  /**
   * Navigate to show page
   * @param value showId
   */
  const goToShow = (value: string) => {
    setAddedShows([]);
    navigate(`/show/${value}`, { replace: true });
  };

  //////////////////////// RENDER

  const renderShowSnippet = (
    domProps: DomProps,
    option: SelectedOption,
    snapshot: OptionSnapshot,
    className: string
  ) => {
    const ops = option as WithPhoto;

    if (ops.value === '1')
      return (
        <h1>Search for a show you are currently watching or completed!</h1>
      );

    if (ops.value === '2')
      return <h1>No results found, hit search for a comprehensive search</h1>;

    return (
      <div className="option">
        <div className="img-container">
          <img src={ops.poster_path} />
        </div>
        <div className="info">
          {ops.name} ({ops.first_air_date})
        </div>
        {renderButton(ops.value)}
      </div>
    );
  };

  const renderButton = (value: string) => {
    const inCollection =
      user.userTVInfo &&
      user.userTVInfo.findIndex(
        (show) => show.TMDB_show_id === parseInt(value)
      ) !== -1;
    const justAdded = addedShows.includes(value);

    if (justAdded)
      return (
        <button className="button-added" onClick={() => goToShow(value)}>
          Added! Go to show page
        </button>
      );
    if (inCollection)
      return (
        <button className="button-added" onClick={() => goToShow(value)}>
          In your collection! Go to show page
        </button>
      );

    return (
      <button className="button" onClick={() => addNewShow(value)}>
        Add Show
      </button>
    );
  };

  return (
    <StyledQuickSearch>
      <SelectSearch
        className="select-search"
        options={emptyOptions}
        getOptions={getOptions}
        renderOption={renderShowSnippet}
        multiple
        search
        placeholder="Add a TV Show"
        closeOnSelect={true}
        printOptions={'on-focus'}
        debounce={600}
      />
    </StyledQuickSearch>
  );
}

export default QuickSearch;
