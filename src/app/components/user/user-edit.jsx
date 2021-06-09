import React, { useState } from 'react';
import {
  arrayOf,
  func,
  string,
} from 'prop-types';
import {
  Container,
  Card,
  CardHeader,
  CardContent,
  FormControlLabel,
  Switch,
  ThemeProvider,
  makeStyles,
} from '@material-ui/core';
import { useFormik } from 'formik';
import * as yup from 'yup';

import theme from '../../themes/theme';
import { ChplTextField } from '../util';
import { ChplActionBar } from '../action-bar';
import {
  user as userPropType,
} from '../../shared/prop-types';

const useStyles = makeStyles(() => ({
  content: {
    display: 'grid',
    gap: '8px',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'center',
  },
  dataEntry: {
    display: 'grid',
    gap: '8px',
  },
}));

const validationSchema = yup.object({
  fullName: yup.string()
    .required('Full Name is required'),
  email: yup.string()
    .required('Email is required')
    .email('Enter a valid Email'),
});

function ChplUserEdit(props) {
  /* eslint-disable react/destructuring-assignment */
  const [user] = useState(props.user);
  const [errors] = useState(props.errors);
  const classes = useStyles();
  /* eslint-enable react/destructuring-assignment */

  let formik;

  const cancel = () => {
    props.dispatch('cancel', {}, true);
  };

  const deleteUser = () => {
    console.log('deleting');
    // props.dispatch('delete', user.userId, true);
  };

  const save = () => {
    console.log('saving');
    // props.dispatch('save', user, true);
  };

  const handleDispatch = (action) => {
    switch (action) {
      case 'cancel':
        cancel();
        break;
      case 'delete':
        deleteUser();
        break;
      case 'save':
        formik.submitForm();
        //save();
        break;
        //no default
    }
  };

  formik = useFormik({
    initialValues: {
      fullName: user.fullName,
      friendlyName: user.friendlyName || '',
      title: user.title || '',
      phoneNumber: user.phoneNumber || '',
      email: user.email,
      accountLocked: user.accountLocked,
      accountEnabled: user.accountEnabled,
      passwordResetRequired: user.passwordResetRequired,
    },
    onSubmit: () => {
      save();
    },
    validationSchema,
    validateOnChange: false,
    validateOnMount: true,
  });

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Card>
          <CardHeader
            title="Edit User"
          />
          <CardContent className={classes.content}>
            <div className={classes.dataEntry}>
              <ChplTextField
                id="full-name"
                name="fullName"
                label="Full Name"
                required
                value={formik.values.fullName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.fullName && !!formik.errors.fullName}
                helperText={formik.touched.fullName && formik.errors.fullName}
              />
              <ChplTextField
                id="friendly-name"
                name="friendlyName"
                label="Friendly Name"
                value={formik.values.friendlyName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.friendlyName && !!formik.errors.friendlyName}
                helperText={formik.touched.friendlyName && formik.errors.friendlyName}
              />
              <ChplTextField
                id="title"
                name="title"
                label="Title"
                value={formik.values.title}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.title && !!formik.errors.title}
                helperText={formik.touched.title && formik.errors.title}
              />
              <ChplTextField
                id="phone-number"
                name="phoneNumber"
                label="Phone Number"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.phoneNumber && !!formik.errors.phoneNumber}
                helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
              />
              <ChplTextField
                id="email"
                name="email"
                label="Email"
                required
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && !!formik.errors.email}
                helperText={formik.touched.email && formik.errors.email}
              />
            </div>
            <div className={classes.dataEntry}>
              <div>
                <FormControlLabel
                  control={(
                    <Switch
                      id="account-locked"
                      name="accountLocked"
                      color="primary"
                      checked={formik.values.accountLocked}
                      onChange={formik.handleChange}
                    />
                  )}
                  label="Account Locked"
                />
              </div>
              <div>

                <FormControlLabel
                  control={(
                    <Switch
                      id="account-enabled"
                      name="accountEnabled"
                      color="primary"
                      checked={formik.values.accountEnabled}
                      onChange={formik.handleChange}
                    />
                  )}
                  label="Account Enabled"
                />
              </div>
              <div>
                <FormControlLabel
                  control={(
                    <Switch
                      id="password-reset-required"
                      name="passwordResetRequired"
                      color="primary"
                      checked={formik.values.passwordResetRequired}
                      onChange={formik.handleChange}
                    />
                  )}
                  label="Password change on next login"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </Container>
      <ChplActionBar
        dispatch={handleDispatch}
        errors={errors}
      />
    </ThemeProvider>
  );
}

export default ChplUserEdit;

ChplUserEdit.propTypes = {
  user: userPropType.isRequired,
  errors: arrayOf(string),
  dispatch: func,
};

ChplUserEdit.defaultProps = {
  errors: [],
  dispatch: () => {},
};
