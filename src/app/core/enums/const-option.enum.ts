import { IDropdownSettings } from 'ng-multiselect-dropdown';
export const FM_LANG = 'fm_lng';
export const EN_LANG = 'en';

export const SINGLE_SELECT_CONFIG_WITH_SEARCH: IDropdownSettings = {
  singleSelection: true,
  idField: 'id',
  textField: 'name',
  itemsShowLimit: 1,
  allowSearchFilter: true,
  enableCheckAll: false,
  closeDropDownOnSelection: true,
  noDataAvailablePlaceholderText: 'No data available'
};

export const SINGLE_SELECT_CONFIG_WITHOUT_SEARCH: IDropdownSettings = {
  singleSelection: true,
  idField: 'id',
  textField: 'name',
  itemsShowLimit: 1,
  allowSearchFilter: false,
  enableCheckAll: false,
  closeDropDownOnSelection: true,
  noDataAvailablePlaceholderText: 'No data available'
};


export const MULTI_SELECT_CONFIG_WITH_SEARCH: IDropdownSettings = {
  singleSelection: false,
  idField: 'id',
  textField: 'name',
  itemsShowLimit: 1,
  allowSearchFilter: true,
  enableCheckAll: false,
  showSelectedItemsAtTop: true,
  noDataAvailablePlaceholderText: 'No data available'
};

export const MULTI_SELECT_CONFIG_WITHOUT_SEARCH: IDropdownSettings = {
  singleSelection: false,
  idField: 'id',
  textField: 'name',
  itemsShowLimit: 1,
  allowSearchFilter: false,
  enableCheckAll: false,
  showSelectedItemsAtTop: true,
};

export const MULTI_SELECT_CONFIG_WITHOUT_SEARCH_TWO_ITEM: IDropdownSettings = {
  singleSelection: false,
  idField: 'id',
  textField: 'name',
  itemsShowLimit: 2,
  allowSearchFilter: false,
  enableCheckAll: false,
  showSelectedItemsAtTop: true,
  noDataAvailablePlaceholderText: 'No data available'
};

export const LANGUAGE_LIST = [
  { id: 'en', name: 'English'},
  { id: 'la', name: 'Latin'},
  { id: 'es', name: 'Spanish'},
  { id: 'pt', name: 'Portuguese'},
  { id: 'de', name: 'German'}
];

export const MASS_UNIT = [
  { id: 'lb', name: 'lb'}
];

export const DIMENTION_UNIT = [
  { id: 'cm', name: 'cm'},
  { id: 'in', name: 'in'},
  { id: 'ft', name: 'ft'},
  { id: 'mm', name: 'mm'},
  { id: 'm', name: 'm'},
  { id: 'yd', name: 'yd'}
];

export const COMMON_CONFIG = {
  tokenKey: 'music-add-demo-token',
  contentType: 'Content-Type',
  isIpChecked: 'is_ip_checked',
  applicationJson: 'application/json',
  imagePath: '../assets/images',
  new: 'new',
  frontendUrls: {
    detail: '/detail'
  },
  ApiUrls: {
    recent: '/recently.json',
    popular: '/popular.json',
    favorite: '/favorite.json',
    top: '/top.json',
    newMusic: '/new.json',
  }
}