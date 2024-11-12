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
    </section>
  );
};

export default page;
