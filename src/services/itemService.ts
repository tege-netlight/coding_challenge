import { apiRequest } from "./dataService";
import {
  ENDPOINT_AGENTS,
  ENDPOINT_PROPERTIES,
  ENDPOINT_SHOPS,
} from "../constants/endpoints";
import { itemTypes } from "../constants/itemTypes";

export const getProperties = async (): Promise<Item[]> => {
  const properties = await apiRequest<Item[]>({
    endpoint: ENDPOINT_PROPERTIES,
  });
  return properties.map((element) => ({
    ...element,
    type: itemTypes.property,
  }));
};

export const getAgents = async (): Promise<Item[]> => {
  const agents = await apiRequest<Item[]>({
    endpoint: ENDPOINT_AGENTS,
  });
  return agents.map((element) => ({
    ...element,
    type: itemTypes.agent,
  }));
};

export const getShops = async (): Promise<Item[]> => {
  const shops = await apiRequest<Item[]>({
    endpoint: ENDPOINT_SHOPS,
  });
  return shops.map((element) => ({
    ...element,
    type: itemTypes.shop,
  }));
};

export const getData = async (): Promise<Item[]> => {
  const properties = await getProperties();
  const agents = await getAgents();
  const shops = await getShops();
  return [...properties, ...agents, ...shops];
};
