"use client";
import { createPortal } from "react-dom";
import style from "./Modal.module.css";
import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function Modal({ children }: { children: React.ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const router = useRouter();
  const $modalRoot = document.getElementById("modal-root") as HTMLElement;

  const onClick = (e: React.MouseEvent<HTMLDialogElement, MouseEvent>) => {
    if ((e.target as any).nodeName === "DIALOG") {
      router.back();
    }
  };

  const onClose = () => {
    router.back();
  };

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
      dialogRef.current?.scrollTo({
        top: 0,
      });
    }
  }, []);

  return createPortal(
    <dialog onClose={onClose} onClick={(e) => onClick(e)} className={style.modal} ref={dialogRef}>
      {children}
    </dialog>,
    $modalRoot
  );
}
