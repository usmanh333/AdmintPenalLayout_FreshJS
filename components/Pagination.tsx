const Pagination = (
    {
      handlePageChange,
      currentPage,
      totalPages,
      itemsPerPage,
      handleItemsPerPageChange,
    }: any,
  ) => {
    return (
      <div className="my-10 text-white">
        <div className="flex items-center gap-2">
          <div className="btn-group btn-sm">
            <button
              className="btn btn-sm text-white"
              onClick={() => handlePageChange(1)}
              disabled={currentPage === 1}
            >
              {"<<"}
            </button>
            <button
              className="btn btn-sm text-white"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              {"<"}
            </button>
            <button
              className="btn btn-sm text-white"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              {">"}
            </button>
            <button
              className="btn btn-sm text-white"
              onClick={() => handlePageChange(totalPages)}
              disabled={currentPage === totalPages}
            >
              {">>"}
            </button>
          </div>
          <span className="flex items-center gap-1">
            <div>Page</div>
            <strong>
              {currentPage} of {totalPages}
            </strong>
          </span>
          <span className="flex items-center gap-1">
            | Go to page:
            <input
              value={currentPage}
              type="number"
              className="input input-bordered w-20 input-sm mx-2"
              onChange={(e: any) => handlePageChange(Number(e.target.value))}
              min={1}
              max={totalPages}
            />
          </span>
          <span className="flex items-center gap-1">
            | &nbsp;&nbsp; Items per page:
            <select
              value={itemsPerPage}
              className="select-sm select-bordered rounded-lg"
              onChange={handleItemsPerPageChange}
            >
              {[5, 10, 20, 30, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </span>
        </div>
      </div>
    );
  };
  
  export default Pagination;
  