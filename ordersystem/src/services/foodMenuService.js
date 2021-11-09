import { getRequest, postRequest, mockResult } from "./Http";
import { isMock } from "../constants";

export function getChickenMenu(content) {
  if (isMock) {
    return mockResult(require("../mock/catelogueMenu"));
  }
  return postRequest("/chickenMenuReal", content);
}
