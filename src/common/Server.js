export async function Fetch() {
  try {
    const response = await fetch('http://api.aparat.com/fa/v1/video/video/mostViewedVideos')
    console.log(response)
    return await response.json();
  } catch (error) {
    console.log(error)
  }
  return null
}