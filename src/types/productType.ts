export type ProductType = {
  id: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  reviews: {
    reviewerName: string;
    comment: string;
    rating: number;
    date: string;
  }[];
  img_url: string;
};
