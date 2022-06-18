

/**
 * It is highly recommended to use enviroment variables instead of hardcoded secrets.
 */
const SECRET_KEY = '6Le-FHYgAAAAAO7VSxyqqvmsZ9-7cl_tQRtFFeIn'

/**
 * This is an example that demonstrates how verifying reCAPTCHA on the server side works.
 * Do not use this middleware in your production.
 */
export default async ({ store, redirect, route, error }, res,) => {
  res.setHeader('Content-Type', 'application/json')
  try {

    console.log(store);
    if (!token) {
      res.end(JSON.stringify({
        success: false,
        message: 'Invalid token'
      }))
      return
    }
    const response = await axios.get(
      `https://www.google.com/recaptcha/api/siteverify?secret=${SECRET_KEY}&response=${token}`
    )

    if (response.success) {
      res.end(JSON.stringify({
        success: true,
        message: 'Token verifyed',
        response: response
      }))
    } else {
      res.end(JSON.stringify({
        success: false,
        message: 'Invalid token',
        response: response
      }))
    }
  } catch (e) {
    console.log('ReCaptcha error:', e)
    res.end(JSON.stringify({
      success: false,
      message: 'Internal error'
    }))
  }
}