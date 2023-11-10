import { axiosClient } from "./axiosClient";

export const getDataFunction = async (data) => {
  try {
    const arrayData = await Promise.all(
      data.map(async (item) => ({
        [item.dataName]: (await axiosClient.get(item.apiLink)).data,
      })),
    );
    return Object.assign({}, ...arrayData);
  } catch (error) {
    const arrayData = data.map((item) => ({ [item.dataName]: [] }));
    return Object.assign({}, ...arrayData);
  }
};
