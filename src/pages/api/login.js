import axios from 'axios'
import withSession from 'lib/iron-session'

export default withSession(async (req, res) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/signup`,
    req.body,
  )

  const user = { ...response.data.user, token: response.data.token }
  req.session.set('user', user)
  await req.session.save()
  res.json(user)
})
