import { Price } from "../store/ducks/price/contracts/state"

export const filterPriceCategory = (arrCategories: Price[], category: string) => {
    const arr = arrCategories.filter(item => item?.category === category)
    return arr
}