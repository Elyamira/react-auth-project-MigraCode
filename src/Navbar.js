import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Homepage from './Home';
import Signup from './Signup';
import Signin from './Signin';
const Navbar = () => {
	return (
		<BrowserRouter>
			<div>
				<nav>
					<ul className='flex'>
						<li className='mr-6'>
							<Link to='/' className='text-black-500 hover:text-blue-800'>
								Home
							</Link>
						</li>
						<li className='mr-6'>
							<Link
								to='/sign-up/'
								className='text-black-500 hover:text-blue-800'>
								Sign-up
							</Link>
						</li>
						<li className='mr-6'>
							<Link
								to='/sign-in/'
								className='text-black-500 hover:text-blue-800'>
								Sign-in
							</Link>
						</li>
					</ul>
				</nav>
				<Route path='/' exact component={Homepage} />
				<Route path='/sign-up/' component={Signup} />
				<Route path='/sign-in/' component={Signin} />
			</div>
		</BrowserRouter>
	);
};
export default Navbar;
