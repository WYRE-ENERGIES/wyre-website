import client from "@sanity/client"

export default client({
  projectId: "a2kg71k7",
  dataset: "production",
  useCdn: true,
  apiVersion: "2022-03-08"
})