"use client";

import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "@/lib/firebaseConfig";

export default function UploadContent() {
	const [message, setMessage] = useState("");
	const [loading, setLoading] = useState(false);

	// Fungsi untuk meng-handle insert data
	const handleInsertData = async () => {
		setLoading(true);
		setMessage("");
	
		try {
			// Fetch data dari file JSON yang ada di public folder
			const response = await fetch("../../../../../public/contents/playlist_cpp.json");
			const videos = await response.json();

			alert(JSON.stringify(videos));

			

			// Looping data dan masukkan ke Firestore
			if (!db) {
				throw new Error("Firestore instance is null");
			}
			const collectionRef = collection(db, "contents");
			for (const video of videos) {
				await addDoc(collectionRef, {
					title: video.title,
					url: video.url,
					thumbnail: video.thumbnail,
					createdAt: new Date(),
				});
			}

			setMessage("Data berhasil dimasukkan ke Firestore");
		} catch (error) {
			console.error("Error inserting data:", error);
			setMessage("Gagal memasukkan data");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div>
			<h1>Masukkan Data dari JSON ke Firestore</h1>
			<button onClick={handleInsertData} disabled={loading}>
				{loading ? "Memasukkan Data..." : "Insert Data"}
			</button>
			{message && <p>{message}</p>}
		</div>
	);
}
