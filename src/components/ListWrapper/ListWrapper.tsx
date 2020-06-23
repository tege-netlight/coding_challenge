import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { ListItem } from "../ListItem";
import { getData } from "../../services/itemService";

type ListWrapperProps = {
  className?: string;
};

const ListWrapper: FC<ListWrapperProps> = ({ className }) => {
  const [itemList, setItemList] = useState<Item[]>([]);

  useEffect(() => {
    getData().then((items) =>
      setItemList(
        items.sort((a, b) => {
          return a.name > b.name ? 1 : -1;
        })
      )
    );
  });

  return (
    <div className={className}>
      {itemList.map((item) => (
        <ListItem key={`${item.id}-${item.type}`} item={item} />
      ))}
    </div>
  );
};

export const StyledListWrapper = styled(ListWrapper)`
  width: 500px;
  height: 100vh;
`;
