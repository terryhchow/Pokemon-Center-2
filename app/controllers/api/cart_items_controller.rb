class Api::CartItemsController < ApplicationController
      
    def index
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        @products = 
        render :index
    end

    def edit
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        render :index
    end

    def create
      @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
      render :index
  end

  def destroy
      @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
      render :index
  end
end
