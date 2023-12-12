import request from "@/utils/request";
import type { LoginIn, LoginOut } from "./system";

class System {
  static login(data: LoginIn) {
    return request<LoginOut>({
      url: "/login",
      method: "POST",
      data,
    });
  }
}

export default System;
