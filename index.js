exports.handler = async (event) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify("My First update to Lambda Function"),
  }
  return response
}
