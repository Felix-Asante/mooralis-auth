import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import nft from "public/nft.png";
import Header from "src/components/Header";

const Home: NextPage = () => {
	return (
		<header className={styles.header}>
			<Header />
			<div className="container">
				<main className={styles.hero}>
					<div className={styles.hero_text}>
						<h2>Discover Digital Art, Collect & Sell Specific NFTs.</h2>
					</div>
					<div className={styles.hero_img}>
						<Image src={nft} alt="nft" layout="fill" />
					</div>
				</main>
			</div>
		</header>
	);
};

export default Home;
