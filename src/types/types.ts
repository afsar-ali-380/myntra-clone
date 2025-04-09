export type NavbarLinkPropsType = {
  link: {
    path: string;
    name: string;
    border: string;
    sup?: string;
  };
};

export type CategoryItemPropType = {
  item: {
    path: string;
    img: string;
  };
};

export type OfferItemPropType = {
  item: {
    path: string;
    img: string;
  };
};

export type BagItem = {
  id: string;
  image: string;
  company: string;
  item_name: string;
  original_price: number;
  current_price: number;
  discount_percentage: number;
  return_period?: number;
  delivery_date?: string;
  rating?: {
    stars?: number;
    count?: number;
  };
};

export type HomeItemPropType = {
  item: BagItem;
};

export type BagTableItemPropType = {
  item: BagItem;
};
