type TUserApi = {
  id: number,
  'avatar_url': string,
  'is_pro': boolean,
  name: string
};

export type TReview = {
  id: number,
  comment: string,
  date: Date,
  rating: number,
  user: TUserApi,
};
