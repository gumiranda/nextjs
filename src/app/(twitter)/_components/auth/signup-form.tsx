"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "../../../../shared/ui/atoms/twitter/button";
import { Input } from "../../../../shared/ui/atoms/twitter/input";

export const SignUpForm = () => {
  const router = useRouter();
  const [nameField, setNameField] = useState("");
  const [emailFiel, setEmailField] = useState("");
  const [passwordField, setPasswordField] = useState("");

  const handleEnterButton = () => {
    router.replace("/home");
  };

  return (
    <>
      <Input
        placeholder="Digite seu nome"
        value={nameField}
        onChange={(t) => setNameField(t)}
      />

      <Input
        placeholder="Digite seu e-mail"
        value={emailFiel}
        onChange={(t) => setEmailField(t)}
      />

      <Input
        placeholder="Digite sua senha"
        value={passwordField}
        onChange={(t) => setPasswordField(t)}
        password
      />

      <Button label="Criar conta" onClick={handleEnterButton} size={1} />
    </>
  );
};
