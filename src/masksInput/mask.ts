const maskCpf = (event: React.ChangeEvent<HTMLInputElement>): void => {
  const { value } = event.target
  event.target.value = value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1')
}
const maskPhone = (event: React.ChangeEvent<HTMLInputElement>): void => {
  const { value } = event.target
  event.target.value = value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
    .replace(/(-\d{4})\d+?$/, '$1')
}

export { maskCpf, maskPhone }
