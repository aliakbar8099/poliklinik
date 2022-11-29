import Client from "../lib/axios";

const sub_baseUrl = "/auth"


export async function postRegister(data) {
    let apiCall = await Client().post(sub_baseUrl + "/register", data)
    return apiCall.data;
  }