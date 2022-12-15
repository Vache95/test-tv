import { GET_SHOWS, GET_SHOWS_INFO } from 'url/blandUrl';
import AxiosInstance from 'utils/Instance';

export const getShows = () => AxiosInstance.get(GET_SHOWS);
export const getShowsFilm = (id) => AxiosInstance.get(GET_SHOWS_INFO(id));
