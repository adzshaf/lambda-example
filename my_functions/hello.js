const exampleFunction = async (event, context) => {
  return {
    statusCode: 200,
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ message: `Hello world` }),
  };
};

exports.handler = exampleFunction;
