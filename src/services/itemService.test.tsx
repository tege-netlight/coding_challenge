import * as dataService from "./dataService";
import { getAgents } from "./itemService";
import { ENDPOINT_AGENTS } from "../constants/endpoints";

jest.mock("./dataService");
const apiRequest = (dataService as jest.Mocked<typeof dataService>).apiRequest;

describe("ItemService", () => {
  it("should retrieve Agents from the API", async () => {
    const agents = [
      {
        id: "1",
        createdAt: "2020-02-14T09:44:36.374Z",
        name: "Clifford Prosacco",
        shop: "Conroy, MacGyver and Kunde",
        phone: "242-187-5121 x89848",
      },
    ];
    apiRequest.mockResolvedValue(agents);
    const expected = [
      {
        type: "agent",
        id: "1",
        createdAt: "2020-02-14T09:44:36.374Z",
        name: "Clifford Prosacco",
        shop: "Conroy, MacGyver and Kunde",
        phone: "242-187-5121 x89848",
      },
    ];

    const response = await getAgents();
    expect(apiRequest).toHaveBeenCalledWith({ endpoint: ENDPOINT_AGENTS });
    expect(response).toEqual(expected);
  });
});
