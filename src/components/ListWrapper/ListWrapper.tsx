import React, { ChangeEvent, FC, useEffect, useState } from "react";
import styled from "styled-components";
import { ListItem } from "../ListItem";
import { getData } from "../../services/itemService";
import { Checkbox, FormControlLabel, InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Pagination from "@material-ui/lab/Pagination";
import { SearchBar } from "./SearchBar";

type ListWrapperProps = {
  className?: string;
};

const ListWrapper: FC<ListWrapperProps> = ({ className }) => {
  const [itemList, setItemList] = useState<Item[]>([]);
  const [searchInput, setSearchInput] = useState("");
  const [page, setPage] = useState(1);
  const [paginatedList, setPaginatedList] = useState<Item[]>([]);
  const [typeFilter, setTypeFilter] = useState<string[]>([]);
  const pageSize = 10;
  const [pageCount, setPageCount] = useState(Math.ceil(itemList.length / 10));

  useEffect(() => {
    getData().then((items) => {
      const itemList = items.sort((a, b) => {
        return a.name > b.name ? 1 : -1;
      });
      setItemList(itemList);
      setPaginatedList(itemList.slice(0, pageSize));
      setPageCount(Math.ceil(itemList.length / 10));
    });
  }, []);

  const filterByType = (typeFilter: string[], itemList: Item[]) => {
    if (typeFilter.length) {
      return itemList.filter((item) => typeFilter.includes(item.type));
    } else {
      return itemList;
    }
  };

  useEffect(() => {
    const filteredByType = filterByType(typeFilter, itemList);
    const filteredBySearch = filteredByType.filter((item: Item) =>
      item.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setPaginatedList(
      filteredBySearch.slice(
        (page - 1) * pageSize,
        (page - 1) * pageSize + pageSize
      )
    );

    setPageCount(Math.ceil(filteredBySearch.length / 10));
  }, [searchInput, itemList, page, typeFilter]);

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

  const handleTypeFilterChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const type = event.target.name;
    const newTypeFilters = [...typeFilter];
    if (newTypeFilters.includes(type)) {
      const index = newTypeFilters.indexOf(type);
      newTypeFilters.splice(index, 1);
    } else {
      newTypeFilters.push(type);
    }
    setTypeFilter(newTypeFilters);
    setPage(1);
  };

  return (
    <div className={className}>
      <div>
        <SearchBar
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
      <div>
        <FormControlLabel
          control={
            <Checkbox
              checked={typeFilter.includes("agent")}
              name="agent"
              onChange={handleTypeFilterChange}
            />
          }
          label="Agents"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={typeFilter.includes("shop")}
              name="shop"
              onChange={handleTypeFilterChange}
            />
          }
          label="Shops"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={typeFilter.includes("property")}
              name="property"
              onChange={handleTypeFilterChange}
            />
          }
          label="Properties"
        />
      </div>
      {paginatedList.map((item) => (
        <ListItem key={`${item.id}-${item.type}`} item={item} />
      ))}
      <Pagination
        count={pageCount}
        page={page}
        onChange={handlePageChange}
        shape="rounded"
      />
    </div>
  );
};

export const StyledListWrapper = styled(ListWrapper)`
  padding-top: 20px;
  padding-bottom: 20px;
  width: 500px;
`;
