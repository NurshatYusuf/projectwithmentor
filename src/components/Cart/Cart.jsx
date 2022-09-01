import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// custom imports
import { useCart } from "../../contexts/CartContextProvider";
import { Alert, Button, TextField, Typography } from "@mui/material";

export default function Cart() {
  const { getCart, cart, deleteProductInCart, changeProductCount, getCount } =
    useCart();

  React.useEffect(() => {
    getCart();
  }, []);

  function cartCleaner() {
    localStorage.removeItem("cart");
    getCart();
    localStorage.removeItem("sum");
    getCount();
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Picture</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Count</TableCell>
            <TableCell align="right">Sub Price</TableCell>
            <TableCell align="right">---</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart?.products.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>
                <img src={row.item.picture} alt="error:(" width="50" />
              </TableCell>
              <TableCell align="right">{row.item.name}</TableCell>
              <TableCell align="right">{row.item.type}</TableCell>
              <TableCell align="right">{row.item.price}</TableCell>
              <TableCell align="right">
                <TextField
                  type="number"
                  value={row.count}
                  key={row.key}
                  onChange={(e) => {
                    if (e.target.value < 0) {
                      Alert("Please Enter quantity bigger then 0");
                      return;
                    }

                    changeProductCount(e.target.value, row.item.id);
                  }}
                />
              </TableCell>
              <TableCell align="right">{row.subPrice}</TableCell>
              <TableCell align="right">
                <button onClick={() => deleteProductInCart(row.item.id)}>
                  Delete From Cart
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Typography variant="h6" component="div">
        Total price: {cart?.totalPrice}
        <Button onClick={cartCleaner}>BUY NOW</Button>
      </Typography>
    </TableContainer>
  );
}
