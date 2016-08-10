import React from 'react';
import Link from 'react-router'
import {SERVER_ROUTE} from '../lib/constants'

const Login = (props) => (<a href={`${SERVER_ROUTE}/login`}>{props.children}</a>);

export default Login;
