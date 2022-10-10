export type UserInfo = {
  name: string;
  email: string;
};

export interface AccountModel {
  token: string;
  _id: string;
  name: string;
  email: string;
}

export interface AuthContextData {
  auth?: AccountModel;
  signIn: (authData: AccountModel) => void;
  signOut: () => Promise<void>;
  updateUserInfo: (data: UserInfo) => void;
  loading: boolean;
}

export enum StorageKeys {
  Token = "@fastpizza:authData",
}
