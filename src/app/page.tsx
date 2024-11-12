"use client";
import assets from "@/assets";

import Image from "next/image";

import * as React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

const page = () => {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["Software"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

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
          <div className="flex justify-center items-center">
            <h3 className="w-fit relative text-7xl tracking-[1px]  leading-[76px] text-center font-bold din">
              TURN YOUR BORING E-LEARNING <br />
              INTO AI LIVE INTERACTIVE EXPERIENCES
              <Image
                src={assets.star}
                alt="Start"
                className="absolute right-[-32px] bottom-[80px]"
              />
            </h3>
          </div>

          <p className="mt-4 font-medium text-[20px] leading-[30px] text-center text-[#003119] opacity-[60%]">
            Give your students the feeling of being on a 1-1 Zoom call with
            their instructors, <br /> significantly improving engagement rates
            and increasing your revenues.
          </p>
        </div>

        <div className="mt-10 flex justify-center items-center">
          <div className="flex justify-center items-center gap-[12px] border border-[#EBE9E6] rounded-[40px] py-[4px] px-[20px]">
            <p className="font-medium text-base leading-[19.54px] text-[#003119] opacity-[60%]">
              I provide courses on
            </p>

            <Dropdown>
              <DropdownTrigger className="bg-[#003119]">
                <Button
                  variant="bordered"
                  className=" bg-opacity-[8%] border border-[#003119] border-opacity-[10%] flex justify-center items-center gap-2"
                >
                  <Image src={assets.software} alt="Software" />
                  <span className="font-semibold text-[#003119] text-base">
                    {selectedValue}
                  </span>
                  <Image src={assets.more} alt="more" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Single selection example"
                variant="flat"
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={selectedKeys}
                onSelectionChange={(keys) => {}}
              >
                <DropdownItem key="text">
                  <div className=" bg-opacity-[8%]  flex items-center gap-2">
                    <Image src={assets.software} alt="Software" />
                    <span className="font-semibold text-[#003119] text-base">
                      Entertainment
                    </span>
                  </div>
                </DropdownItem>
                <DropdownItem key="number">
                  <div className=" bg-opacity-[8%]  flex items-center gap-2">
                    <Image src={assets.software} alt="Software" />
                    <span className="font-semibold text-[#003119] text-base">
                      Culture
                    </span>
                  </div>
                </DropdownItem>
                <DropdownItem key="date">
                  <div className=" bg-opacity-[8%]  flex items-center gap-2">
                    <Image src={assets.software} alt="Software" />
                    <span className="font-semibold text-[#003119] text-base">
                      Mathematics
                    </span>
                  </div>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>

            <p className="font-medium text-base leading-[19.54px] text-[#003119] opacity-[60%]">
              for
            </p>

            <Dropdown>
              <DropdownTrigger className="bg-[#003119]">
                <Button
                  variant="bordered"
                  className=" bg-opacity-[8%] border border-[#003119] border-opacity-[10%] flex justify-center items-center gap-2"
                >
                  <Image src={assets.people} alt="Software" />
                  <span className="font-semibold text-[#003119] text-base">
                    100
                  </span>
                  <Image src={assets.more} alt="more" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Single selection example"
                variant="flat"
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={selectedKeys}
                onSelectionChange={(keys) => {}}
              >
                <DropdownItem key="text">
                  <div className=" bg-opacity-[8%]  flex items-center gap-2"></div>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>

            <p className="font-medium text-base leading-[19.54px] text-[#003119] opacity-[60%]">
              members
            </p>

            <button className="flex justify-center items-center size-[40px] rounded-full bg-[#003119]">
              <Image src={assets.next} alt="Next" />
            </button>
          </div>
        </div>
      </main>
    </section>
  );
};

export default page;
