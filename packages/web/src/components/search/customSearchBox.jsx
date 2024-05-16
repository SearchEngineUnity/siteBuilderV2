import React, { useState, useRef } from 'react';
import { useInstantSearch, useSearchBox } from 'react-instantsearch';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';

function CustomSearchBox(props) {
  const { query, refine } = useSearchBox(props);
  const { status } = useInstantSearch();
  const [inputValue, setInputValue] = useState(query);
  const inputRef = useRef(null);

  const isSearchStalled = status === 'stalled';

  function setQuery(newQuery) {
    refine(newQuery);
  }

  return (
    <Box
      component="form"
      sx={{
        border: '1px solid #ABABAB',
        borderRadius: '12px',
        padding: '16px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        '&:focus-within': {
          borderColor: (theme) => theme.palette.primary.main,
          outline: 'medium currentColor',
        },
      }}
      action=""
      role="search"
      noValidate
      onSubmit={(event) => {
        event.preventDefault();
        event.stopPropagation();

        setQuery(inputValue);

        if (inputRef.current) {
          inputRef.current.blur();
        }
      }}
      onReset={(event) => {
        event.preventDefault();
        event.stopPropagation();
        setInputValue('');
        setQuery('');

        if (inputRef.current) {
          inputRef.current.focus();
        }
      }}
    >
      <Box
        component="button"
        type="reset"
        sx={{
          display: inputValue.length === 0 || isSearchStalled ? 'none' : 'flex',
          alignItems: 'center',
          flexShrink: '0',
          border: 'none',
          background: 'transparent',
          color: '#535353',
          borderRight: '2px solid #ABABAB',
          padding: '0 16px 0 0',
          marginRight: '16px',
        }}
      >
        <CloseIcon sx={{ width: '24px', height: '24px' }} />
      </Box>
      <Box
        component="input"
        aria-label="Search"
        sx={{
          width: '100%',
          border: 'none',
          color: '#535353',
          backgroundColor: 'transparent',
          '&:focus': {
            borderColor: 'none',
            boxShadow: 'none',
            outline: 'none',
          },
          fontSize: '20px',
        }}
        ref={inputRef}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        placeholder="Type Your Text Here"
        spellCheck={false}
        maxLength={512}
        type="text"
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.currentTarget.value);
        }}
        autoFocus
      />
      <Box
        component="button"
        type="submit"
        sx={{
          marginLeft: '16px',
          borderRadius: '6px',
          border: '1px solid #ABABAB',
          backgroundColor: '#D9D9D9',
          color: '#535353',
          fontFamily: 'Figtree, Roboto, Helvetica, Arial, sans-serif',
          fontSize: '20px',
          '&:hover, &:focus': {
            border: (theme) => `1px solid ${theme.palette.primary.main}`,
            backgroundColor: (theme) => theme.palette.primary.main,
            color: 'white',
            boxShadow: 'none',
            outline: 'none',
          },
        }}
      >
        Search
      </Box>
      <span hidden={!isSearchStalled}>Searching…</span>
    </Box>
  );
}

export default CustomSearchBox;
