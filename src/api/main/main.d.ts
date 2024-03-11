export type CarInfoOptions = {
  id: number;
  label: string;
  pinyin: string;
};

// 获取附近门店入参
export type PartnerStoreListIn = {
  address: string;
  limitGap: number;
};

// 获取附近门店出参
export type PartnerStoreListOut = {
  id: number;
  title: string;
  fullAddress: string;
  gap: number;
  unit: string;
};

export type UserOrderIn = {
  carOwnerName: string;
  carOwnerPhoneNumber: string;
  carOwnerLongitude: number;
  carOwnerLatitude: number;
  carOwnerMultiLvAddr: string;
  carOwnerFullAddress: string;
  carBrandId: number;
  carBrandName?: string;
  carSeriesId: number;
  carSeriesName?: string;
  requirements: string;
  agreeToTerms: 0 | 1 | [0 | 1];
  id?: number;
  updatedAt?: string;
  orderNumber?: string;
  orderStatus?: string;
};

export type OrderListOut = {
  createdAt: string;
  deletable: boolean;
  id: number;
  orderNumber: string;
  orderStatus: string;
  partnerStore: string;
  requirements: string;
  updatedAt: string;
};

export type CarReplacementListOut = {
  id: number;
  title: string;
  estF32Price: number;
  estU64Price: number;
  counter: number;
  children?: CarReplacementListOut[];
};
