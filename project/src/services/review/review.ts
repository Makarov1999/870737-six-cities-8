import { api } from '../../index';
import { adaptToClient } from '../../adapters/adapt-to-client';
import { TReview } from '../../types/review';
import { TReviewApi } from '../../types/review-api';
import { APIRoutes } from '../api/api.constants';
import { TSuccessCommentsFunction, TSuccessCommentsSendFunction } from './review.types';
import { TCommentBody } from '../../types/comment-body';

export const getReviewsByOfferId = async (offerId: string, onSuccess: TSuccessCommentsFunction, onError: VoidFunction): Promise<void> => {
  try {
    const { data } = await api.get<TReviewApi[]>(`${APIRoutes.Comments}/${offerId}`);
    const reviews = data.map((review) => adaptToClient<TReviewApi, TReview>(review));
    onSuccess(reviews);
  }
  catch {
    onError();
  }
};

export const sendCommentByOfferId = async (offerId: string, commentBody: TCommentBody, onSuccess: TSuccessCommentsSendFunction, onError: VoidFunction) => {
  try {
    const{ data } = await api.post<TReviewApi[]>(`${APIRoutes.Comments}/${offerId}`, commentBody);
    const reviews = data.map((review) => adaptToClient<TReviewApi, TReview>(review));
    onSuccess(reviews);
  }
  catch {
    onError();
  }
};
