import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { AppointmentsProvider } from '@/app/_context/AppointmentsContext';
import { MenuProvider } from '@/app/_context/MenuContext';
import { CalendarProvider } from '@/app/_context/CalendarContext';

import Header from '@/app/_components/Header/Header';
import Footer from './_components/Footer';

// Styles
import 'react-calendar/dist/Calendar.css';
import '../css/output.css';
import '../css/style.css';
import { BookingProvider } from '@/app/_context/BookingWidgetCtx';
import { BookingTermsProvider } from '@/app/_context/BookingTermsContext';
import { UserProvider } from './_context/UserContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Lash Me E.',
	description: 'Lash Tech in Boston',
	category: 'beauty',
	robots: {
		index: true,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: false,
			noimageindex: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Lash Me E',
		description: 'The React Framework for the Web',
		siteId: '1467726470533754880',
		creator: '@nextjs',
		creatorId: '1467726470533754880',
		images: ['https://nextjs.org/og.png'], // Must be an absolute URL
	},
	appleWebApp: {
		title: 'Apple Web App',
		statusBarStyle: 'black-translucent',
		startupImage: [
			'/assets/startup/apple-touch-startup-image-768x1004.png',
			{
				url: '/assets/startup/apple-touch-startup-image-1536x2008.png',
				media: '(device-width: 768px) and (device-height: 1024px)',
			},
		],
	},
	appLinks: {
		// ios: {
		// 	url: 'https://nextjs.org/ios',
		// 	app_store_id: 'app_store_id',
		// },
		// android: {
		// 	package: 'com.example.android/package',
		// 	app_name: 'app_name_android',
		// },
		web: {
			url: 'https://dev.lashme3.com',
			should_fallback: true,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<CalendarProvider>
				<BookingProvider>
					<BookingTermsProvider>
						<UserProvider>
							<MenuProvider>
								<body
									className={inter.className}
									suppressHydrationWarning={true}>
									<Header />
									<main>{children}</main>
									<Footer />
								</body>
							</MenuProvider>
						</UserProvider>
					</BookingTermsProvider>
				</BookingProvider>
			</CalendarProvider>
		</html>
	);
}
