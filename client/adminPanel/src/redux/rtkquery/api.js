import baseApi from "../../config/interceptors";

const customBaseQuery = async ({ url, method, data, params }) => {
  try {
    const response = await baseApi({
      url,
      method,
      data,
      params,
    });
    return { data: response.data };
  } catch (error) {
    return { error: error.response ? error.response.data : error.message };
  }
};
export default customBaseQuery;