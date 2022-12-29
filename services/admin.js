import Client from "../lib/axios";

const sub_baseUrl = "/admin"

export async function getCategory() {
  let apiCall = await Client().get(sub_baseUrl + "/category")
  return apiCall.data;
}

export async function postCategory(data) {
  let apiCall = await Client().post(sub_baseUrl + "/category", data)
  return apiCall.data;
}

export async function postMainProps(data) {
  let apiCall = await Client().post(sub_baseUrl + "/main-page", data)
  return apiCall.data;
}

export async function removeCategory(id) {
  let apiCall = await Client().delete(sub_baseUrl + "/category?id=" + id)
  return apiCall.data;
}

export async function postDoctor(data) {
  let apiCall = await Client().post(sub_baseUrl + "/doctor", data)
  return apiCall.data;
}
export async function postReserveTime(data) {
  let apiCall = await Client().post(sub_baseUrl + "/reserve-time", data)
  return apiCall.data;
}
