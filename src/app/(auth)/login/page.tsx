'use client';
import Button from '@/app/_components/Button';
import Container from '@/app/_components/Container';
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

	return (
		<Section>
			<Container>
				<Container>Log In</Container>
				<Container>
					<RowContainer>
						<Container>
							<Button variant='pink'>Login</Button>
						</Container>
						<Container>
							<Button variant='pink' onClick={signInWGooglePopup}>
								Login with Google
							</Button>
						</Container>
					</RowContainer>
				</Container>
			</Container>
		</Section>
	);
};

export default Login;
