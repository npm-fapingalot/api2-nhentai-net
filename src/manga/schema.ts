import { IData, ITitled } from '../schema.base';

export type ID = number

export interface IManga extends IData<ID>, ITitled {
  favorite: number;
  coverURL: string;
}
