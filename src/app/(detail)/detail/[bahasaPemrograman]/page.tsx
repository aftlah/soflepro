"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import SpinnerLoadingEffect from "@/components/ui/spinner-loading";
import { dataPlaylist, frameworkPlayList,content } from "@/utils/datas";

type PlaylistItem = {
  title: string;
  url: string;
  thumbnail: string;
};

type ContentData = {
  logo: string;
  logoFramework: string;
  desc1: string;
  desc2: string;
  header: string;
};

export default function DetailPembelajaranPage() {
  const params = useParams();
  const { bahasaPemrograman } = params;

  const currentPlaylist = dataPlaylist[bahasaPemrograman as keyof typeof dataPlaylist];
  const frameworkPlaylist = frameworkPlayList[bahasaPemrograman as keyof typeof frameworkPlayList];
  const [playlistData, setPlaylistData] = useState<PlaylistItem[] | null>(null);
  const [frameworkPlaylistData, setFrameworkPlaylistData] = useState<PlaylistItem[] | null>(null);
  const currentContent = content[bahasaPemrograman as keyof typeof content];
  const [contentData, setContentData] = useState<ContentData | null>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [currentFrameworkPage, setCurrentFrameworkPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    setContentData(currentContent);

    if (currentPlaylist) {
      fetch(currentPlaylist)
        .then((response) => response.json())
        .then((data) => setPlaylistData(data))
        .catch((error) => console.error("Error loading JSON:", error));
    }

    if (frameworkPlaylist) {
      fetch(frameworkPlaylist)
        .then((response) => response.json())
        .then((data) => setFrameworkPlaylistData(data))
        .catch((error) => console.error("Error loading JSON:", error));
    }
  }, [bahasaPemrograman, currentContent, currentPlaylist, frameworkPlaylist]);

  const totalPages = playlistData
    ? Math.ceil(playlistData.length / itemsPerPage)
    : 1;
  const totalFrameworkPages = frameworkPlaylistData
    ? Math.ceil(frameworkPlaylistData.length / itemsPerPage)
    : 1;

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextFrameworkPage = () => {
    if (currentFrameworkPage < totalFrameworkPages)
      setCurrentFrameworkPage(currentFrameworkPage + 1);
  };

  const handlePreviousFrameworkPage = () => {
    if (currentFrameworkPage > 1)
      setCurrentFrameworkPage(currentFrameworkPage - 1);
  };

  const paginatedData = playlistData
    ? playlistData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      )
    : [];

  const paginatedFrameworkData = frameworkPlaylistData
    ? frameworkPlaylistData.slice(
        (currentFrameworkPage - 1) * itemsPerPage,
        currentFrameworkPage * itemsPerPage
      )
    : [];

  return (
    <div className="px-[25px] md:px-[20px] lg:px-[30px] xl:px-[10px] 2xl:px-[0px]">
      {contentData ? (
        <>
          <h1 className="text-2xl font-extrabold dark:text-primary mb-4">
            Bahasa{" "}
            {typeof bahasaPemrograman === "string"
              ? bahasaPemrograman.toUpperCase()
              : ""}
          </h1>
          <Image src={contentData.logo} alt="" width={65} height={65} />

          <div className="mt-5 flex flex-col gap-y-3 mb-12">
            <p className="font-medium text-[16px] md:max-w-xl">
              {contentData.desc1}
            </p>
            <p className="font-medium text-[16px] md:max-w-xl">
              {contentData.desc2}
            </p>
          </div>

          <h2 className="text-2xl font-extrabold dark:text-primary">
            Video Pembelajaran
          </h2>

          {playlistData ? (
            <div className="mt-3">
              <p className="font-medium text-[16px] md:max-w-4xl">
                {contentData.header}
              </p>
              <div className="mt-6 md:grid md:grid-cols-2 gap-4">
                {paginatedData.map((item, index) => (
                  <Link href={item.url} key={index} target="_blank">
                    <div className="bg-none border-2 hover:bg-[#092534] hover:text-white border-[#092534] dark:border-primary dark:hover:bg-primary dark:hover:text-[#092534] transition-all ease-in duration-150 my-2 dark:text-[#fff] px-3 rounded-xl text-[#092534] flex items-center py-1 gap-x-2">
                      <Image
                        src={contentData.logo}
                        alt={item.title}
                        width={45}
                        height={45}
                      />
                      <p className="text-[14px] font-bold uppercase">
                        {(currentPage - 1) * itemsPerPage + index + 1}.{" "}
                        {item.title}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="flex justify-between w-full md:justify-end items-center mt-4">
                <button
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                  className="px-3 py-1 rounded-md disabled:opacity-50 border-2 border-[#092534] dark:bg-transparent dark:border-primary dark:text-[#ffffff] dark:hover:bg-primary dark:hover:text-[#092534] transition duration-300 ease-in-out bg-transparent text-[#092534] hover:bg-[#092534] hover:text-white min-w-[100px] max-w-[100px]"
                >
                  Previous
                </button>
                <div className="min-w-[100px] max-w-[100px] text-center">
                  Page {currentPage} of {totalPages}
                </div>
                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className="px-3 py-1 rounded-md disabled:opacity-50 border-2 border-[#092534] dark:bg-transparent dark:border-primary dark:text-[#ffffff] dark:hover:bg-primary dark:hover:text-[#092534] transition duration-300 ease-in-out bg-transparent text-[#092534] hover:bg-[#092534] hover:text-white min-w-[100px] max-w-[100px]"
                >
                  Next
                </button>
              </div>
            </div>
          ) : (
            <div className="mt-10 flex justify-center items-center">
              <SpinnerLoadingEffect />
            </div>
          )}

          {frameworkPlaylistData && (
            <div className="mt-12">
              <h2 className="text-2xl font-extrabold dark:text-primary mb-4 uppercase">
                belajar Framework
              </h2>
              <p className="font-medium text-[16px] md:max-w-4xl mb-6">
                Setelah kalian mempelajari dasar-dasar bahasa pemrograman{" "}
                {bahasaPemrograman}, kalian bisa lanjut belajar Framework dari{" "}
                {bahasaPemrograman} yaitu{" "}
                {getFrameworkName(bahasaPemrograman as string)}
              </p>
              <div className="md:grid md:grid-cols-2 gap-4">
                {paginatedFrameworkData.map((item, index) => (
                  <Link href={item.url} key={index} target="_blank">
                    <div className="bg-none border-2 hover:bg-[#092534] hover:text-white border-[#092534] dark:border-primary dark:hover:bg-primary dark:hover:text-[#092534] transition-all ease-in duration-150 my-2 dark:text-[#fff] px-3 rounded-xl text-[#092534] flex items-center py-1 gap-x-2">
                      <Image
                        src={contentData.logoFramework}
                        alt={item.title}
                        width={45}
                        height={45}
                      />
                      <p className="text-[14px] font-bold uppercase">
                        {(currentFrameworkPage - 1) * itemsPerPage + index + 1}.{" "}
                        {item.title}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="flex justify-between w-full md:justify-end items-center mt-4">
                <button
                  onClick={handlePreviousFrameworkPage}
                  disabled={currentFrameworkPage === 1}
                  className="px-3 py-1 rounded-md disabled:opacity-50 border-2 border-[#092534] dark:bg-transparent dark:border-primary dark:text-[#ffffff] dark:hover:bg-primary dark:hover:text-[#092534] transition duration-300 ease-in-out bg-transparent text-[#092534] hover:bg-[#092534] hover:text-white min-w-[100px] max-w-[100px]"
                >
                  Previous
                </button>
                <div className="min-w-[100px] max-w-[100px] text-center">
                  Page {currentFrameworkPage} of {totalFrameworkPages}
                </div>
                <button
                  onClick={handleNextFrameworkPage}
                  disabled={currentFrameworkPage === totalFrameworkPages}
                  className="px-3 py-1 rounded-md disabled:opacity-50 border-2 border-[#092534] dark:bg-transparent dark:border-primary dark:text-[#ffffff] dark:hover:bg-primary dark:hover:text-[#092534] transition duration-300 ease-in-out bg-transparent text-[#092534] hover:bg-[#092534] hover:text-white min-w-[100px] max-w-[100px]"
                >
                  Next
                </button>
              </div>
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

function getFrameworkName(language: string): string {
  switch (language) {
    case "python":
      return "Django";
    case "java":
      return "Spring Boot";
    case "javascript":
      return "React JS";
    case "php":
      return "Laravel";
    default:
      return "";
  }
}
