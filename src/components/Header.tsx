import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMoralis } from "react-moralis";
import useLogin from "src/hooks/useLogin";
import styles from "../../styles/Home.module.css";
import avatar from "public/user.jpg";
export default function Header() {
	const { logout, isAuthenticated, user } = useMoralis();
	const router = useRouter();

	const login = useLogin();
	const loginHandler = async () => {
		await login();
	};
	const logoutHandler = () => {
		logout();
		router.push("/");
	};
	return (
		<nav className={styles.nav}>
			<Link href="/">Mo:men:t</Link>
			<div>
				{!isAuthenticated && (
					<button onClick={loginHandler}>Connect wallet</button>
				)}
				{isAuthenticated && (
					<div className={styles.actions}>
						<button onClick={logoutHandler}>Logout</button>
						<Link href="/profile" passHref>
							<Image
								src={user?.attributes.avatar || avatar}
								alt={user?.attributes.username}
								className={styles.avatar}
								width={40}
								height={40}
								objectFit="cover"
							/>
						</Link>
					</div>
				)}
			</div>
		</nav>
	);
}
