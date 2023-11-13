import { axiosClient } from "./axiosClient";

function hasHttps(url) {
  return url.includes("https");
}

const configData = (data) => {
  const newData = data.filter((item) => {
    if (item.image) {
      return hasHttps(item.image);
    }
    if (item.images && item.images[0]) {
      return hasHttps(item.images[0]);
    }
    // Return false if neither condition is met
    return false;
  });

  return newData;
};

export const getDataFunction = async (data) => {
  try {
    const arrayData = await Promise.all(
      data.map(async (item) => {
        const { data: newData } = await axiosClient.get(item.apiLink);
        const updateOne = configData(newData);
        return { [item.dataName]: updateOne };
      }),
    );
    return Object.assign({}, ...arrayData);
  } catch (error) {
    const arrayData = data.map((item) => ({ [item.dataName]: [] }));
    return Object.assign({}, ...arrayData);
  }
};
