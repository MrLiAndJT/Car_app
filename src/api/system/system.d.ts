export type LoginIn = {
  username: string;
  password: string;
  remember: boolean;
  code: string;
  uuid: string;
};

export type LoginOut = {
  token: string;
};
