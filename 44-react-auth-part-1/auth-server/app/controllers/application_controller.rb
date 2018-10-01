class ApplicationController < ActionController::API
  def current_user
    User.find(token_user_id)
  end

  def issue_token(payload)
    JWT.encode(payload, secret)
  end

  def token_user_id
    decoded_token.first['id']
  end

  def decoded_token
    begin
      JWT.decode(token, secret)
    r
  end

  def token
    request.headers['Authorization']
  end

  def secret
    'shh'
  end
end
