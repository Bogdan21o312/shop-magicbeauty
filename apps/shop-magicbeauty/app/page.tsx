'use client'
import {ModalWindow} from "@shop-magicbeauty/common";
import {useState} from "react";

export default function Index() {
  const [a, setA] = useState(false)
  function handle() {
    setA(true)
  }
  return (
    <div>
      <button onClick={handle}>Button</button>
      <ModalWindow isModalWindow={a} setModalWindow={setA} hash={'some'}>
        some
      </ModalWindow>
    </div>
  );
}
