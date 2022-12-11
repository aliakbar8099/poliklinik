import Client from "../lib/axios";


export async function postUpload(data) {
  let apiCall = await Client().post("/upload", data)
  return apiCall.data;
}

export async function postCreateRezerve(data) {
  let apiCall = await Client().post("/users/submit-reserve", data)
  return apiCall.data;
}