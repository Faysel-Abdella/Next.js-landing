import assets from "@/assets";
import { Button } from "@nextui-org/react";
import Image from "next/image";

const page = () => {
  return (
    <section>
      <header className="p-10">
        <div className="flex items-center justify-between">
          <Image src={assets.logo} alt="logo" width={100} height={100} />
          <div>
            <Button
              className="w-[130px] h-[40px] rounded-[24px] bg-[#003119] font-semibold text-base text-mainWhite leading-[20px] 
            font-[family-name:var(--font-helvtica-mono)]
            "
            >
              Book a demo
            </Button>
          </div>
        </div>
      </header>

      <main className="mt-28">
        <div>
          <h3 className="text-7xl tracking-[1px]  leading-[76px] text-center font-bold din">
            TURN YOUR BORING E-LEARNING <br />
            INTO AI LIVE INTERACTIVE EXPERIENCES
          </h3>

          <p className="mt-4 font-medium text-[20px] leading-[30px] text-center text-[#003119] opacity-[60%]">
            Give your students the feeling of being on a 1-1 Zoom call with
            their instructors, <br /> significantly improving engagement rates
            and increasing your revenues.
          </p>
        </div>
      </main>
    </section>
  );
};

export default page;
