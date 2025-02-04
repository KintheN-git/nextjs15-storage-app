import Image from "next/image";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <section className="bg-brand p-10 justify-center items-center w-1/2 hidden lg:flex xl:w-2/5">
        <div className="max-h-[800px] max-w-[430px] flex flex-col justify-center space-y-12">
          <Image
            src="/assets/icons/logo-full.svg"
            alt="logo"
            width={224}
            height={82}
          />
          <div className="space-y-5 text-white">
            <h1 className="h1">manage your files</h1>
            <p className="body-1">
              this is a place where you can manage your files
            </p>
          </div>
          <Image
            src="/assets/images/files.png"
            alt="files"
            width={342}
            height={342}
            className="transition-all hover:scale-105 hover:rotate-3"
          />
        </div>
      </section>

      <section className="bg-white flex flex-1 flex-col items-center p-4 py-10 lg:p-10 lg:py-0 lg:justify-center ">
        <div className="mb-16 lg:hidden">
          <Image
            src="/assets/icons/logo-full-brand.svg"
            alt="logo"
            width={224}
            height={82}
            className="h-auto w-[200px] lg:w-[250px]"
          />
        </div>
        {children}
      </section>
    </div>
  );
};

export default AuthLayout;
