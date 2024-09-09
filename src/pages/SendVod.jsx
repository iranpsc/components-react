import { GlobalNoteStateProvider } from "../components/send_vod/GlobalNoteStateProvider";
import { GlobalVodStateProvider } from "../components/send_vod/GlobalVodStateProvider";
import Header from "../components/Header";
import Modal from "../components/Modal";
import Tabs from "../components/Tabs";
import VodsInfo from "../components/send_vod/VodsInfo";
import { useState } from "react";

const SendVod = () => {
  const [active, setActive] = useState("write_vod");
  const tabs = [
    { key: "write_vod", label: "نوشتن سند" },
    { key: "vods_list", label: "لیست سند ها" },
    { key: "notes", label: "یادداشت ها" },
  ];

  return (
    <GlobalVodStateProvider>
      <GlobalNoteStateProvider>
        <Modal>
          <Header profile title="اسناد" />
          <Tabs tabs={tabs} active={active} setActive={setActive} />
          <VodsInfo active={active} />
        </Modal>
      </GlobalNoteStateProvider>
    </GlobalVodStateProvider>
  );
};

export default SendVod;
