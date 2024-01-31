import React, { useEffect, useMemo, useRef, useState } from "react";
import { Button, Box, Container, CircularProgress } from "@mui/material";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import HeaderContent from "../header-content";
import ProductList from "@/components/ProductList";
import { bestSellingData } from "@/containers/static-data";
import { HeaderProps } from "../../../types/Home";
import { RootState } from "@/store/store";
import { fetchProducts } from "@/services/product/apiService";
import { PaginationProps } from "@/types/Product";
import { fetchAllCategories } from "@/services/category/apiService";

type PageProps = {
  page?: string;
};

const BestSelling: React.FC<HeaderProps & PageProps> = ({ page }) => {
  const isProductPage = page && page === "product";
  const initialized = useRef(false);
  const [showLoadMore, setLoadMoreToggle] = useState(true);
  const dispatch = useDispatch();
  const { products, loading, ...pagination } = useSelector(
    (state: RootState) => {
      const { bestSelling, loading } = state.product;
      return { ...bestSelling, loading };
    },
    shallowEqual
  );

  const fetch = (pageParams: PaginationProps = {}) => {
    fetchProducts(dispatch, pageParams);
    fetchAllCategories(dispatch);
  };

  useEffect(() => {
    if (!initialized.current && !products.length) {
      initialized.current = true;
      fetch()
    }
  }, []);

  const loadMore = () => {
    const { limit, skip, total } = pagination;
    if (limit + skip < total) {
      let newSkip = limit + skip;
      fetch({ skip: newSkip, limit });
      if (newSkip + limit >= total) {
        setLoadMoreToggle(false);
      }
    }
  };

  return (
    <Container>
      <HeaderContent
        content={bestSellingData.dataHeader}
        type={isProductPage ? "captionOnly" : "default"}
      />
      {!products.length ? (
        <Box
          className="mt-12"
          sx={{ display: "flex", justifyContent: "center", color: "secondary" }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Box className="mt-10">
            <ProductList data={products} limit={isProductPage ? 8 : 0} />
          </Box>
          {loading ? (
            <Box
              className="mt-12"
              sx={{
                display: "flex",
                justifyContent: "center",
                color: "secondary",
              }}
            >
              <CircularProgress />
            </Box>
          ) : showLoadMore ? (
            <Box className="py-8 flex mt-12  flex-col items-center p-15  gap-10">
              {!isProductPage ? (
                <Button
                  style={{ maxWidth: "300px", width: "100%", height: "60px" }}
                  className={` border border-solid border-secondary mx-auto  shadow-none text-secondary font-bolder text-sm font-montserrat bg-transparent hover:bg-secondary hover:text-white`}
                  onClick={loadMore}
                >
                  LOAD MORE PRODUCTS
                </Button>
              ) : (
                ""
              )}
            </Box>
          ) : (
            ""
          )}
        </>
      )}
    </Container>
  );
};

export default BestSelling;
