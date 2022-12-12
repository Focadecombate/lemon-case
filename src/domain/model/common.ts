export const enumOf = <T>(values: ReadonlyArray<T>) => ({
  type: typeof values[0],
  enum: values,
  example: values[0]
})
