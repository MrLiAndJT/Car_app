import request from "@/utils/request";
import type {
  CarInfoOptions,
  PartnerStoreListIn,
  PartnerStoreListOut,
  UserOrderIn,
} from "./main";

class Main {
  // 获取汽车品牌选项列表
  static CarBrandOptionList() {
    return request<CarInfoOptions[]>({
      url: "/carBrand/optionList",
      method: "GET",
    });
  }
  // 获取品牌下的系列
  static CarBrandSeriesOptionList(data: { brandId: number }) {
    return request<CarInfoOptions[]>({
      url: "/carBrandSeries/optionList",
      method: "GET",
      data,
    });
  }
  // 获取附近门店
  static partnerStoreList(data: PartnerStoreListIn) {
    return request<PartnerStoreListOut[]>({
      url: "/partnerStore/list",
      method: "GET",
      data,
    });
  }
  // 创建用户订单
  static userOrder(data: UserOrderIn) {
    return request<{ newId: number }>({
      url: "/userOrder",
      method: "POST",
      data,
    });
  }
  // 获取订单列表
  static userOrderList() {
    return request<any>({
      url: "/userOrder/list",
      method: "GET",
    });
  }
}

export default Main;
