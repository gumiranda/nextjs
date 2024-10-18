"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "../../../../shared/ui/atoms/twitter/button";
import { Input } from "../../../../shared/ui/atoms/twitter/input";

export const SigninForm = () => {
  const router = useRouter();
  const [emailFiel, setEmailField] = useState("");
  const [passwordField, setPasswordField] = useState("");

  const handleEnterButton = () => {
    router.replace("/home");
  };

  return (
    <>
      <input
        autoComplete="false"
        name="hidden"
        type="text"
        style={{ display: "none" }}
      />
      <Input
        placeholder="Digite seu e-mail"
        value={emailFiel}
        onChange={(t) => setEmailField(t)}
        autoComplete="false"
      />

      <Input
        autoComplete="false"
        placeholder="Digite sua senha"
        value={passwordField}
        onChange={(t) => setPasswordField(t)}
        password
      />

      <Button label="Entrar" onClick={handleEnterButton} size={1} />
    </>
  );
};
