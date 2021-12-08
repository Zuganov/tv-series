const handleStatus = (response: Response) => {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(new Error(response.statusText))
  }
}

const handleJsonTransform = (response: Response) => {
  return response.json()
}

export const fetchHelper = async <T>(
  request: Request | string,
  options?: RequestInit
): Promise<T> => {
  try {
    const response = await fetch(request, options)
    const statusResponse = await handleStatus(response)

    return handleJsonTransform(statusResponse)
  } catch (error) {
    throw new Error((error as Error).message)
  }
}
