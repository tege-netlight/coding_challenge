import React, { FC } from "react";
import styled from "styled-components";

type ListWrapperProps = {
  className?: string;
};

const ListWrapper: FC<ListWrapperProps> = ({ className }) => {
  return <div className={className} />;
};

export const StyledListWrapper = styled(ListWrapper)`
  width: 500px;
  height: 100vh;
`;
