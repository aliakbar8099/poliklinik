import Client from "../lib/axios";


export async function postUpload(data) {
  let apiCall = await Client().post("/upload", data)
  return apiCall.data;
}