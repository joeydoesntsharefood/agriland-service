const firstAccess = (to: string) => {
  return (
    `
      <h1>Primeiro Acesso</h1>
      <p>${to}</p>
    `
  )
}

type _templates = 'firstAccess'

export const templates: Record<_templates, (to: string) => string> = {
  firstAccess
}