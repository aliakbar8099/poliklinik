import Client from "../lib/axios";


export async function getUser(data) {
  let apiCall = await Client().get("/get-user", data)
  return apiCall.data;
}

export async function getAllDoctor(data) {
  let apiCall = await Client().get("/admin/doctor", data)
  return apiCall.data;
}

export async function getSingleDoctor(id) {
  let apiCall = await Client().get("/admin/doctor?id=" + id)
  return apiCall.data;
}
