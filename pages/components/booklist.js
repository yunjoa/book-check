import { useState } from "react";
// import Modal from "./modal";

export default function Booklist({ value }) {
  const [modalOn, setModalOn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const clickBook = () => {
    setModalOn(true);
    setIsOpen(true);
  };
  // console.log(value.properties.Name.title[0].plain_text);
  return (
    <>
      <div
        onClick={clickBook}
        className="flex max-md:flex-col flex-row w-full p-10 border border-4 border-black items-center max-md:items-center group  mb-4 dark:border-white"
      >
        <p className=" w-4/5 text-ellipsis break-keep text-xl pr-10 max-md:pr-0 group-hover:underline dark:group-hover:decoration-orange-400 underline-offset-4 decoration-emerald-400  ">
          {value && value.properties.Name.title[0].plain_text
            ? value.properties.Name.title[0].plain_text
            : ""}
        </p>
        <div className="max-md:mt-10 max-md:w-full  w-1/5 mt-0 text-left line-2 ">
          <p className="text-sm leading-loose truncate ;">
            {value && value.properties.Author.id
              ? value.properties.Author.id
              : ""}
          </p>
          <p className="text-sm leading-loose truncate ;">출판사</p>
        </div>
      </div>
      <>
        <div
          onClick={() => {
            setIsOpen(true);
            setModalOn(modalOn == true);
          }}
        ></div>
        {/* <Modal abook={value} open={isOpen} /> */}
      </>
    </>
  );
}
