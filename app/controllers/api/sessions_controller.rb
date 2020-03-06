class Api::SessionsController < ApplicationController
  before_action :require_login, only: :destroy
  def create
    # Find user by credentials
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @user.nil?
      render json: ['Cannot find user'], status: 404
    else
      login(@user)
      render 'api/users/show'
    end
  end

  def destroy
    if !logged_in?
        render json: ['Could not locate user'], status: 404
    end
    logout
    if !logged_in?
        render json: {}
    end
  end
end
