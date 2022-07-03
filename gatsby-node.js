exports.pluginOptionsSchema = ({ Joi }) => {
  return Joi.object({
    token: Joi.string().required(),
    attributes: Joi.array().items(Joi.object({
      name: Joi.string().required(),
      value: Joi.string().required(),
  }))
  })
}