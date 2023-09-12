import { atom } from 'recoil';

export const selectedDateState = atom({
  key: 'selectedDateState',
  default: '',
});

export const selectedIdState = atom({
  key: 'selectedIdState',
  default: 'all',
});
