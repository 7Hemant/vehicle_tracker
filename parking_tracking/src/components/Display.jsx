import { useEffect, useState } from "react";

const Display = () => {
  const [result, setResult] = useState([{}]);

  useEffect(() => {
    const localresponse = localStorage.getItem("details");
    if (localresponse !== null) {
      setResult(JSON.parse(localresponse));
    }
  }, [result]);

  return (
    <>
      {result.lenght !== 0
        ? `number of vihcles :: ${result.length}`
        : "number of vihcles :: 0 "}

      <div className="flex flex-col-reverse mt-[3rem]">
        {result.lenght !== 0
          ? result.map((item, index) => (
              <div
                key={index}
                className="shadow rounded w-[90%] flex flex-col mx-[1rem] p-4 "
              >
                <h2 className=" text-[20px] font-roboto w-full">
                  <span className="text-[15px] mr-[3rem]">
                    Vehicle number ::
                  </span>
                  {item?.vehicle}
                </h2>
                <h3 className="text-[20px]  font-roboto">
                  <span className="text-[15px] mr-[3rem]">
                    Driver_name ::::::
                  </span>{" "}
                  {item?.driver}
                </h3>
                <p className="text-[20px]  font-roboto">
                  <span className="text-[15px] mr-[3rem]">
                    Checking Timing::
                  </span>
                  {item?.checking}
                </p>
                <p className="text-[20px]  font-roboto">
                  <span className="text-[15px] mr-[3rem]">
                    Checkout Timing::
                  </span>
                  {item?.checkout}
                </p>
              </div>
            ))
          : ""}
      </div>
    </>
  );
};

export default Display;
