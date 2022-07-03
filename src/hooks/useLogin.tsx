import { useMoralis } from "react-moralis";
export default function useLogin() {
	const { authenticate } = useMoralis();
	const login = async () => {
		// if (isAuthenticated) return { message: "Already sign in" };
		try {
			const user = await authenticate({
				provider: "web3Auth",
				clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
				appLogo:
					"https://cwstatic.nyc3.digitaloceanspaces.com/4789/NFT-Showroom-Logo.png?v=1615898171",
				chainId: 3,
				signingMessage: "Connect to moment",
			});

			return { user: user?.attributes };
		} catch (err) {
			return err;
		}
	};
	return login;
}
