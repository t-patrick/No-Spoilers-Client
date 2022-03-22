import React, { Component, createRef, FunctionComponent, Ref, useEffect, useRef, useState } from 'react';
import { Options } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import SelectSearch, { DomProps, SelectedOption, OptionSnapshot, SelectedOptionValue, SelectSearchOption, SelectSearchProps } from 'react-select-search';
import { searchSnippets } from '../../API/snippetAPI';
import './quick-search-styles.css';
import StyledQuickSearch from './quicksearch.styled';

const emptyOptions = [{
  name: 'Enter TV Show',
  value: '1'
}] as SelectSearchOption[]

interface WithPhoto extends SelectedOption {
  name: string,
  poster_path?: string;
  first_air_date: string;

}

const getOptions = async (query: string) => {
  if (query.length === 0) return emptyOptions;
  const results = await searchSnippets(query);

  if (results.length === 0) return [{
    name: 'Not found',
    value: '2',
    poster_path: '',
    first_air_date: ''
  }]

  return results.map(result => {
    return {
      name: result.name,
      value: result.TMDB_show_id,
      poster_path: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
      first_air_date: new Date(result.first_air_date).getFullYear()
    }
  })
}



function QuickSearch() {

  const [addedShows, setAddedShows] = useState<Array<string>>([]);

  const renderFriend = (domProps: DomProps, option: SelectedOption, snapshot: OptionSnapshot, className: string) => {

    const navigate = useNavigate();
    const ops = option as WithPhoto;
    if (ops.value === '1') return (
      <h1>Search for a show you are currently watching or completed!</h1>
    )

    if (ops.value === '2') return (
      <h1>No results found, hit search for a comprehensive search</h1>
    )

    const onClick = () => {
      setAddedShows([...addedShows, ops.value]);
    }


    return (

      <div className="option">
        <div className="img-container"><img src={ops.poster_path} /></div>
        <div className="info">{ops.name} ({ops.first_air_date})</div>
        {!addedShows.includes(ops.value) ? <button className="button" onClick={onClick}>Add Show</button> :
          <button className="button-added" onClick={onClick}>Added! Go to show page</button>
        }
      </div>

    )
  }

  return (
    <StyledQuickSearch>
      <SelectSearch
        className="select-search"
        options={emptyOptions}
        getOptions={getOptions}
        renderOption={renderFriend}
        multiple
        search
        placeholder="Add a TV Show"
        closeOnSelect={true}
        printOptions={'on-focus'}
        debounce={600}

      />
    </StyledQuickSearch>
  )
}



export default QuickSearch;