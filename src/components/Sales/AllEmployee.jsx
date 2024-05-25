import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Grid,
  Modal,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {
  RiAddLine,
  RiCheckLine,
  RiCloseLine,
  RiDeleteBin5Line,
  RiEditLine,
} from "@remixicon/react";
import { style } from "../../Modal/ModelStyles";

function createData(
  saleId,
  dateOfSale,
  customerId,
  customerName,
  productId,
  productName,
  quantitySold,
  saleAmount,
  discountApplied,
  netSaleAmount
) {
  return {
    saleId,
    dateOfSale,
    customerId,
    customerName,
    productId,
    productName,
    quantitySold,
    saleAmount,
    discountApplied,
    netSaleAmount,
  };
}

const initialRows = [
  createData(
    1,
    "2024-05-22",
    "CUST001",
    "John Doe",
    "PROD001",
    "Product A",
    5,
    500,
    50,
    450
  ),
  createData(
    2,
    "2024-05-23",
    "CUST002",
    "Jane Smith",
    "PROD002",
    "Product B",
    3,
    300,
    20,
    280
  ),
  createData(
    3,
    "2024-05-24",
    "CUST003",
    "Michael Johnson",
    "PROD003",
    "Product C",
    7,
    700,
    70,
    630
  ),
  createData(
    4,
    "2024-05-25",
    "CUST004",
    "Emily Brown",
    "PROD004",
    "Product D",
    2,
    200,
    10,
    190
  ),
  createData(
    5,
    "2024-05-26",
    "CUST005",
    "David Wilson",
    "PROD005",
    "Product E",
    4,
    400,
    40,
    360
  ),
  createData(
    6,
    "2024-05-27",
    "CUST006",
    "Sarah Lee",
    "PROD006",
    "Product F",
    6,
    600,
    60,
    540
  ),
  createData(
    7,
    "2024-05-28",
    "CUST007",
    "Chris Davis",
    "PROD007",
    "Product G",
    8,
    800,
    80,
    720
  ),
  createData(
    8,
    "2024-05-29",
    "CUST008",
    "Jessica Garcia",
    "PROD008",
    "Product H",
    1,
    100,
    5,
    95
  ),
  createData(
    9,
    "2024-05-30",
    "CUST009",
    "Kevin Martinez",
    "PROD009",
    "Product I",
    9,
    900,
    90,
    810
  ),
  createData(
    10,
    "2024-05-31",
    "CUST010",
    "Lisa Robinson",
    "PROD010",
    "Product J",
    10,
    1000,
    100,
    900
  ),
];

