

const Search = ({search, onSearch}) => {
  return (
    <div className="search">
      <h4>Search</h4>
      <input
        value={search}
        onChange={(e) => onSearch(e.target.value)} 
        className="search-input" 
        type="text" 
        placeholder="Bitcoin, BNB..."
      />
    </div>
  )
}

export default Search;