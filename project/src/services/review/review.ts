import { api } from '../../index';
import { adaptToClient } from '../../adapters/adapt-to-client';
import { TReview } from '../../types/review';
import { TReviewApi } from '../../types/review-api';
import { APIRoutes } from '../api/api.constants';
import { TCommentBody } from '../../types/comment-body';

export const getReviewsByOfferId = async (offerId: string): Promise<TReview[]> => {
  const { data } = await api.get<TReviewApi[]>(`${APIRoutes.Comments}/${offerId}`);
  const reviews = data.map((review) => adaptToClient<TReviewApi, TReview>(review));
  return reviews;
};

export const sendCommentByOfferId = async (offerId: string, commentBody: TCommentBody) => {
  const{ data } = await api.post<TReviewApi[]>(`${APIRoutes.Comments}/${offerId}`, commentBody);
  const reviews = data.map((review) => adaptToClient<TReviewApi, TReview>(review));
  return reviews;
};
