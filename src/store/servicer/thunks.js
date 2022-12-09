import { apiUrl } from "../../config/constants";
import axios from "axios";
import { loadList, loadServicer } from "./slice";

export const getServicerList = (area) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.post(`${apiUrl}/servicer/`, { area });
      dispatch(loadList(response.data));
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
      } else {
        console.log(error);
      }
    }
  };
};
