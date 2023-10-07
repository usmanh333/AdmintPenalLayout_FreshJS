export default function Search({ searchInput, setSearchInput }: any) {
    return (
      <div>
        <input
          type="text"
          className="input input-bordered w-full md:w-auto p-2 mb-4"
          placeholder="Search Products..."
          value={searchInput}
          onInput={(e: any) => setSearchInput(e.target.value)}
        />
      </div>
    );
  }
  