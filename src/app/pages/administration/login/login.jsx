import React, { useEffect, useState } from 'react';
import { func, shape } from 'prop-types';
import {
  Container,
  ThemeProvider,
} from '@material-ui/core';

import theme from '../../../themes/theme';
import { getAngularService } from '../../../services/angular-react-helper';
import { ChplLogin, UserWrapper } from '../../../components/login';

function ChplLoginPage(props) {
  /* eslint-disable react/destructuring-assignment */
  const $state = getAngularService('$state');
  const $stateParams = getAngularService('$stateParams');
  const state = props.returnTo.state();
  const params = props.returnTo.params();
  const options = { ...props.returnTo.options(), reload: true };
  const [resetToken, setResetToken] = useState('');
  /* eslint-enable react/destructuring-assignment */

  useEffect(() => {
    if ($stateParams.token) {
      setResetToken($stateParams.token);
    }
  }, [$stateParams]);

  const handleLogin = (action) => {
    if (action === 'loggedIn') {
      $state.go(state, params, options);
    }
  };

  return (
    <UserWrapper>
      <ThemeProvider theme={theme}>
        <Container id="login-component">
          <ChplLogin
            dispatch={handleLogin}
            resetToken={resetToken}
          />
        </Container>
      </ThemeProvider>
    </UserWrapper>
  );
}

export default ChplLoginPage;

ChplLoginPage.propTypes = {
  returnTo: shape({
    state: func.isRequired,
    params: func.isRequired,
    options: func.isRequired,
  }).isRequired,
};
