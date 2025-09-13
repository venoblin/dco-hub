interface GuidePayload {
  author: string
  title: string
  content: string
}

interface Guide extends GuidePayload {
  id: number
  createdAt: string
  updatedAt: string
}
