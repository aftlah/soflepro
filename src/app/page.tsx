"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as React from "react";
import dataGame from "@/utils/datas";

const channel = [
    {
        name: "Web Programming Unpas",
        image: "/images/wpu.svg",
        link: "https://www.youtube.com/@sandhikagalihWPU"
    },
    {
        name: "Kelas Terbuka",
        image: "/images/kt.svg",
        link: ""
    },
    {
        name: "VIP CODE STUDIO",
        image: "/images/wpu.svg",
        link: "https://www.youtube.com/@vipcodestudio"
    },
    {
        name: "Web Programming",
        image: "/images/wpu.svg",
        link: ""
    },
    {
        name: "Web Programming",
        image: "/images/wpu.svg",
        link: ""
    },
]

export default function Home() {
    const router = useRouter();

    return (
        <div className="container px-[25px] md:mx-auto py-1 mt-6 md:px-[30px] xl:px-[0px]">
            {/* Section 1 */}
            <section id="home" className="md:flex md:flex-row">
                <div className="md:max-w-[60%] ">
                    <div className="text-[36px] xl:text-[48px] font-extrabold text-white leading-tight uppercase">
                        <h1 className="dark:text-white text-[#4EEEBB]">
                            <span className="text-[#092534] dark:text-[#4EEEBB]">SO</span>urce
                        </h1>
                        <h1 className="dark:text-white text-[#4EEEBB]">
                            <span className="text-[#092534] dark:text-[#4EEEBB]">F</span>or{" "}
                            <span className="text-[#092534] dark:text-[#4EEEBB]">LE</span>arn
                        </h1>
                        <h1 className="dark:text-white text-[#4EEEBB]">
                            <span className="text-[#092534] dark:text-[#4EEEBB]">PRO</span>
                            gramming
                        </h1>
                    </div>
                    <div className="mt-3">
                        <p className="text-[16px]  md:pr-10">
                            Menyediakan sumber belajar untuk kamu yang ingin mempelajari
                            dasar-dasar bahasa pemrograman C++, Python, Java, Javascript dan
                            PHP secara GRATIS!
                        </p>
                    </div>
                    <div className="mt-5 ">
                        <Link
                            href="#lang"
                            className="font-medium px-5 py-2 rounded-lg border-2 border-[#092534] dark:bg-transparent dark:border-primary dark:text-[#ffffff] dark:hover:bg-primary dark:hover:text-[#092534] trasnsition duration-300 ease-in-out bg-transparent text-[#092534] hover:bg-[#092534] hover:text-white"
                        >
                            Belajar Sekarang
                        </Link>
                    </div>
                </div>
                <div className="md:w-[40%] md:flex items-center justify-center hidden">
                    <Image
                        src={"/images/head-banner.svg"}
                        width={300}
                        height={300}
                        alt="hero"
                    />
                </div>
            </section>

            {/* Section 2 */}
            <section id="lang" className="mt-10 md:mt-20">
                <div>
                    <h1 className="text-[24px] dark:text-[#4EEEBB] font-extrabold uppercase md:text-center md:max-w-sm md:mx-auto">
                        Kenalan dulu dengan bahasa pemrograman
                    </h1>
                    <p className="text-[16px] md:max-w-80 md:text-center md:mx-auto md:mt-1 md:mb-5">
                        Sebelum kamu belajar secara dalam. Yuk kenalan dulu dengan
                        bahasa-bahasa tersebut
                    </p>
                </div>
                <div className="grid grid-cols-2 place-content-center gap-4 mt-3 lg:grid-cols-4 md:px-[100px] xl:grid-cols-5 xl:px-[25px]">
                    <div
                        onClick={() => router.push(`/detail/${encodeURIComponent("cpp")}`)}
                        className="cursor-pointer dark:hover:bg-[#4EEEBB] dark:hover:text-[#092534] hover:bg-[#092534] hover:text-white rounded-xl border-2 dark:border-[#4EEEBB] border-[#092534] transition duration-400 ease-in-out"
                    >
                        <div className="flex gap-x-2 items-center py-2 px-2 ">
                            <Image
                                src={"/images/cpp.svg"}
                                width={40}
                                height={40}
                                alt="cpplogo"
                            />
                            <div className="font-semibold">CPP</div>
                        </div>
                    </div>

                    <div
                        onClick={() =>
                            router.push(`/detail/${encodeURIComponent("python")}`)
                        }
                        className="cursor-pointer dark:hover:bg-[#4EEEBB] dark:hover:text-[#092534] hover:bg-[#092534] hover:text-white  rounded-xl border-2 dark:border-[#4EEEBB] border-[#092534] transition duration-400 ease-in-out"
                    >
                        <div className="flex gap-x-2 items-center py-2 px-2 ">
                            <Image
                                src="/images/py.svg"
                                alt="PYTHON Logo"
                                width={40}
                                height={40}
                            />
                            <div className="font-semibold">PYTHON</div>
                        </div>
                    </div>

                    <div
                        onClick={() => router.push(`/detail/${encodeURIComponent("java")}`)}
                        className="cursor-pointer dark:hover:bg-[#4EEEBB] dark:hover:text-[#092534] hover:bg-[#092534] hover:text-white  rounded-xl border-2 dark:border-[#4EEEBB] border-[#092534] transition duration-400 ease-in-out"
                    >
                        <div className="flex gap-x-2 items-center py-2 px-2">
                            <Image
                                src="/images/java.svg"
                                width={40}
                                height={40}
                                alt="Java Logo"
                            />
                            <div className="font-semibold">Java</div>
                        </div>
                    </div>

                    <div
                        onClick={() =>
                            router.push(`/detail/${encodeURIComponent("javascript")}`)
                        }
                        className="cursor-pointer dark:hover:bg-[#4EEEBB] dark:hover:text-[#092534] hover:bg-[#092534] hover:text-white  rounded-xl border-2 dark:border-[#4EEEBB] border-[#092534] transition duration-400 ease-in-out"
                    >
                        <div className="flex gap-x-2 items-center py-2 px-2 ">
                            <Image
                                src="/images/js.svg"
                                alt="Javascript Logo"
                                width={40}
                                height={40}
                            />
                            <div className="font-semibold">JAVASCRIPT</div>
                        </div>
                    </div>

                    <div
                        onClick={() => router.push(`/detail/${encodeURIComponent("php")}`)}
                        className="cursor-pointer dark:hover:bg-[#4EEEBB] dark:hover:text-[#092534] hover:bg-[#092534] hover:text-white  rounded-xl border-2 dark:border-[#4EEEBB] border-[#092534] transition duration-400 ease-in-out"
                    >
                        <div className="flex gap-x-2 items-center py-2 px-2 ">
                            <Image
                                src="/images/php.svg"
                                alt="PHP Logo"
                                width={40}
                                height={40}
                            />
                            <div className="font-semibold">PHP</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3 */}
            <section className="mt-10">
                <div className="flex  flex-col gap-y-2">
                    <h1 className=" leading-tight text-[24px] dark:text-[#4EEEBB] font-extrabold uppercase md:text-center md:mx-auto md:max-w-lg lg:max-w-lg md:mt-10">
                        APLIKASI YANG BERBASIS BAHASA PEMROGRAMAN
                    </h1>
                    <p className="text-[16px] md:text-center md:mx-auto md:max-w-md">
                        Kalian sudah mengetahui bahasa pemrograman diatas, dibagian ini
                        kalian akan melihat apa saja sih website dan game yang basis
                        pemrogramannya adalah cpp, python, java, javascript dan php.
                    </p>
                </div>
            </section>

            {/* Section 4 */}
            <section className="md:mt-5">
                <div className="flex flex-col">
                    {dataGame.map((languageData, index) => (
                        <div
                            key={index}
                            className="mt-11 md:mt-5 md:mb-5 container md:text-center border-primary"
                        >
                            <div className="md:mb-6">
                                <h1 className="text-lg md:text-2xl font-extrabold texk-[#092534] dark:text-primary ">
                                    {languageData.language}
                                </h1>
                            </div>
                            <div className="grid grid-cols-2 lg:grid-cols-4  justify-center items-center gap-x-10 mt-[8px] md:justify-start md:px-[140px]">
                                {languageData.apps.map((app, appIndex) => (
                                    <div
                                        key={appIndex}
                                        className="flex justify-center items-center flex-col gap-y-2 mb-5"
                                    >
                                        <div className="border-2 border-[#092534] dark:border-none rounded-xl  overflow-hidden">
                                            <Image
                                                src={app.image}
                                                width={180}
                                                height={100}
                                                alt={`${app.title} Logo`}
                                                style={{ width: "auto", height: "auto" }}
                                            />
                                        </div>
                                        <div className="font-extrabold text-center">
                                            {app.title}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section 5 */}
            <section className="">
                <div className="w-full flex justify-center items-center mx-auto">
                    <h1 className="text-xl md:text-2xl text-center mt-[75px]  font-extrabold dark:text-primary w-[341px] md:w-[400px] uppercase">
                        Kenapa kita harus belajar dasar bahasa pemrograman?
                    </h1>
                </div>

                <div className="flex flex-col justify-center items-center md:flex-row md:gap-x-3  md:mt-8">
                    <div className="flex flex-col justify-start items-center max-w-[235px] md:w-full mt-[50px] md:mt-0 min-h-[250px]">
                        <Image
                            src={"/images/image-footer1.svg"}
                            width={148}
                            height={148}
                            alt="img-footer1"
                            style={{ width: "auto", height: "auto" }}
                        />
                        <h1 className="text-center text-[20px] md:text-[18px] font-bold mt-4 max-w-[200px]">
                            Membangun logika dan problem solving
                        </h1>
                    </div>
                    <div className="flex flex-col justify-start items-center max-w-[235px] md:w-full mt-[49px] md:mt-9 min-h-[250px]">
                        <Image
                            src={"/images/image-footer3.svg"}
                            width={148}
                            height={148}
                            alt="img-footer2"
                            style={{ width: "auto", height: "auto" }}
                        />
                        <h1 className="text-center text-[20px] md:text-[18px] font-bold mt-4 max-w-[200px]">
                            Pondasi untuk belajar teknologi yang lebih kompleks seperti
                            framework
                        </h1>
                    </div>
                    <div className="flex flex-col justify-start items-center max-w-[235px] md:w-full mt-[49px] md:mt-0 min-h-[250px]">
                        <Image
                            src={"/images/image-footer2.svg"}
                            width={148}
                            height={148}
                            alt="img-footer3"
                            style={{ width: "auto", height: "auto" }}
                        />
                        <h1 className="text-center text-[20px] md:text-[18px] font-bold mt-4 max-w-[200px]">
                            Peluang karir yang Luas
                        </h1>
                    </div>
                </div>
            </section>

            {/* section 6 about */}
            <section id="about" className="mt-[65px]">
                <div className="flex flex-col justify-center items-center gap-y-[23px]">
                    <h1 className="font-extrabold text-[24px] dark:text-primary uppercase">
                        TENTANG KAMI
                    </h1>
                    <p className="text-center md:max-w-lg">
                        SOFLEPRO adalah platform pembelajaran online yang menyediakan sumber
                        belajar gratis bagi Anda yang ingin mempelajari dasar-dasar bahasa
                        pemrograman. Kami menawarkan materi dalam berbagai bahasa
                        pemrograman, termasuk C++, Python, Java, JavaScript, dan PHP. <br />{" "}
                        <br />
                        Anda dapat belajar melalui video tutorial yang disusun langkah demi
                        langkah. Sumber materi kami berasal dari channel-channel youtube yang
                        sangat direkomendasikan bagi pemula.
                    </p>
                </div>
            </section>

            {/* section 7  */}
            <section className="mt-[65px]">
                <div className="flex flex-col justify-center items-center gap-y-[23px]">
                    <h1 className="font-extrabold text-[24px] dark:text-primary uppercase">
                        SUMBER BELAJAR
                    </h1>
                    <p className="text-center md:max-w-lg">
                        SOFLEPRO adalah platform pembelajaran online yang menyediakan sumber
                        belajar gratis bagi Anda yang ingin mempelajari dasar-dasar bahasa
                        pemrograman. Kami menawarkan materi dalam berbagai bahasa
                        pemrograman, termasuk C++, Python, Java, JavaScript, dan PHP. <br />{" "}
                        <br />
                        Anda dapat belajar melalui video tutorial yang disusun langkah demi
                        langkah. Sumber materi kami berasal dari channel-channel youtube yang
                        sangat direkomendasikan bagi pemula.
                    </p>
                </div>
            </section>

            {/* Section 8 */}

            <section id="community" className="mt-[65px]">
                <div className="flex flex-col justify-center items-center gap-y-[23px]">
                    <h1 className="font-extrabold text-[24px] dark:text-primary uppercase">
                        Gabung Komunitas
                    </h1>
                    <div className="flex gap-5">
                        <Link
                            target="_blank"
                            href={"https://chat.whatsapp.com/FJtKCGovsuhAdzbfrbQNAH"}
                            className="hover:scale-90 transition duration-300 ease-in-out"
                        >
                            <Image
                                src={"/images/whatsapp.svg"}
                                width={58}
                                height={58}
                                alt="img-footer1"
                                style={{ width: "auto", height: "auto" }}
                            />
                        </Link>
                        <Link
                            target="_blank"
                            href={"https://discord.com/invite/seJKCqASJ3"}
                            className="hover:scale-90 transition duration-300 ease-in-out"
                        >
                            <Image
                                src={"/images/discord.svg"}
                                width={58}
                                height={58}
                                alt="img-footer1"
                                style={{ width: "auto", height: "auto" }}
                            />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
