"use client";

import Image from "next/image";
import Button from "@mui/material/Button";

const Home = () => {
  return (
    <div className="background h-screen flex flex-col items-center">
      <div className="flex flex-row w-full justify-center p-3 pb-6">
        <Image alt="logo" height="120" width="120" src="/images/melody.webp" />
      </div>
      <input className="w-60 m-4 border-black border-2" />
      <input className="w-60 m-4" />
      <Button variant="contained">Hello World</Button>
    </div>
  );
};

export default Home;
