import {ShopActionTypes} from './shop.types';

export const UpdateCollection=(collections)=>({
    type:ShopActionTypes.UPDATE_COLLECTIONS,
    payload:collections
});