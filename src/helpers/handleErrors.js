const handleHttpErros = (
  res,
  message = "INTERNAL_SERVER_ERROR",
  code = 500
) => {
  res.status(code);
  res.send({
    status: "ERROR",
    message: message,
  });
};

export default handleHttpErros;
