export function definirCookie(chave, valor) {
  document.cookie = `${chave}=${valor};path=/`;
}

export function obterCookie(chave) {
  return document.cookie
    .split('; ')
    .find((cookie) => cookie.startsWith(`${chave}=`))
    ?.split('=')[1];
}

export function removerCookie(chave) {
  document.cookie = `${chave}=; expires=Thu, 01 Jan 1970 00:00:00`;
}
