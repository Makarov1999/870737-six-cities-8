import { ChangeEvent, FormEvent } from 'react';
import { Ratings } from './comment-form.constants';
type TCommentFormProps = {
  onReviewTextChange: (value: string) => void,
  onRatingChange: (value: number) => void,
  isCommentFormButtonDisabled: boolean,
  onSubmitCommentForm: VoidFunction,
  rating?: number,
  reviewText: string,
};
function CommentForm({onReviewTextChange, onRatingChange, onSubmitCommentForm, isCommentFormButtonDisabled, rating, reviewText}: TCommentFormProps): JSX.Element {
  const handleRatingChange = (e: ChangeEvent<HTMLInputElement>): void => {
    onRatingChange(+e.target.value);
  };
  const handleCommentTextChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    onReviewTextChange(e.target.value);
  };
  const handleCommentFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmitCommentForm();
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleCommentFormSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating" onChange={handleRatingChange}>
        <input className="form__rating-input visually-hidden" name="rating" defaultValue={5} id="5-stars" type="radio" defaultChecked={rating === Ratings.Perfect}/>
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" name="rating" defaultValue={4} id="4-stars" type="radio" defaultChecked={rating === Ratings.Good}/>
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" name="rating" defaultValue={3} id="3-stars" type="radio" defaultChecked={rating === Ratings.NotBad}/>
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" name="rating" defaultValue={2} id="2-stars" type="radio" defaultChecked={rating === Ratings.Badly}/>
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" name="rating" defaultValue={1} id="1-star" type="radio" defaultChecked={rating === Ratings.Terribly}/>
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" value={reviewText}
        onChange={handleCommentTextChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isCommentFormButtonDisabled}>Submit</button>
      </div>
    </form>
  );
}

export default CommentForm;
