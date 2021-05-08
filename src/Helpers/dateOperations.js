export const getToday = () => {
  const local = new Date()
  return local.toJSON().slice(0, 10)
}

export const getDeltaDate = (input, days, months, years) => {
  return new Date(
    input.getFullYear() + years,
    input.getMonth() + months,
    Math.min(
      input.getDate() + days,
      new Date(
        input.getFullYear() + years,
        input.getMonth() + months + 1,
        0
      ).getDate()
    )
  )
}

export const get18YearsAgo = () => {
  return getDeltaDate(new Date(), 0, 0, -18).toJSON().slice(0, 10)
}
