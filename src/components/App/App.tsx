import React, { FC } from "react";
import { ListWrapper } from "../ListWrapper";
import styled from "styled-components";

type AppProps = {
  className?: string;
};

export const App: FC<AppProps> = ({ className }) => {
  return (
    <div className={className}>
      <ListWrapper />
    </div>
  );
};

export const StyledApp = styled(App)`
  display: flex;
  justify-content: center;
`;
