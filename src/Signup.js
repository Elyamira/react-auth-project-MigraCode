import { useState } from 'react';
import { onSignUp } from './users';

const Signup = () => {
	const [inputUserName, setInputUserName] = useState('');
	const [inputPassword, setInputPassword] = useState('');
	const [inputEmail, setInputEmail] = useState('');
	const [data, setData] = useState('');
	const body = {
		name: inputUserName,
		email: inputEmail,
		password: inputPassword,
	};

	async function handleClick() {
		const data = await onSignUp(body);
		if (data.isAuthenticated) {
			console.log('Success');
			setData(' Successfully signed up');
			setInputEmail('');
			setInputUserName('');
			setInputPassword('');
		} else setData(" We couldn't sign you up. Try again later ");

		// setData(JSON.stringify(data));
	}
	return (
		<div className='bg-white-600 shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col'>
			<div className='mb-4'>
				<label
					className='block text-gray-800 text-sm font-bold mb-2'
					htmlFor='username'>
					Username
				</label>
				<input
					className='shadow-md rounded-md border-2 overflow-hidden border-gray-300  w-full py-2 px-3 text-gray-800'
					id='username'
					type='text'
					placeholder='Username'
					onChange={(event) => setInputUserName(event.target.value)}
					value={inputUserName}
				/>
			</div>
			<div className='mb-4'>
				<label
					className='block text-gray-800 text-sm font-bold mb-2'
					htmlFor='username'>
					Email
				</label>
				<input
					className='shadow-md rounded-md border-2 overflow-hidden border-gray-300  w-full py-2 px-3 text-gray-800'
					id='username'
					type='text'
					placeholder='Username'
					onChange={(event) => setInputEmail(event.target.value)}
					value={inputEmail}
				/>
			</div>
			<div className='mb-6'>
				<label
					className='block text-grey-400 text-sm font-bold mb-2'
					htmlFor='password'>
					Password
				</label>
				<input
					className=' shadow-md rounded-md border-2 overflow-hidden border-gray-300  w-full py-2 px-3 text-gray-800'
					id='password'
					type='password'
					placeholder='******************'
					onChange={(event) => setInputPassword(event.target.value)}
					value={inputPassword}
				/>
			</div>
			<div className='flex items-center'>
				<button
					onClick={handleClick}
					className='bg-blue-400 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-md'>
					Sign up
				</button>
				<p>{data}</p>
			</div>
		</div>
	);
};

export default Signup;
