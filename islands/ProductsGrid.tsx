import { data } from "../utils/productsData.ts";
import { useState } from "preact/hooks";
import Pagination from "../components/Pagination.tsx";
import DataGrid from "../components/DataGrid.tsx";
import Search from "../components/Search.tsx";
import Modal from "../components/Modal.tsx";

export default function ProductsGrid() {
  const [searchInput, setSearchInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [selectAll, setSelectAll] = useState(false);
  const [sortColumn, setSortColumn] = useState("id");
  const [sortOrder, setSortOrder] = useState("asc");

  const filteredData = data.filter((product: any) => {
    return (
      product.name.toLowerCase().includes(searchInput.toLowerCase()) ||
      product.description.toLowerCase().includes(searchInput.toLowerCase())
    );
  });

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, filteredData.length);

  const handlePageChange = (newPage: any) => {
    setCurrentPage(newPage);
  };

  const handleItemsPerPageChange = (event: any) => {
    setItemsPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handleSelectAllChange = () => {
    setSelectAll(!selectAll);
  };

  const handleEdit = () => {
    console.log("edit clicked");
  };

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const sortData = (column: string) => {
    setSortColumn(column);
    toggleSortOrder();
  };
 
  const compareValues = (a: any, b: any) => {
    if (a < b) return sortOrder === "asc" ? -1 : 1;
    if (a > b) return sortOrder === "asc" ? 1 : -1;
    return 0;
  };

  return (
    <div className="bg-dark rounded-lg shadow-md p-6">
    {/* Search Input */}
    <div class={'flex justify-between'}>
      <Search searchInput={searchInput} setSearchInput={setSearchInput} />
      <Modal/>
    </div>
    {/* Data Grid */}
    <DataGrid selectAll={selectAll} handleSelectAllChange={handleSelectAllChange} filteredData={filteredData}
       startIndex={startIndex} endIndex={endIndex} handleEdit={handleEdit} sortData={sortData}
       sortColumn={sortColumn} sortOrder={sortOrder} compareValues={compareValues} />

    {/* Pagination Controls */}
    <Pagination handlePageChange={handlePageChange} currentPage={currentPage}
       totalPages={totalPages} itemsPerPage={itemsPerPage} handleItemsPerPageChange={handleItemsPerPageChange} />
  </div>
  );
}
