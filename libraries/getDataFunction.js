import { axiosClient } from "./axiosClient";

// Check if a URL has 'https' protocol
function hasHttps(url) {
  return url.startsWith("https");
}

// Filter data based on 'https' images
const filterData = (data) => {
  return data.filter((item) => {
    const imageUrl = item.image || (item.images && item.images[0]);
    return imageUrl && hasHttps(imageUrl);
  });
};

export const getDataFunction = async (data) => {
  try {
    const arrayData = await Promise.all(
      data.map(async (item) => {
        try {
          const { data: newData } = await axiosClient.get(item.apiLink);
          const updateOne = filterData(newData);
          return { [item.dataName]: updateOne };
        } catch (error) {
          return { [item.dataName]: [] };
        }
      }),
    );

    return arrayData.reduce((acc, obj) => ({ ...acc, ...obj }), {});
  } catch (error) {
    return data.reduce((acc, item) => ({ ...acc, [item.dataName]: [] }), {});
  }
};
