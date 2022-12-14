import { postRequest } from "../utils/apiClient";

export const useCheckUser = () => {
  const checkUser = async () => {
    await postRequest("/users/check", {});
  };
  return { checkUser };
};
