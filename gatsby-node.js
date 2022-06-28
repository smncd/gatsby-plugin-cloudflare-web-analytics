exports.pluginOptionsSchema = ({ Joi }) => {
  return Joi.object({
    token: Joi.string().required(),
  })
}