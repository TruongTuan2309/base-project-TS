export const styleButton = (type: string) => {
  switch (type) {
    case 'primary':
      return 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 '
    case 'danger':
      return 'focus:outline-none text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-300 '
    case 'outline-light':
      return 'text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 '
    case 'outline-danger':
      return 'text-red-500 focus:outline-none bg-white rounded-lg border border-red-500 hover:bg-red-500 hover:text-white focus:z-10 focus:ring-4 focus:ring-red-200 '

    default:
      return ''
  }
}
