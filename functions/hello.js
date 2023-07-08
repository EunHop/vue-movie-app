exports.handler = async function (eveut, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'EUNHOP',
      age: 85,
      email: 'thffoa99@gmail.com'
    })
  }
}