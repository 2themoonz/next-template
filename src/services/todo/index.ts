import { APICore } from "@/services/apiCore";

const api = new APICore();

export const getAllTodo = () => {
  return api.get("/todos", {});
};
