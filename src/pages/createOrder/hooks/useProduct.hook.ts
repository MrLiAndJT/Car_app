import { ref, reactive } from "vue";
import type { CarReplacementListOut } from "@/api/main/main.d";
import Main from "@/api/main";
import { cloneDeep } from "lodash-es";

const useProductHook = (id: number) => {
  // 是否打开产品选择弹窗
  const showProSelect = ref(false);
  // 是否加载中
  const proIsListLoading = ref(false);
  // 后端获取回来的产品列表
  const productList = ref<CarReplacementListOut[]>([]);

  // picker 实例
  const pickerRef = ref();

  // 渲染picker列的数组
  const columns = ref<CarReplacementListOut[][]>([]);

  // 记录每次选择的列的index
  const indexList = [0, 0, 0];

  // 获取产品列表
  const getProductList = async () => {
    proIsListLoading.value = true;
    const { data } = await Main.carReplacementList(id);
    proIsListLoading.value = false;
    if (!Array.isArray(data)) {
      return;
    }
    productList.value = data;
    columns.value[0] = cloneDeep(productList.value);
    columns.value[1] = getColumns(cloneDeep(productList.value), 0);
    columns.value[2] = getColumns(
      cloneDeep(productList.value[0]?.children) || [],
      0
    );
  };

  // 获取columns列
  const getColumns = (data: CarReplacementListOut[], index: number) => {
    if (
      !Array.isArray(data[index].children) ||
      data[index].children?.length === 0
    ) {
      // 非数组或数组里的内容为空
      return [];
    }
    return cloneDeep(data[index].children) || [];
  };

  const changeHandler = (e: {
    columnIndex: number; // 列的index(第几列改变)
    value: CarReplacementListOut[]; // [1, 2, 3] 列的数据, 以数组的形式展示，数组第一位是第一列的数据，第二位是第二列的数据，第三位是第三列的数据
    index: number; // 改变的那一列，选择的第几位
    values: CarReplacementListOut[][];
  }) => {
    const { columnIndex, value, values, index } = e;
    indexList[columnIndex] = index;
    if (columnIndex === 0) {
      // 第一列改变
      columns.value[1] = getColumns(values[0], index);
      const index0 = indexList[0];
      const index1 = indexList[1];
      columns.value[2] =
        productList.value?.[index0]?.children?.[index1].children || [];
    } else if (columnIndex === 1) {
      // 第二列改变
      columns.value[2] = getColumns(value || [], 1);
    }
  };

  const confirmPro = (e: {
    indexs: number[];
    value: CarReplacementListOut[];
    values: CarReplacementListOut[][];
  }) => {
    console.log("confirm", e);
    showProSelect.value = false;
  };

  const pickerCancel = () => {
    showProSelect.value = false;
  };

  // 处理产品列表数据
  return {
    showProSelect,
    proIsListLoading,
    getProductList,
    pickerCancel,
    columns,
    changeHandler,
    confirmPro,
    pickerRef,
  };
};

export { useProductHook };
