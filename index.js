exports.handler = async (event) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify("My Second update to Lambda Function"),
  }
  return response
}
