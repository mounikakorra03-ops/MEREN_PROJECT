function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search products..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      style={{ padding: "8px", width: "220px" }}
    />
  );
}

export default SearchBar;
