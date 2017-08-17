import {Like} from './like';

export interface Entry {
  id: number;
  title: string;
  img_src: string;
  liked_by: Like[];
}
