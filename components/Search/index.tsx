import React from "react";
import { TextField, Modal, Fade, Box, IconButton } from "@mui/material";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import { RootState } from "@/store/store";
import { Product } from "@/types/Product";
import { useNavigate } from "react-router-dom";
import { searchProduct } from "@/services/product/apiService";

export type ProductProps = {
  id: number;
  name: string;
  category: string;
};

type SearchModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const dispatch = useDispatch();
//   const navigate = useNavigate();
  const products: Product[] = useSelector(
    (state: RootState) => state.product.bestSelling.products,
    shallowEqual
  );

  const handleClose = () => {
    onClose();
  };

  const searchProducts = (query: string) => {
    const searchItem = query.toLowerCase();
    return products.filter((product) => {
      const searchAbleFields: Array<keyof Product> = ["title", "category"];
      return searchAbleFields.some((field) => {
        return String(product[field]).toLowerCase().includes(searchItem);
      });
    });
  };

  const query = "laptop";
  const searchResult = searchProducts(query);

  const handleSearch = async () => {
    if (searchResult.length > 0) {
    } else {
      await searchProduct(dispatch, query);
      const updatedProduct: Product[] = useSelector(
        (state: RootState) => state.product.bestSelling.products,
        shallowEqual
      );

      if (updatedProduct.length > 0) {
      } else {
        // navigate("/");
      }
    }
  };

  return (
    <>
      <Modal
        open={isOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        onClose={handleClose}
        sx={{
          maxWidth: "610px",
          width: "95%",
          margin: "auto",
        }}
      >
        <Fade in={isOpen}>
          <Box
            className="bg-white p-4 rounded-md"
            sx={{
              width: "100%",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Box className="my-8">
              <IconButton
                onClick={handleClose}
                sx={{
                  position: "absolute",
                  top: 5,
                  right: 5,
                }}
              >
                <CloseIcon />
              </IconButton>
            </Box>
            <Stack spacing={2} sx={{ width: 580, height: 400 }}>
              <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={products.map((option) => option.title)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Search input"
                    InputProps={{
                      ...params.InputProps,
                      type: "search",
                    }}
                  />
                )}
              />
            </Stack>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default SearchModal;
