type RequestParams = {
  endpoint: string;
};

export const apiRequest = async <T>({
  endpoint,
}: RequestParams): Promise<Item[]> => {
  try {
    const response = await fetch(endpoint, {
      method: "GET",
    });
    if (!response.ok) {
      throw response.status;
    }
    return await response.json();
  } catch (e) {
    console.log(`Error fetching ${endpoint}`);
    throw e;
  }
};
