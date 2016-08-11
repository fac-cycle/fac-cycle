import React from 'react';
import Link from 'react-router'
import {SERVER_ROUTE} from '../lib/constants'

const Login = (props) => (<a href='http://localhost:3000/login'>{props.children}</a>);

export default Login;