const SalesReport = () => {
  const [search, setSearch] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [filteredRows, setFilteredRows] = useState(initialRows);

  const handleChange = (e) => {
    const val = e.target.value.toLowerCase();
    setSearch(val);
    filterData(val, selectedDate);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    filterData(search, date);
  };

  const filterData = (searchText, date) => {
    const filteredData = initialRows.filter((row) => {
      const matchesSearch = Object.values(row).some(
        (field) =>
          typeof field === "string" && field.toLowerCase().includes(searchText)
      );

      const matchesDate = !date || row.dateOfSale === date.format("YYYY-MM-DD");

      return matchesSearch && matchesDate;
    });

    setFilteredRows(filteredData);
  };

  // Modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="sales">
      <div className="card">
        <div className="sales_search">
          <div className="sales_head">
            <h2>Sales Report</h2>
          </div>
          <div className="sales_filter_table">
            <div className="sales_filter">
              <Grid container spacing={2}>
                <Grid item sm={6}>
                  <div className="sales_filter_input">
                    <input
                      type="text"
                      className="sales_input"
                      placeholder="Search by any field"
                      value={search}
                      onChange={handleChange}
                    />
                  </div>
                </Grid>
                <Grid item sm={2}></Grid>
                <Grid item sm={2}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      className="sales_datepicker"
                      value={selectedDate}
                      onChange={handleDateChange}
                      renderInput={(params) => <input {...params} />}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item sm={2}>
                  <div className="sales-addproduct">
                    <button
                      className="sales_addbtn"
                      onClick={handleOpen}
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <RiAddLine className="icon" />
                      Add Product
                    </button>
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                        <h2 style={{ marginBottom: "10px" }}>Add Details</h2>
                        <Grid container spacing={2}>
                          <Grid item sm={6}>
                            <label htmlFor="customer ID">Label</label>
                            <input type="text" style={{ marginTop: "10px" }} />
                          </Grid>
                          <Grid item sm={6}>
                            <label htmlFor="customer ID">Label</label>
                            <input type="text" style={{ marginTop: "10px" }} />
                          </Grid>
                          <Grid item sm={6}>
                            <label htmlFor="customer ID">Label</label>
                            <input type="text" style={{ marginTop: "10px" }} />
                          </Grid>
                          <Grid item sm={6}>
                            <label htmlFor="customer ID">Label</label>
                            <input type="text" style={{ marginTop: "10px" }} />
                          </Grid>
                          <Grid item sm={6}>
                            <label htmlFor="customer ID">Label</label>
                            <input type="text" style={{ marginTop: "10px" }} />
                          </Grid>
                          <Grid item sm={6}>
                            <label htmlFor="customer ID">Label</label>
                            <input type="text" style={{ marginTop: "10px" }} />
                          </Grid>
                          <Grid item sm={6}>
                            <label htmlFor="customer ID">Label</label>
                            <input type="text" style={{ marginTop: "10px" }} />
                          </Grid>
                          <Grid item sm={6}>
                            <label htmlFor="customer ID">Label</label>
                            <input type="text" style={{ marginTop: "10px" }} />
                          </Grid>
                          <Grid item sm={12}>
                            <div
                              className="add-pro-butns"
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <button
                                onClick={handleClose}
                                className="add"
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  background: "red",
                                  padding: "7px 15px",
                                  color: "#fff",
                                  borderRadius: "8px",
                                  margin: "0px 10px",
                                }}
                              >
                                <RiCloseLine
                                  color="#fff"
                                  style={{ marginRight: "8px" }}
                                />{" "}
                                No
                              </button>
                              <button
                                onClick={handleClose}
                                className="add"
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  background: "#45d945",
                                  padding: "7px 15px",
                                  color: "#fff",
                                  borderRadius: "8px",
                                  margin: "0px 10px",
                                }}
                              >
                                <RiCheckLine
                                  color="#fff"
                                  style={{ marginRight: "8px" }}
                                />
                                Yes
                              </button>
                            </div>
                          </Grid>
                        </Grid>
                      </Box>
                    </Modal>
                  </div>
                </Grid>
              </Grid>
            </div>
            <div className="sales_table">
              <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Sale ID</TableCell>
                      <TableCell>Date of Sale</TableCell>
                      <TableCell>Customer ID</TableCell>
                      <TableCell>Customer Name</TableCell>
                      <TableCell>Product ID</TableCell>
                      <TableCell>Product Name</TableCell>
                      <TableCell>Quantity Sold</TableCell>
                      <TableCell>Sale Amount</TableCell>
                      <TableCell>Discount Applied</TableCell>
                      <TableCell>Net Sale Amount</TableCell>
                      <TableCell>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filteredRows.map((row) => (
                      <TableRow key={row.saleId}>
                        <TableCell>{row.saleId}</TableCell>
                        <TableCell>{row.dateOfSale}</TableCell>
                        <TableCell>{row.customerId}</TableCell>
                        <TableCell>{row.customerName}</TableCell>
                        <TableCell>{row.productId}</TableCell>
                        <TableCell>{row.productName}</TableCell>
                        <TableCell>{row.quantitySold}</TableCell>
                        <TableCell>{row.saleAmount}</TableCell>
                        <TableCell>{row.discountApplied}</TableCell>
                        <TableCell>{row.netSaleAmount}</TableCell>
                        <TableCell>
                          <div className="sales_action_buttons">
                            <button>
                              <RiEditLine className="icon sales_icon_edit" />
                            </button>
                            <button>
                              <RiDeleteBin5Line className="icon sales_icon_delete" />
                            </button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesReport;
