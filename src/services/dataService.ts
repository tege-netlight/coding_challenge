type RequestParams = {
  endpoint: string;
};

export const apiRequest = async <T>({
  endpoint,
}: RequestParams): Promise<T> => {
  try {
    const response = await fetch(endpoint, {
      method: "GET",
    });
    return await response.json();
  } catch (e) {
    console.log(`Error fetching ${endpoint}`);
    throw e;
  }
};
