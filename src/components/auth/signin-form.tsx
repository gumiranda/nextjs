"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export const SigninForm = () => {
  const router = useRouter();
  const [emailFiel, setEmailField] = useState("");
  const [passwordField, setPasswordField] = useState("");

  const handleEnterButton = () => {
    router.replace('/home');
  };

  return (
    <>
      <Input
        placeholder="Digite seu e-mail"
        value={emailFiel}
        onChange={t => setEmailField(t)}
        // filled 
        // icon={faHeart}
      />

      <Input
        placeholder="Digite sua senha"
        value={passwordField}
        onChange={t => setPasswordField(t)}
        password
      />


        <Button label="Entrar" onClick={handleEnterButton} size={1}/>

      {/* <button onClick={handleEnterButton}> Entrar</button> */}
    </>
  );
};
