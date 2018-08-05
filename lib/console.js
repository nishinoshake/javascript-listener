export const group = (label, callback) => {
  console.group(label)
  callback()
  console.groupEnd(label)
}

export const separate = () => {
  console.log(`%c==========================`, 'padding:2px 0;font-size:20px;')
}

export const strong = label => {
  console.log(`%c${label}`, 'padding:15px 0;font-weight:bold;text-transform:capitalize;font-size:42px;')
}
