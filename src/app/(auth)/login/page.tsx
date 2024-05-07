'use client';
import Button from '@/app/_components/Button';
import Container from '@/app/_components/Container';
import FlexCol from '@/app/_components/FlexCol';
import Heading from '@/app/_components/Heading';
import RowContainer from '@/app/_components/RowContainer';
import Section from '@/app/_components/Section';
import { useUserContext } from '@/app/_context/UserContext';
import FirebaseApi from '@/app/_utils/FirebaseApi';
import React from 'react';

const Login = () => {
	const firebaseApi = new FirebaseApi();
	const { setUser } = useUserContext();

	const signInWGooglePopup = async () =>
		await firebaseApi.signInWPopup(setUser);

	const submitLogin = (e: React.FormEvent) => {
		e.preventDefault();
		console.log(e);
	};
	return (
		<Section>
			<Container className='text-center'>
				<Heading level='1'>Log In</Heading>
			</Container>

			<Container>
				<RowContainer>
					<Container>
						<form onSubmit={submitLogin}>
							<div className='text-center p-3'>
								<label htmlFor='loginEmail' className='block'>
									Email
								</label>
								<input type='email' name='loginEmail' id='loginEmail' />
							</div>
							<div className='text-center p-3'>
								<label htmlFor='loginPassword' className='block'>
									Password
								</label>
								<input
									type='password'
									name='loginPassword'
									id='loginPassword'
								/>
							</div>
							<Button variant='pink'>Login</Button>
						</form>
					</Container>
					<Container>
						<Button variant='light' onClick={signInWGooglePopup}>
							Login with Google
						</Button>
					</Container>
				</RowContainer>
			</Container>
		</Section>
	);
};

export default Login;
