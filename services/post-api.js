import Client from "../lib/axios";


export async function postUpload(data , config) {
  let apiCall = await Client().post("/upload", data , config)
  return apiCall.data;
}

export async function postCreateRezerve(data) {
  let apiCall = await Client().post("/users/submit-reserve", data)
  return apiCall.data;
}