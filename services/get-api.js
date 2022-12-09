import Client from "../lib/axios";


export async function getUser(data) {
  let apiCall = await Client().get("/get-user", data)
  return apiCall.data;
}

export async function getAllDoctor() {
  let apiCall = await Client().get("/admin/doctor")
  return apiCall.data;
}

export async function getSingleDoctor(id) {
  let apiCall = await Client().get("/admin/doctor?id=" + id)
  return apiCall.data;
}

export async function getTimeReserve(nnId) {
  let apiCall = await Client().get("/admin/reserve-time?nnId=" + nnId)
  return apiCall.data;
}

export async function getTimeReserveComplet(number , nCode , tiemValue) {
  let apiCall = await Client().get(`http://localhost:3000/api/admin/rezerve-status?number=${number}&nCode=${nCode}&timeValue=${tiemValue}`)
  return apiCall.data;
}
