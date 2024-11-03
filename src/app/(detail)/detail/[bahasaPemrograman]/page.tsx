
"use client";

import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";

type PlaylistItem = {
  title: string;
  url: string;
  thumbnail: string;
};

function DetailPembelajaran() {
  const params = useParams();
  const { bahasaPemrograman } = params;

  const dataPlaylist = {
    cpp: "/contents/playlist_cpp.json",
    python: "/contents/playlist_python.json",
    java: "/contents/playlist_java.json",
  };

  const currentPlaylist = dataPlaylist[bahasaPemrograman as keyof typeof dataPlaylist];
  const [playlistData, setPlaylistData] = useState<PlaylistItem[] | null>(null);

  useEffect(() => {
    if (currentPlaylist) {
      fetch(currentPlaylist)
        .then((response) => response.json())
        .then((data) => setPlaylistData(data))
        .catch((error) => console.error("Error loading JSON:", error));
    }
  }, [currentPlaylist]);

  return (
    <div>
      <h1>Detail Pembelajaran {bahasaPemrograman}</h1>
      {playlistData ? (
        <div>
          <h2>Daftar Playlist:</h2>
          <ul>
            {playlistData.map((item, index) => (
              <li key={index}>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading playlist...</p>
      )}
    </div>
  );
}

export default DetailPembelajaran;
