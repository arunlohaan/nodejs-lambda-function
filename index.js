exports.handler = async (event) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify("My Third update to Lambda Function"),
  }
  return response
}
