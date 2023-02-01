import api from "../../api/api";

export const loginWithAuthentik = async (provider) => {
    try {
      await api.loginWithAuthentik();
    } catch(error) {
      console.log(error.message);
    }
}