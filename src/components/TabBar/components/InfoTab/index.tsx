import { useState, useEffect } from "react";
import { ScrabIcon } from "@assets/svg";
import Button from "@components/Button";
import { useParams } from "react-router-dom";
import usePostScrap from "@api/hooks/program/usePostScrab";
import useDeleteScrab from "@api/hooks/program/useDeleteScrab";
import {useGetScrap} from "@api/hooks/user/useGetScrap";
const InfoTab = () => {
  const { programId } = useParams<{ programId: string }>();
  const [isScrabbed, setIsScrabbed] = useState(false);
  const { data } = useGetScrap(0);
  const { mutate: handlePostScrap } = usePostScrap();
  const { mutate: handleDeleteScrap } = useDeleteScrab();

  useEffect(() => {
    if (data?.scraps) {
      const isScrabbedProgram = data.scraps.some(
        (scrap) => scrap.programId === Number(programId)
      );
      console.log("스크랩여부", isScrabbedProgram);
      setIsScrabbed(isScrabbedProgram);
    }
  }, [data?.scraps, programId]);
  

  const handleScrabClick = () => {
    if (!programId) return;

    if (isScrabbed) {
      handleDeleteScrap(Number(programId), {
        onSuccess: () => setIsScrabbed(false),
        onError: () => setIsScrabbed(true),
      });
      console.log("delete");
    } else {
      handlePostScrap(Number(programId), {
        onSuccess: () => setIsScrabbed(true),
        onError: () => setIsScrabbed(false),
      });
      console.log("success");
    }
    console.log(data);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-center">
      <div className="flex justify-between max-w-[410px] w-full py-5 gap-3 bg-white">
        <Button
          className={`flex justify-center p-5 h-11 ${
            isScrabbed ? "bg-orange-50" : "bg-primary-5"
          }`}
          onClick={handleScrabClick}
          // disabled={isLoading || isError}
        >
          <ScrabIcon className={isScrabbed ? "text-orange-400" : "text-primary-60"} />
        </Button>
        <Button style="filled" className="flex justify-center w-full p-5 text-white h-11">
          <div className="flex flex-row gap-2">
            <p>100,000원</p>
            <p>|</p>
            <p>수강 신청하러가기</p>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default InfoTab;
