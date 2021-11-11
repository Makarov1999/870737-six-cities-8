import Logo from '../logo/logo';
import {connect, ConnectedProps} from 'react-redux';
import { TRootState } from '../../store/reducer';
import { ChangeEvent, Dispatch, FormEvent, useEffect, useState } from 'react';
import { TActions, TThunkActionDispatch} from '../../types/action';
import { TAuthData } from '../../types/auth-data';
import { loginAction } from '../../store/api-actions';
import { AuthStatuses } from '../../global.constants';
import { useHistory } from 'react-router';
import { AppRoutes } from '../app/app.constants';
import './login.css';
import { PASSWORD_PATTERN } from './login.constants';

const mapStateToProps = ({ user }: TRootState) => ({
  authorizationStatus: user.authorizationStatus,
});

const mapDispatchToProps = (dispatch: Dispatch<TActions>) => ({
  onLoginFormSubmit(authData: TAuthData) {
    return (dispatch as TThunkActionDispatch)(loginAction(authData));
  },
});
const loginConnector = connect(mapStateToProps, mapDispatchToProps);
type TLoginConnectedProps = ConnectedProps<typeof loginConnector>;

function Login({authorizationStatus, onLoginFormSubmit}: TLoginConnectedProps): JSX.Element {
  useEffect(() => {
    if (authorizationStatus === AuthStatuses.Auth) {
      history.push(AppRoutes.Main);
    }
  },[authorizationStatus]);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const [loginFormError, setLoginFormError] = useState<string>('');
  const onLoginError = () => {
    setLoginFormError('Произошла ошибка выполнении запроса');
  };
  const handleLoginFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoginFormError('');
    if (email && password) {
      if (password.match(PASSWORD_PATTERN)) {
        onLoginFormSubmit({
          email,
          password,
        }).catch(() => {
          onLoginError();
        });
      } else {
        setLoginFormError('Password must include 1 letter and 1 number at least');
      }
    }
  };
  return (
    <>
      <div style={{display: 'none'}}>
        <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path></symbol></svg>
      </div>

      <div className="page page--gray page--login">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Logo/>
              </div>
            </div>
          </div>
        </header>

        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <form className="login__form form" action="#" method="post" onSubmit={handleLoginFormSubmit}>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">E-mail</label>
                  <input onChange={handleEmailChange} value={email} className="login__input form__input" type="email" name="email" placeholder="Email" required/>
                </div>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">Password</label>
                  <input onChange={handlePasswordChange} value={password} className="login__input form__input" type="password" name="password" placeholder="Password" required/>
                  {loginFormError ? <p className="login-form-message--error">{loginFormError}</p> : ''}
                </div>
                <button className="login__submit form__submit button" type="submit">Sign in</button>
              </form>
            </section>
            <section className="locations locations--login locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>Amsterdam</span>
                </a>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}

export default loginConnector(Login);
