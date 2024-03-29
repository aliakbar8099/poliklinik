import Client from "../lib/axios";


export async function getUser(data) {
  let apiCall = await Client().get("/user", data)
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
  let apiCall = await Client().get(`/admin/rezerve-status?number=${number}&nCode=${nCode}&timeValue=${tiemValue}`)
  return apiCall.data;
}

export async function getListMyReserve(nCodeU) {
  let apiCall = await Client().get(`/users/submit-reserve?nCodeUser=${nCodeU}`)
  return apiCall.data;
}
export async function getMainProps() {
  let apiCall = await Client().get('/admin/main-page')
  return apiCall.data;
}
