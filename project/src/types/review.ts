type TUser = {
  id: number,
  avatarUrl: string,
  isPro: boolean,
  name: string
}
export type TReview = {
  id: number,
  comment: string,
  date: Date,
  rating: number,
  user: TUser,
};
