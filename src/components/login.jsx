/* eslint-disable react/prefer-stateless-function, react/prop-types */
import React from 'react';
import { SERVER_ROUTE } from '../lib/constants';

const Login = (props) => (<a href={`${SERVER_ROUTE}/login`}>{ props.children }</a>);

export default Login;
