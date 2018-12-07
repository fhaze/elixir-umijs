export default {

  money (text) {
    return `R$ ${Number(text).toLocaleString(2, { minimumFractionDigits: 2 })}`
  }
}
