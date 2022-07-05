import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { JOKE_ID } from 'constants/urlParameters';
import { useDebounce, useJokesSearcher } from 'hooks';
import { ToggleTriangleIcon, FetchingIcon } from 'components';
import {
  StyledLabel,
  StyledInput,
  IconContainer,
  SearchedJokesList,
  SearchedJokesListItem,
  StyledTypography,
} from './Searcher.styles';
import { Overlay } from '../Overlay/Overlay';

export const Searcher = () => {
  const [, setSearchParams] = useSearchParams();

  const { debouncingValue, debouncedValue, setDebouncingValue } = useDebounce<string>({
    initialValue: '',
    delay: 1000,
  });

  const searchedJokesText = debouncedValue.trim().replace(/\s+/g, ' ');

  const { data, isLoading } = useJokesSearcher(searchedJokesText);

  const searchedJokes = data?.searchedJokes;
  const searchedJokesNumber = searchedJokes?.length || 0;

  const [isSearchedResultsOpened, setIsSearchedResultsOpened] = React.useState(false);

  useEffect(() => {
    if (searchedJokesNumber > 0) {
      setIsSearchedResultsOpened(true);
    } else {
      setIsSearchedResultsOpened(false);
    }
  }, [searchedJokesNumber]);

  const handleSearcherValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setDebouncingValue(value);
  };

  const handleJokeItemClick = (clickedJokeItemId: string) => {
    const params = { [JOKE_ID]: clickedJokeItemId };
    setSearchParams(params);
  };

  const handleInputClick = () => {
    if (searchedJokesNumber > 0) {
      setIsSearchedResultsOpened(true);
    }
  };

  return (
    <StyledLabel>
      <StyledInput
        type="text"
        placeholder=""
        value={debouncingValue}
        onChange={handleSearcherValueChange}
        aria-label="searcher"
        onClick={handleInputClick}
      />

      <IconContainer isClickable>
        {isLoading ? (
          <FetchingIcon ariaLabel="fetching" />
        ) : (
          <ToggleTriangleIcon
            ariaLabel={isSearchedResultsOpened ? 'shown results' : 'hidden results'}
            height={12}
            width={12}
            isDown={isSearchedResultsOpened}
          />
        )}
      </IconContainer>

      {isSearchedResultsOpened && (
        <SearchedJokesList>
          {searchedJokes?.map((joke, index) => (
            // I used joke.id + index to make sure that each joke has unique id,
            // because I checked that sometimes API returns random jokes,
            // so it happens that we have the same joke twice in the list.
            <SearchedJokesListItem key={joke.id + index} onClick={() => handleJokeItemClick(joke.id)}>
              <StyledTypography variant={'body2'}>{joke.text}</StyledTypography>
            </SearchedJokesListItem>
          ))}
        </SearchedJokesList>
      )}
      <Overlay
        isOpened={isSearchedResultsOpened}
        onOverlayClick={() => {
          setIsSearchedResultsOpened(false);
        }}
      />
    </StyledLabel>
  );
};
