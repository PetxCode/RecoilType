import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";
import axios from "axios";

const url = "https://fakestoreapi.com/products";

interface AUTH {
  name: string;
  email: string;
}

interface IData {
  rate: number;
  count: number;
}

interface Data {
  id: number;
  title: string;
  price: number;
  descritpion: string;
  category: string;
  image: string;
  rating: IData;
  qty?: number;
}

interface MyData {
  id: number;
  title: string;
  price: number;
  descritpion: string;
  category: string;
  image: string;
  rating: IData;
  //    QTY?: number;
}

interface GETDATA extends MyData {
  QTY?: number;
}

const { persistAtom } = recoilPersist();

export const authData = atom<AUTH>({
  key: "authData",
  default: (null as null) || ({} as AUTH),
  effects_UNSTABLE: [persistAtom],
});

export const storeData = selector({
  key: "storeData",
  get: async () => {
    const data = await axios.get(url);
    const newData = data.data as Array<Data>;
    return newData || [];
  },
});

export const storeMyData = selector({
  key: "storeMyData",
  get: async () => {
    const data = await axios.get(url);
    const newData = data.data as Array<MyData>;
    return newData || [];
  },
});

export const cartData = atom({
  key: "cartData",
  default: [] as Array<GETDATA>,
});

export const total = atom({
  key: "total",
  default: [],
});
