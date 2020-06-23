import React, { ChangeEvent, FC, useEffect, useState } from "react";
import styled from "styled-components";
import { ListItem } from "../ListItem";
import { getData } from "../../services/itemService";
import { InputAdornment, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Pagination from "@material-ui/lab/Pagination";

type ListWrapperProps = {
  className?: string;
};

const ListWrapper: FC<ListWrapperProps> = ({ className }) => {
  const [itemList, setItemList] = useState<Item[]>([]);
  const [searchInput, setSearchInput] = useState("");
  const [page, setPage] = useState(1);
  const [paginatedList, setPaginatedList] = useState<Item[]>([]);

  useEffect(() => {
    getData().then((items) => {
      const itemList = items.sort((a, b) => {
        return a.name > b.name ? 1 : -1;
      });
      setItemList(itemList);
      setPaginatedList(itemList.slice((page - 1) * 10, (page - 1) * 10 + 10));
    });
  });

  useEffect(() => {
    const filteredItemList = itemList.filter((item) =>
      item.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setPaginatedList(
      filteredItemList.slice((page - 1) * 10, (page - 1) * 10 + 10)
    );
  }, [searchInput, itemList, page]);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
    setPage(1);
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  return (
    <div className={className}>
      <div>
        <TextField
          value={searchInput}
          onChange={handleSearch}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </div>
      {paginatedList.map((item) => (
        <ListItem key={`${item.id}-${item.type}`} item={item} />
      ))}
      <Pagination
        count={Math.floor(itemList.length / 10)}
        page={page}
        onChange={handlePageChange}
        shape="rounded"
      />
    </div>
  );
};

export const StyledListWrapper = styled(ListWrapper)`
  width: 500px;
`;
