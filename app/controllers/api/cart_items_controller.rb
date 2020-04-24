class Api::CartItemsController < ApplicationController
      
    def index
        @cart_items = current_user.cart_items
        render :index
    end

    # def edit
    #     @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    #     render :index
    # end

    def create
      @cart_item = CartItem.new(cart_params)
      if @cart_item.save 
        render :show
      else
        render json: @cart_item.errors.full_messages, status: 422
      end
  end

  def destroy
      @cart_item = CartItem.find_by(id: params[:id])
      render :index
  end

  private
  def cart_params
    params.require(:cart_item).permit(:user_id, :product_id, :quantity)
  end
end
