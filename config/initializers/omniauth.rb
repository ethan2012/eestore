Rails.application.config.middleware.use OmniAuth::Builder do
  provider :wechat, "wxe7e982c56b958efc", "c10897032479a58037e4d0f9c6a0dcb3"
end