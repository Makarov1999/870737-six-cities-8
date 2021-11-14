type TUserApi = {
  id: number,
  'avatar_url': string,
  'is_pro': boolean,
  name: string
};

export type TReviewApi = {
  id: number,
  comment: string,
  date: string,
  rating: number,
  user: TUserApi,
};
