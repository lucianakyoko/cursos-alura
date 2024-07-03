import Image from 'next/image'
import banner from './banner-signon.png'

import styles from './signon.module.css'
import { Label } from '@/components/Label'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { ArrowFoward } from '@/components/icons/ArrowFoward'
import { Checkbox } from '@/components/Checkbox'
import { TextDivider } from '@/components/TextDivider'
import { Providers } from '@/components/Providers'
import Link from 'next/link'
import { Login } from '@/components/icons/Login'
import { createUser } from '@/actions'

export default async function SignOn() {

  return (
    <main className={styles.main}>
      <div>
        <Image src={banner} alt='Banner' priority />
      </div>
      <div className={styles.container}>
        <h1>
          Cadastro
        </h1>
        <h2>
          Olá! Preencha seus dados.
        </h2>
        <form className={styles.form} action={createUser}>
          <div>
            <Label>
              Nome
            </Label>
            <Input 
              name="name" 
              id="name" 
              placeholder="Nome completo" 
              required 
            />
          </div>
          <div>
            <Label>
              E-mail
            </Label>
            <Input 
              name="email" 
              id="email" 
              type="email" 
              placeholder="Digite seu e-mail" 
              required 
            />
          </div>
          <div>
            <Label>
              Senha
            </Label>
            <Input 
              name="password" 
              id="password" 
              type="password" 
              required 
            />
            <Checkbox label="Li e aceito os termos de uso" required />
          </div>
          <div className={styles.action}>
            <Button type="submit">
              Cadastrar <ArrowFoward />
            </Button>
          </div>
        </form>
        <div className={styles.providers}>
          <TextDivider text="ou entre com outras contas" />
          <Providers />
        </div>
        <footer className={styles.footer}>
          <p>
            Já tem conta? <Link href='/signin'>Faça seu login! <Login color="#81FE88" /></Link>
          </p>
        </footer>
      </div>
    </main>
  )
}
