export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-02-02'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)
export const token = assertValue(

  "skdRzZhWWBdkBWQD5Dv3m13hFRrOEMSyMlpybofqaRAlDX2b17aLbZJSEYfUBXPZJgDOqpYMeuZsy7PoQ4DBvO2myH0X110NbekQHuzzq3Byfb0Yq6d5Z1XSKQAV4OGxmfaBwzb4qql3jMzsdxeYwvCdyjJxG3FoBXwNjHXkwVbjfvFkCUKq",
  'Missing environment variable: SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
