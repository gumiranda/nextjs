"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export const SignUpForm = () => {
  const router = useRouter();
  const [nameField, setNameField] = useState("");
  const [emailFiel, setEmailField] = useState("");
  const [passwordField, setPasswordField] = useState("");

  const handleEnterButton = () => {
    router.replace('/home');
  };

  return (
    <>

<Input
        placeholder="Digite seu nome"
        value={emailFiel}
        onChange={t => setNameField(t)}
        // filled 
        // icon={faHeart}
      />

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


        <Button label="Criar conta" onClick={handleEnterButton} size={1}/>

      {/* <button onClick={handleEnterButton}> Entrar</button> */}
    </>
  );
};
