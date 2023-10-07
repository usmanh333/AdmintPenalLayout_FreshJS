export default function DataGrid(
    {
      selectAll,
      handleSelectAllChange,
      filteredData,
      startIndex,
      endIndex,
      handleEdit,
      sortData,
      sortColumn,
      sortOrder,
      compareValues,
    }: any,
  ) {
    return (
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            <thead class='text-white uppercase'>
              <tr>
                <th>
                  <label>
                    <input
                      type="checkbox"
                      className="checkbox"
                      checked={selectAll}
                      onChange={handleSelectAllChange}
                    />
                  </label>
                </th>
                <th onClick={() => sortData("id")}>
                  ID{" "}
                  {sortColumn === "id" && (
                    <span class={"sort-indicator cursor-pointer"}>
                      ({sortOrder})
                    </span>
                  )}
                </th>
                <th onClick={() => sortData("name")}>
                  Name{" "}
                  {sortColumn === "name" && (
                    <span class={"sort-indicator cursor-pointer"}>
                      ({sortOrder})
                    </span>
                  )}
                </th>
                <th onClick={() => sortData("price")}>
                  Price{" "}
                  {sortColumn === "price" && (
                    <span class={"sort-indicator cursor-pointer"}>
                      ({sortOrder})
                    </span>
                  )}
                </th>
                <th onClick={() => sortData("description")}>
                  Description{" "}
                  {sortColumn === "description" && (
                    <span class={"sort-indicator cursor-pointer"}>
                      ({sortOrder})
                    </span>
                  )}
                </th>
                <th onClick={() => sortData("category")}>
                  Category{" "}
                  {sortColumn === "category" && (
                    <span class={"sort-indicator cursor-pointer"}>
                      ({sortOrder})
                    </span>
                  )}
                </th>
                <th>Active</th>
                <th>Image</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length === 0
                ? (
                  <tr>
                    <p className="text-center text-red-500 font-bold p-4">
                      No Product Found!
                    </p>
                  </tr>
                )
                : filteredData
                  .slice(startIndex, endIndex)
                  .sort((a: any, b: any) =>
                    compareValues(a[sortColumn], b[sortColumn])
                  )
                  .map((product: any) => (
                    <tr key={product.id}>
                      <th>
                        <label>
                          <input
                            type="checkbox"
                            className="checkbox"
                            checked={selectAll}
                            onChange={handleSelectAllChange}
                          />
                        </label>
                      </th>
                      <td>{product.id}</td>
                      <td>{product.name}</td>
                      <td>{product.price}</td>
                      <td>{product?.description?.slice(0,30)+'...'}</td>
                      <td>{product.category.join(", ")}</td>
                      <td><input type="checkbox" className="toggle" checked /></td>
                      <td>
                        <img
                          src={product.image}
                          alt={product.name}
                          class={"w-16 h-16"}
                        />
                      </td>
                      <td>
                        <button
                          className="btn btn-info btn-sm shadow-lg text-gray"
                          onClick={() => handleEdit(product.id)}
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  