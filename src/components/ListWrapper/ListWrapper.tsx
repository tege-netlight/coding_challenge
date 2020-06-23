import React, { FC } from "react";
import styled from "styled-components";
import { ListItem } from "../ListItem";

type ListWrapperProps = {
  className?: string;
};

const ListWrapper: FC<ListWrapperProps> = ({ className }) => {
  const itemList: Item[] = [
    {
      type: "agent",
      id: "1",
      createdAt: "2020-02-14T09:44:36.374Z",
      name: "Clifford Prosacco",
      shop: "Conroy, MacGyver and Kunde",
      phone: "242-187-5121 x89848",
    },
    {
      type: "shop",
      id: "1",
      createdAt: "2020-02-14T03:42:30.055Z",
      name: "Kris LLC",
      address: "06832 Juliana Gateway",
    },
    {
      type: "property",
      id: "1",
      createdAt: "2020-02-13T22:02:40.647Z",
      name: "Ritchie, Little and Crooks",
      address: "98350 Herzog Burg",
    },
  ];

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
