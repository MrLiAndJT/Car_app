import request from "@/utils/request";

class Main {
  // 获取汽车品牌选项列表
  static CarBrandOptionList() {
    return request<any>({
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
}

export default Main;
