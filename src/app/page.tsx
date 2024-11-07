"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

const dataGame = [
    {
        language: "CPP",
        apps: [
            {
                title: "FORTNITE",
                image: "/images/Fortnite.svg",
            },
            {
                title: "PUBG",
                image: "/images/PUBG.svg",
            },
            {
                title: "PUBG",
                image: "/images/PUBG.svg",
            },
            {
                title: "PUBG",
                image: "/images/PUBG.svg",
            }
        ],
    },
    {
        language: "PYTHON",
        apps: [
            {
                title: "INSTAGRAM",
                image: "/images/Instagram.svg",
            },
            {
                title: "SPOTIFY",
                image: "/images/spotify.svg",
            },
        ],
    },
    {
        language: "JAVASCRIPT",
        apps: [
            {
                title: "NETFLIX",
                image: "/images/Netflix.svg",
            },
            {
                title: "PAYPAL",
                image: "/images/Paypal.svg",
            },
        ],
    },
    {
        language: "PHP",
        apps: [
            {
                title: "GOOGLE",
                image: "/images/google.svg",
            },
            {
                title: "WORDPRESS",
                image: "/images/WordPress.svg",
            },
        ],
    },
];

export default function Home() {
    return (
        <div className="container md:mx-auto px-[25px] py-1 mt-6 md:bg-red-500">
            {/* Section 1 */}
            <section className="md:text-center">
                <div className="text-[36px] font-extrabold text-white leading-tight ">
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
                    <p className="text-[16px]">
                        Menyediakan sumber belajar untuk kamu yang ingin mempelajari
                        dasar-dasar bahasa pemrograman C++, Python, Javascript dan PHP
                        secara GRATIS lhoo
                    </p>
                </div>
                <div className="mt-3 ">
                    <Button
                        className="font-medium px-5 dark:bg-primary dark:text-[#092534] dark:hover:bg-primary/90"
                        onClick={() => {
                            const section = document.getElementById("target-section");
                            if (section) {
                                section.scrollIntoView({ behavior: "smooth" });
                            }
                        }}
                    >
                        Belajar Sekarang {">"}
                    </Button>
                </div>
            </section>

            {/* Section 2 */}
            <section className="mt-10">
                <div>
                    <h1 className="text-[24px] dark:text-[#4EEEBB] font-extrabold">
                        Kenalan dulu yuk
                    </h1>
                    <p className="text-[16px] ">
                        Sebelum kamu belajar secara dalam. Yuk kenalan dulu dengan
                        bahasa-bahasa tersebut
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-3">
                    <Link
                        href={""}
                        className="dark:hover:bg-[#4EEEBB] dark:hover:text-[#092534] hover:bg-[#092534] hover:text-white rounded-xl border-2 dark:border-[#4EEEBB] border-[#092534] transition duration-400 ease-in-out"
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
                    </Link>
                    <Link
                        href={""}
                        className="dark:hover:bg-[#4EEEBB] dark:hover:text-[#092534] hover:bg-[#092534] hover:text-white  rounded-xl border-2 dark:border-[#4EEEBB] border-[#092534] transition duration-400 ease-in-out"
                    >
                        <div className="flex gap-x-2 items-center py-2 px-2 ">
                            <Image
                                src="/images/js.svg"
                                width={40}
                                height={40}
                                alt="JS Logo"
                            />
                            <div className="font-semibold">JAVASCRIPT</div>
                        </div>
                    </Link>
                    <Link
                        href={""}
                        className="dark:hover:bg-[#4EEEBB] dark:hover:text-[#092534] hover:bg-[#092534] hover:text-white  rounded-xl border-2 dark:border-[#4EEEBB] border-[#092534] transition duration-400 ease-in-out"
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
                    </Link>

                    <Link
                        href={""}
                        className="dark:hover:bg-[#4EEEBB] dark:hover:text-[#092534] hover:bg-[#092534] hover:text-white  rounded-xl border-2 dark:border-[#4EEEBB] border-[#092534] transition duration-400 ease-in-out"
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
                    </Link>
                </div>
            </section>

            {/* Section 3 */}
            <section className="mt-10">
                <div className="flex  flex-col gap-y-2">
                    <h1 className=" leading-tight text-[24px] dark:text-[#4EEEBB] font-extrabold">
                        Apa aja sih yang bisa dilakukan oleh bahasa pemrograman diatas?
                    </h1>
                    <p className="text-[16px]">
                        Kalian sudah mengetahui bahasa pemrograman diatas, dibagian ini
                        kalian akan melihat apa saja sih website dan game yang basis
                        pemrogramannya adalah cpp, python, javascript dan php.
                    </p>
                </div>
            </section>

            {/* Section 4 */}
            <section className="mt-10 md:mt-5 bg-blue-400">
                <div className="flex flex-col">
                    {dataGame.map((languageData, index) => (
                        <div key={index} className="mt-11 md:mt-5 md:mb-5 container">
                            <div>
                                <h1 className="text-lg md:text-[24px] md:mb-3 font-extrabold">
                                    {languageData.language}
                                </h1>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 justify-center items-center gap-x-10 mt-[8px] md:justify-start">
                                {languageData.apps.map((app, appIndex) => (
                                    <div
                                        key={appIndex}
                                        className="flex justify-center items-center flex-col gap-y-2"
                                    >
                                        <Image
                                            src={app.image}
                                            width={180}
                                            height={100}
                                            alt={`${app.title} Logo`}
                                        />
                                        <div className="font-extrabold">{app.title}</div>
                                    </div>
                                ))}
                            </div>
                            
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}