import React, { useEffect, useRef, useState } from "react";
import { useMoralis } from "react-moralis";
import Header from "src/components/Header";

export default function Profile() {
	const { user, setUserData, Moralis } = useMoralis();
	const fileInputRef = useRef<any>(null);
	const [saving, setSaving] = useState(false);

	const [address, setAddress] = useState<string>("");
	useEffect(() => {
		setAddress(user?.attributes.ethAddress);
	}, [user]);
	// console.log(user?.attributes);

	const saveProfilePhoto = async () => {
		try {
			setSaving(true);
			const photo = fileInputRef?.current?.files[0];
			const file: any = new Moralis.File("photo", photo);
			await file.saveIPFS();
			setUserData({
				avatar: file.ipfs(),
			});
		} catch (err) {
			console.log(err);
		} finally {
			setSaving(false);
		}
	};
	return (
		<div>
			<Header />
			<div className="container">
				<h1>Profile Page</h1>

				<p>
					Wallet address: {address?.slice(0, 4)}
					....{address?.substr(address.length - 4)}
				</p>

				<div className="profile_photo">
					{!saving && (
						<input
							type="file"
							name="avatar"
							onChange={saveProfilePhoto}
							ref={fileInputRef}
						/>
					)}
					{saving && <p>Saving....</p>}
				</div>
			</div>
		</div>
	);
}
