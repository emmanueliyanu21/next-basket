import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import { SingleProduct } from "@/types/Product";

type ProductTableProps = {
  products: SingleProduct[];
};

type DeleteHandler = {
  onDelete: Function;
  onEdit: Function
};

const ProductTable: React.FC<ProductTableProps & DeleteHandler> = ({
  products,
  onDelete, onEdit
}) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Stock</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product, index) => (
            <TableRow key={index}>
              <TableCell>{product.title}</TableCell>
              <TableCell>{product.description}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>{product.stock}</TableCell>
              <TableCell>
                <Button
                className="mr-4"
                  variant="outlined"
                  color="primary"
                  size="small"
                  onClick={() => onEdit(product)}
                >
                  Edit
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  size="small"
                  onClick={() => onDelete(product.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductTable;
