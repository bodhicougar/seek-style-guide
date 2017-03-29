import styles from './SignInRegister.less';

import React, { PropTypes } from 'react';

import ScreenReaderOnly from '../../ScreenReaderOnly/ScreenReaderOnly';

export default function SignInRegister({ linkRenderer, returnUrl }) {
  const urlSuffix = returnUrl ? `?returnUrl=${encodeURIComponent(returnUrl)}` : '';

  return (
    <nav
      aria-labelledby="SignInOrRegister"
      data-automation="sign-in-register"
      className={styles.root}>

      <ScreenReaderOnly>
        <h1 id="SignInOrRegister">Sign in or register</h1>
      </ScreenReaderOnly>
      {
        linkRenderer({
          'data-analytics': 'sign-in',
          href: `/Login/Standalone${urlSuffix}`,
          className: styles.link,
          title: 'Sign in',
          children: 'Sign in'
        })
      }
      {' or '}
      {
        linkRenderer({
          'data-analytics': 'register',
          href: `/Register/Standalone${urlSuffix}`,
          className: styles.link,
          title: 'Register',
          children: 'Register'
        })
      }
    </nav>
  );
}

SignInRegister.propTypes = {
  linkRenderer: PropTypes.func.isRequired,
  returnUrl: PropTypes.string
};
