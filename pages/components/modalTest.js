import React, { useEffect } from "react";
import Image from "next/image";

const ModalTest = ({ isOpen, onClose, value }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);
  if (!isOpen) return null;

  const date = new Date(value.properties.doneDate.date.start);
  const imgSrc = value.properties.책표지.files[0].external.url;

  return (
    <>
      <div
        className="modal__overlay w-full h-full fixed top-0 left-0
      bg-neutral-800/80 z-20"
        onClick={onClose}
      >
        <div className="modal">
          <div className="modal__content w-4/5 h-4/5 shadow-md bg-white dark:bg-zinc-900 rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 md:p-10 overflow-y-auto z-30 ">
            <div className="flex max-md:flex-col">
              <div className="w-2/4 h-80 mr-20 max-md:w-full max-md:mb-10 ">
                <div className=" w-full h-full relative">
                  <Image
                    src={imgSrc}
                    alt="책표지"
                    width="200"
                    height="250"
                    className="border border-1 w-200px h-200px"
                  />
                </div>
              </div>
              <div className="text-right w-2/4 justify-items-end max-md:w-full max-md:text-left max-md:flex ">
                <div>
                  <span className="text-6xl font-bold">{date.getDate()}</span>
                  <p className="text-sm mr-1 mb-10 max-md:mr-10">
                    {date.toLocaleString("en-US", { month: "short" })}{" "}
                    {date.getFullYear().toString().substring(2, 4)}
                  </p>
                </div>
                <div className="text-base leading-7 ">
                  <p>{value.properties.Name.title[0].plain_text} </p>
                  <p>작가 / 출판</p>
                  <p>{value.properties.발행일.date.start} 출간</p>
                  <p>{value.properties.전체페이지.number}p</p>
                  <p>
                    {value.properties.startDate.date.start} ~{" "}
                    {value.properties.doneDate.date.start} (
                    {value.properties.읽은기간.formula.string})
                  </p>
                  <p>{value.properties.즐겨찾기.select.name}</p>
                </div>
              </div>
            </div>
            <hr className="my-8 border-gray-200 dark:border-gray-700" />
            <div className="phrase text-left flex pb-20">
              <p className="text-xs font-bold underline underline-offset-4 mr-4">
                0p
              </p>
              -
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalTest;
