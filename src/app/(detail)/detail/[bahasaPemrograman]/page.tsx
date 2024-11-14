'use client'

import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import React, { useState, useEffect } from "react"
import SpinnerLoadingEffect from "@/components/ui/spinner-loading"

type PlaylistItem = {
  title: string
  url: string
  thumbnail: string
}

type ContentData = {
  logo: string
  logoFramework: string
  desc1: string
  desc2: string
  header: string
}

export default function DetailPembelajaranPage() {
  const params = useParams()
  const { bahasaPemrograman } = params

  const dataPlaylist = {
    cpp: "/contents/playlist_cpp.json",
    python: "/contents/playlist_python.json",
    java: "/contents/playlist_java.json",
    javascript: "/contents/playlist_js.json",
    php: "/contents/playlist_php.json",
  }

  const frameworkPlayList = {
    python: "/contents/playlist_django.json",
    java: "/contents/playlist_spring.json",
    javascript: "/contents/playlist_react.json",
    php: "/contents/playlist_laravel.json",
  }

  const content = {
    cpp: {
      logo: "/images/cpp.svg",
      logoFramework: "",
      desc1: "C++ adalah bahasa pemrograman tingkat menengah yang dikembangkan dari bahasa C dengan tambahan fitur berorientasi objek. Bahasa ini menawarkan fleksibilitas yang lebih besar dan kemampuan untuk membuat aplikasi kompleks dengan efisiensi tinggi.",
      desc2: "C++ memungkinkan kamu untuk mengembangkan berbagai jenis aplikasi, termasuk game 3D, perangkat lunak grafis, simulasi fisika, aplikasi desktop, perangkat lunak untuk kendaraan, hingga pengembangan sistem operasi.",
      header: "Video tutorial cpp datang dari channel Youtube Kelas Terbuka. Pada Playlist ini Kalian akan belajar lebih dari 80 Materi Pemrograman bahasa cpp. Selamat belajar >.<",
    },
    python: {
      logo: "/images/py.svg",
      logoFramework: "/images/django.svg",
      desc1: "Python adalah bahasa pemrograman tingkat tinggi yang terkenal karena sintaks yang mudah dipahami dan fleksibel. Bahasa ini sangat cocok untuk pemula dan juga populer di kalangan ilmuwan data, pengembang web, dan developer AI.",
      desc2: "Python memungkinkan kamu mengembangkan berbagai aplikasi, mulai dari analisis data, machine learning, hingga aplikasi web dan automasi. Bahasa ini sangat kaya akan pustaka yang memudahkan pengembangan aplikasi yang kompleks.",
      header: "Video tutorial Python berasal dari channel Youtube Kelas Terbuka. Pada Playlist ini kalian akan belajar lebih dari 70 materi. Selamat belajar >.<",
    },
    java: {
      logo: "/images/java.svg",
      logoFramework: "/images/spring.svg",
      desc1: "Java adalah bahasa pemrograman yang terkenal karena portabilitas dan kestabilannya. Java dirancang untuk menjadi bahasa yang 'write once, run anywhere', sehingga memungkinkan aplikasi yang ditulis dalam Java dapat dijalankan di berbagai platform.",
      desc2: "Java sering digunakan dalam pengembangan aplikasi berbasis Android, aplikasi enterprise, serta sistem back-end yang handal. Bahasa ini mendukung pemrograman berorientasi objek dan memiliki komunitas pengembang yang besar.",
      header: "Video tutorial Java berasal dari channel Youtube Kelas Terbuka. Pada Playlist ini kalian akan belajar lebih dari 60 materi. Selamat belajar >.<",
    },
    javascript: {
      logo: "/images/js.svg",
      logoFramework: "/images/react.svg",
      desc1: "JavaScript adalah bahasa pemrograman yang digunakan untuk pengembangan web, baik di sisi klien maupun server. Bahasa ini membuat halaman web menjadi interaktif dan dinamis, serta merupakan bahasa utama untuk pengembangan aplikasi front-end.",
      desc2: "JavaScript memungkinkan kamu mengembangkan aplikasi web modern yang interaktif, membuat animasi, mengontrol media, dan mengelola data dengan API. Dengan menggunakan Node.js, JavaScript juga dapat digunakan di sisi server.",
      header: "Video tutorial JavaScript berasal dari channel Youtube WPU. Pada Playlist ini kalian akan belajar lebih dari 40 materi. Selamat belajar >.<",
    },
    php: {
      logo: "/images/php.svg",
      logoFramework: "/images/laravel.svg",
      desc1: "PHP adalah bahasa pemrograman server-side yang dirancang khusus untuk pengembangan web. PHP sangat populer untuk membangun situs web dinamis dan aplikasi web karena dukungannya yang kuat terhadap berbagai database dan server.",
      desc2: "PHP memungkinkan kamu mengembangkan aplikasi web interaktif, membuat sistem manajemen konten (CMS), dan membangun e-commerce. PHP juga memiliki banyak framework seperti Laravel dan CodeIgniter yang mempercepat proses pengembangan.",
      header: "Video tutorial PHP berasal dari channel Youtube Kelas Terbuka. Pada Playlist ini kalian akan belajar lebih dari 20 materi. Selamat belajar >.<",
    },
  }

  const currentPlaylist = dataPlaylist[bahasaPemrograman as keyof typeof dataPlaylist]
  const frameworkPlaylist = frameworkPlayList[bahasaPemrograman as keyof typeof frameworkPlayList]
  const [playlistData, setPlaylistData] = useState<PlaylistItem[] | null>(null)
  const [frameworkPlaylistData, setFrameworkPlaylistData] = useState<PlaylistItem[] | null>(null)
  const currentContent = content[bahasaPemrograman as keyof typeof content]
  const [contentData, setContentData] = useState<ContentData | null>(null)

  const [currentPage, setCurrentPage] = useState(1)
  const [currentFrameworkPage, setCurrentFrameworkPage] = useState(1)
  const itemsPerPage = 10

  useEffect(() => {
    setContentData(currentContent)

    if (currentPlaylist) {
      fetch(currentPlaylist)
        .then((response) => response.json())
        .then((data) => setPlaylistData(data))
        .catch((error) => console.error("Error loading JSON:", error))
    }

    if (frameworkPlaylist) {
      fetch(frameworkPlaylist)
        .then((response) => response.json())
        .then((data) => setFrameworkPlaylistData(data))
        .catch((error) => console.error("Error loading JSON:", error))
    }
  }, [bahasaPemrograman, currentContent, currentPlaylist, frameworkPlaylist])

  const totalPages = playlistData ? Math.ceil(playlistData.length / itemsPerPage) : 1
  const totalFrameworkPages = frameworkPlaylistData ? Math.ceil(frameworkPlaylistData.length / itemsPerPage) : 1

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1)
  }

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
  }

  const handleNextFrameworkPage = () => {
    if (currentFrameworkPage < totalFrameworkPages) setCurrentFrameworkPage(currentFrameworkPage + 1)
  }

  const handlePreviousFrameworkPage = () => {
    if (currentFrameworkPage > 1) setCurrentFrameworkPage(currentFrameworkPage - 1)
  }

  const paginatedData = playlistData
    ? playlistData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    : []

  const paginatedFrameworkData = frameworkPlaylistData
    ? frameworkPlaylistData.slice((currentFrameworkPage - 1) * itemsPerPage, currentFrameworkPage * itemsPerPage)
    : []

  return (
    <div className="px-[25px] md:px-[20px] lg:px-[30px] xl:px-[31px]">
      {contentData ? (
        <>
          <h1 className="text-2xl font-extrabold dark:text-primary mb-4">
            Bahasa {typeof bahasaPemrograman === "string" ? bahasaPemrograman.toUpperCase() : ""}
          </h1>
          <Image src={contentData.logo} alt="" width={65} height={65} />

          <div className="mt-5 flex flex-col gap-y-3 mb-12">
            <p className="font-medium text-[16px] md:max-w-xl">{contentData.desc1}</p>
            <p className="font-medium text-[16px] md:max-w-xl">{contentData.desc2}</p>
          </div>

          <h2 className="text-2xl font-extrabold dark:text-primary">Video Pembelajaran</h2>

          {playlistData ? (
            <div className="mt-3">
              <p className="font-medium text-[16px] md:max-w-4xl">{contentData.header}</p>
              <div className="mt-6 md:grid md:grid-cols-2 gap-4">
                {paginatedData.map((item, index) => (
                  <Link href={item.url} key={index} target="_blank">
                    <div className="bg-none border-2 hover:bg-[#092534] hover:text-white border-[#092534] dark:border-primary dark:hover:bg-primary dark:hover:text-[#092534] transition-all ease-in duration-150 my-2 dark:text-[#fff] px-3 rounded-xl text-[#092534] flex items-center py-1 gap-x-2">
                      <Image src={contentData.logo} alt={item.title} width={45} height={45} />
                      <p className="text-[14px] font-bold uppercase">
                        {(currentPage - 1) * itemsPerPage + index + 1}. {item.title}
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
                Setelah kalian mempelajari dasar-dasar bahasa pemrograman {bahasaPemrograman}, kalian bisa lanjut belajar
                Framework dari {bahasaPemrograman} yaitu {getFrameworkName(bahasaPemrograman as string)}
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
                        {(currentFrameworkPage - 1) * itemsPerPage + index + 1}. {item.title}
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
  )
}

function getFrameworkName(language: string): string {
  switch (language) {
    case 'python':
      return 'Django'
    case 'java':
      return 'Spring Boot'
    case 'javascript':
      return 'React JS'
    case 'php':
      return 'Laravel'
    default:
      return ''
  }
}