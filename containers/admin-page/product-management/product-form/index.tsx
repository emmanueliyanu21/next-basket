import React, { useEffect, useMemo, useState } from "react";
import { TextField, Button, Typography, Grid } from "@mui/material";
import { SingleProduct } from "@/types/Product";
import { createProduct, editProduct } from "@/services/product/apiService";
import { useDispatch } from "react-redux";

type ProductFormprops = {
  product: SingleProduct;
  // onEditSubmit: (editedData: SingleProduct) => void;
};

const fieldConfigurations = [
  { name: "title", label: "Title", type: 'text', value: "" },
  { name: "price", label: "Price", type: 'number', value: "" },
  { name: "discountPercentage", label: "Discount Percentage", type: 'number', value: "" },
  { name: "stock", label: "Stock", type: 'number', value: "" },
  { name: "brand", label: "Brand", type: 'text', value: "" },
  { name: "category", label: "Category", type: 'text', value: "" },
  { name: "description", label: "Description", type: 'text', value: "" },
  { name: "rating", label: "Rating", type: 'number', value: "" },
  { name: "thumbnail", label: "Thumbnail", type: 'text', value: "" },
];

const ProductForm = ({ product }: ProductFormprops) => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState(product);

  useEffect(() => {
    setQuery(product);
  }, [product]);

  const handleChange = (e: any) => {
    setQuery({ ...query, [e.target.name]: e.target.value });
  };

  // const disabled = useMemo(
  //   () => !query.thumbnail || !query.rating,
  //   [query.thumbnail, query.rating]
  // );

  const handleSubmit = (e: any) => {
    e.preventDefault();
    product.id ? editProduct(dispatch, query) : createProduct(dispatch, query);
    setQuery(product);
  };

  return (
    <form
      className="mb-8 p-5 bg-white rounded-lg shadow-md"
      onSubmit={handleSubmit}
    >
      <Typography className="mb-8" variant="h6" gutterBottom>
        {product.id ? "Update Product" : "Add Product"}
      </Typography>
      <Grid container spacing={2}>
        {fieldConfigurations.map((item, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={4}>
            <TextField
              name={item.name}
              label={item.label}
              type={item.type}
              variant="outlined"
              fullWidth
              value={query[item.name as keyof SingleProduct] || ""}
              onChange={handleChange}
              required
            />
          </Grid>
        ))}
      </Grid>
      <Button
        className="mt-4 px-16 py-4 text-white bg-primary hover:bg-secondary"
        type="submit"
        variant="contained"
        color="secondary"
      >
        {product.id ? "Update" : "Add"}
      </Button>
    </form>
  );
};

export default ProductForm;
