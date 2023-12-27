import request from "@/utils/request";
import type { LoginIn, LoginOut } from "./system";

class System {
  static login(data: { code: string }) {
    return request<LoginOut>({
      url: "/user/login/wechatAuthorization",
      method: "GET",
      data,
    });
  }
}

export default System;
