"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

export default function Home() {
    return (
        <div className="container md:mx-auto  px-[25px] py-1 mt-6 max-w-[450px]">
            {/* Section 1 */}
            <section>
                <div className="text-[36px] font-extrabold text-white leading-tight">
                    <h1>
                        <span className="text-[#092534] dark:text-[#4EEEBB]">SO</span>urce
                    </h1>
                    <h1>
                        <span className="text-[#092534] dark:text-[#4EEEBB]">F</span>or{" "}
                        <span className="text-[#092534] dark:text-[#4EEEBB]">LE</span>arn
                    </h1>
                    <h1>
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
                        className="font-medium px-5"
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
                    <p className="text-[16px] font-medium">
                        Sebelum kamu belajar secara dalam. Yuk kenalan dulu dengan
                        bahasa-bahasa tersebut
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-3">
                    <Link
                        href={""}
                        className="hover:bg-[#4EEEBB] hover:text-[#092534] rounded-xl border-2 dark:border-[#4EEEBB] transition duration-400 ease-in-out"
                    >
                        <div className="flex items-center py-2 px-1 ">
                            <Image
                                src={"/images/cpp.svg"}
                                width={40}
                                height={40}
                                alt="cpplogo"
                            />
                            <div>CPP</div>
                        </div>
                    </Link>
                    <Link
                        href={""}
                        className="hover:bg-[#4EEEBB] hover:text-[#092534]  rounded-xl border-2 dark:border-[#4EEEBB] transition duration-400 ease-in-out"
                    >
                        <div className="flex items-center py-2 px-1 ">
                            <Image
                                src="/images/js.svg"
                                width={40}
                                height={40}
                                alt="JS Logo"
                            />
                            <div>JAVASCRIPT</div>
                        </div>
                    </Link>
                    <Link
                        href={""}
                        className="hover:bg-[#4EEEBB] hover:text-[#092534]  rounded-xl border-2 dark:border-[#4EEEBB] transition duration-400 ease-in-out"
                    >
                        <div className="flex items-center py-2 px-1 ">
                            <Image
                                src="/images/py.svg"
                                alt="PYTHON Logo"
                                width={40}
                                height={40}
                            />
                            <div>PYTHON</div>
                        </div>
                    </Link>

                    <Link
                        href={""}
                        className="hover:bg-[#4EEEBB] hover:text-[#092534]  rounded-xl border-2 dark:border-[#4EEEBB] transition duration-400 ease-in-out"
                    >
                        <div className="flex items-center py-2 px-1 ">
                            <Image
                                src="/images/php.svg"
                                alt="PHP Logo"
                                width={40}
                                height={40}
                            />
                            <div>PHP</div>
                        </div>
                    </Link>
                </div>
            </section>
        </div>
    );
}
