const SearchItem = ({ searchText, setSearchtext }) => {
  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="searchItem">Search items</label>
      <input
        type="text"
        id="searchItem"
        placeholder="Search items"
        value={searchText}
        onChange={(e) => setSearchtext(e.target.value)}
        role="searchbox"
      />
    </form>
  );
};

export default SearchItem;
