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
  carSeriesId: number;
  requirements: string;
  agreeToTerms: 0 | 1;
};
