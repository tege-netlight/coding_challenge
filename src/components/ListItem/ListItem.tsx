import React, { FC } from "react";
import styled from "styled-components";
import { Card, Typography } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import StoreIcon from "@material-ui/icons/Store";
import HomeIcon from "@material-ui/icons/Home";
import { itemTypes } from "../../constants/itemTypes";
import { StyledIcon } from "./StyledIcon";
import { DetailsWrapper } from "./DetailsWrapper";

type ListItemProps = {
  className?: string;
  item: Item;
};

const ListItem: FC<ListItemProps> = ({ className, item }) => {
  const getIcon = (type: string) => {
    switch (type) {
      case itemTypes.agent:
        return <PersonIcon fontSize="large" />;
      case itemTypes.shop:
        return <StoreIcon fontSize="large" />;
      case itemTypes.property:
        return <HomeIcon fontSize="large" />;
    }
  };

  return (
    <Card className={className}>
      <StyledIcon>{getIcon(item.type)}</StyledIcon>
      <DetailsWrapper>
        <Typography>{item.name}</Typography>
        <Typography>
          {item.type === itemTypes.agent ? item.shop : item.address}
        </Typography>
        <Typography>{item.type === itemTypes.agent && item.phone}</Typography>
      </DetailsWrapper>
    </Card>
  );
};

export const StyledListItem = styled(ListItem)`
  display: flex;
  height: 100px;
  margin-top: 10px;
  margin-bottom: 10px;
  border: 1px solid black;
`;
