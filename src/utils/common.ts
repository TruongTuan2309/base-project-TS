import lodash from 'lodash'

export const clearEmptyPayload = (data: any) =>
  lodash.pickBy(data, lodash.identity)
