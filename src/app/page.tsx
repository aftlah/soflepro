"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import dataGame from "@/utils/datas";

export default function Home() {
    return (
        <div className="container md:mx-auto  px-[25px] py-1 mt-6 max-w-[450px]">
            {/* Section 1 */}
            <section>
                <div className="text-[36px] font-extrabold text-white leading-tight">
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
            <section className="mt-10">
                <div className="flex flex-col ">
                    {dataGame.map((languageData, index) => (
                        <div key={index} className="mt-11 container">
                            <div>
                                <h1 className="text-lg font-extrabold">
                                    {languageData.language}
                                </h1>
                            </div>
                            <div className="flex justify-center items-center gap-x-10 mt-[8px]">
                                {languageData.apps.map((app, appIndex) => (
                                    <div
                                        key={appIndex}
                                        className="flex justify-center items-center flex-col gap-y-2 "
                                    >
                                        <Image
                                            src={app.image}
                                            width={180}
                                            height={100}
                                            alt={`${app.title} Logo`}
                                            className="dark:border-2 dark:border-[#092534] rounded-xl "
                                        />
                                        <div className="font-extrabold">{app.title}</div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-center mt-[14px]">
                                <Link
                                    href="#more-cpp-apps"
                                    className="dark:text-primary hover:underline"
                                >
                                    Lihat lebih banyak &gt;
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section 5 */}
            <section>
                <div className="w-full flex justify-center items-center mx-auto">
                    <h1 className="text-2xl text-center mt-[75px]  font-extrabold dark:text-primary w-[341px]">
                        Kenapa sih kita harus belajar dasar bahasa pemrograman?
                    </h1>
                </div>
            </section>
        </div>
    );
}
