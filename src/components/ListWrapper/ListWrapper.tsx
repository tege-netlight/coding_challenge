import React, { ChangeEvent, FC, useEffect, useState } from "react";
import styled from "styled-components";
import { ListItem } from "../ListItem";
import { getData } from "../../services/itemService";
import { InputAdornment, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

type ListWrapperProps = {
  className?: string;
};

const ListWrapper: FC<ListWrapperProps> = ({ className }) => {
  const [itemList, setItemList] = useState<Item[]>([]);
  const [filteredItemList, setFilteredItemList] = useState<Item[]>([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    getData().then((items) => {
      const itemList = items.sort((a, b) => {
        return a.name > b.name ? 1 : -1;
      });
      setItemList(itemList);
      setFilteredItemList(itemList);
    });
  });

  useEffect(() => {
    setFilteredItemList(
      itemList.filter((item) =>
        item.name.toLowerCase().includes(searchInput.toLowerCase())
      )
    );
  }, [searchInput, itemList]);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
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
      {filteredItemList.map((item) => (
        <ListItem key={`${item.id}-${item.type}`} item={item} />
      ))}
    </div>
  );
};

export const StyledListWrapper = styled(ListWrapper)`
  width: 500px;
`;
