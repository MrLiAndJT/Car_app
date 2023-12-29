import request from "@/utils/request";
import type {
  CarInfoOptions,
  PartnerStoreListIn,
  PartnerStoreListOut,
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
  static CarBrandSeriesOptionList() {
    return request<any>({
      url: "/carBrandSeries/optionList",
      method: "GET",
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
}

export default Main;
