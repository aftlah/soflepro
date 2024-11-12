"use client";

import SpinnerLoadingEffect from "@/components/ui/spinner-loading";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";

type PlaylistItem = {
  title: string;
  url: string;
  thumbnail: string;
};

type ContentData = {
  logo: string;
  desc1: string;
  desc2: string;
  header: string;
};

export default function DetailPembelajaranPage() {
  const params = useParams();
  const { bahasaPemrograman } = params;

  const dataPlaylist = {
    cpp: "/contents/playlist_cpp.json",
    python: "/contents/playlist_python.json",
    java: "/contents/playlist_java.json",
  };

  const content = {
    cpp: {
      logo: "/images/cpp.svg",
      desc1:
        "C++ adalah bahasa pemrograman tingkat menengah yang dikembangkan dari bahasa C dengan tambahan fitur berorientasi objek. Bahasa ini menawarkan fleksibilitas yang lebih besar dan kemampuan untuk membuat aplikasi kompleks dengan efisiensi tinggi.",
      desc2:
        "C++ memungkinkan kamu untuk mengembangkan berbagai jenis aplikasi, termasuk game 3D, perangkat lunak grafis, simulasi fisika, aplikasi desktop, perangkat lunak untuk kendaraan, hingga pengembangan sistem operasi.",
      header:
        "Video tutorial cpp datang dari channel Youtube Kelas Terbuka. Divideo ini Kalian akan belajar lebih dari 70 Materi Dasar Pemrograman bahasa cpp. Selamat belajar >.<",
    },
    java: {
      logo: "/images/java.svg",
      desc1:
        "Java adalah bahasa pemrograman yang serbaguna dan banyak digunakan untuk pengembangan aplikasi web, mobile, dan desktop.",
      desc2:
        "Java memungkinkan kamu untuk mengembangkan aplikasi yang dapat berjalan di berbagai platform dengan efisiensi tinggi.",
      header:
        "Video tutorial Java datang dari channel Youtube Kelas Terbuka. Di video ini Kalian akan belajar lebih dari 70 Materi Dasar Pemrograman bahasa Java. Selamat belajar >.<",
    },
    python: {
      logo: "/images/py.svg",
      desc1:
        "Python adalah bahasa pemrograman tingkat tinggi yang mudah dipelajari dan digunakan untuk berbagai tujuan, termasuk pengembangan web, analisis data, dan otomatisasi.",
      desc2:
        "Python memungkinkan kamu untuk mengembangkan aplikasi dengan cepat dan efisien, serta memiliki komunitas yang besar dan aktif.",
      header:
        "Video tutorial Python datang dari channel Youtube Kelas Terbuka. Di video ini Kalian akan belajar lebih dari 70 Materi Dasar Pemrograman bahasa Python. Selamat belajar >.<",
    },
    php: {
      logo: "/images/php.svg",
      desc1:
        "PHP adalah bahasa pemrograman yang banyak digunakan untuk pengembangan aplikasi web dan server-side scripting.",
      desc2:
        "PHP memungkinkan kamu untuk mengembangkan aplikasi web yang dinamis dan interaktif dengan mudah.",
      header:
        "Video tutorial PHP datang dari channel Youtube Kelas Terbuka. Di video ini Kalian akan belajar lebih dari 70 Materi Dasar Pemrograman bahasa PHP. Selamat belajar >.<",
    },
  };

  const currentPlaylist =
    dataPlaylist[bahasaPemrograman as keyof typeof dataPlaylist];
  const [playlistData, setPlaylistData] = useState<PlaylistItem[] | null>(null);

  const currentContent = content[bahasaPemrograman as keyof typeof content];
  const [contentData, setContentData] = useState<ContentData | null>(null);

  useEffect(() => {
    setContentData(currentContent);

    if (currentPlaylist) {
      fetch(currentPlaylist)
        .then((response) => response.json())
        .then((data) => setPlaylistData(data))
        .catch((error) => console.error("Error loading JSON:", error));
    }
  }, [bahasaPemrograman]);

  return (
    <div className="px-[25px]">
      {contentData ? (
        <>
          <h1 className="text-2xl font-extrabold dark:text-primary mb-4">
            Bahasa{" "}
            {typeof bahasaPemrograman === "string"
              ? bahasaPemrograman.toUpperCase()
              : ""}
          </h1>
          <Image
            src={contentData.logo}
            alt=""
            width={65}
            height={65}
            // style={{ width: "auto", height: "auto" }}
          />

          <div className="mt-5 flex flex-col gap-y-3 mb-12">
            <p className="font-medium text-[16px]">{contentData.desc1}</p>
            <p className="font-medium text-[16px]">{contentData.desc2}</p>
          </div>

          <h2 className="text-2xl font-extrabold dark:text-primary">
            Video Pembelajaran
          </h2>

          {playlistData ? (
            <div className="mt-3 ">
              <p className="font-medium text-[16px]">{contentData.header}</p>
              <div className="mt-6">
                {playlistData.slice(0, 5).map((item, index) => (
                  <Link href={item.url} key={index} target="_blank">
                    <div className="bg-none border-2 hover:bg-[#092534] hover:text-white border-[#092534] dark:border-primary dark:hover:bg-primary dark:hover:text-[#092534] transition-all ease-in duration-150 my-2 dark:text-[#fff] px-3 rounded-xl text-[#092534] flex items-center py-1 gap-x-2">
                      <Image
                        src={contentData.logo}
                        alt={item.title}
                        width={45}
                        height={45}
                      />
                      <p className="text-[11px] font-extrabold">{item.title}</p>
                    </div>
                  </Link>
                ))}
              </div>
              <div
                onClick={() => {
                  const fullVideoUrl = `/detail/${bahasaPemrograman}/fullvideo`;
                  window.location.href = fullVideoUrl;
                }}
                className="cursor-pointer dark:text-primary mx-auto mt-5 text-[14px] font-medium text-center"
              >
                Lihat Semua {">"}
              </div>
            </div>
          ) : (
            <div className="mt-10 flex justify-center items-center">
              <SpinnerLoadingEffect />
            </div>
          )}
        </>
      ) : (
        <div className="mt-10 flex justify-center items-center">
          <SpinnerLoadingEffect />
        </div>
      )}
    </div>
  );
}
