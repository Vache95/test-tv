import { GET_SHOWS } from "url/blandUrl";
import AxiosInstance from "utils/Instance";

export const getShows = () => AxiosInstance.get(GET_SHOWS);

