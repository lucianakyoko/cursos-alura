"use client";

import styles from "./form-login.module.css";
import { Label } from "@/components/Label";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { ArrowFoward } from "@/components/icons/ArrowFoward";
import { useState } from "react";

export default function FormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginAttempt = async (event) => {
    event.preventDefault();
    console.log("login?");
  };

  return (
    <form className={styles.form} onSubmit={loginAttempt}>
      <div>
        <Label>E-mail</Label>
        <Input
          name="email"
          id="email"
          type="email"
          placeholder="Digite seu e-mail"
          required
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />
      </div>
      <div>
        <Label>Senha</Label>
        <Input
          name="password"
          id="password"
          type="password"
          required
          onChange={(event) => setPassword(event.target.value)}
          value={password}
        />
      </div>
      <div className={styles.action}>
        <Button type="submit">
          Login <ArrowFoward />
        </Button>
      </div>
    </form>
  );
}
