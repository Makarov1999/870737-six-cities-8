type TUser = {
  id: number,
  avatarUrl: string,
  isPro: boolean,
  name: string
}
export type TReview = {
  id: number,
  comment: string,
  date: string,
  rating: number,
  user: TUser,
};
