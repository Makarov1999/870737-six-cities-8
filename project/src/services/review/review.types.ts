import { TReview } from '../../types/review';

export type TSuccessCommentsFunction = (data: TReview[]) => void;
export type TSuccessCommentsSendFunction = (data: TReview[]) => void;
