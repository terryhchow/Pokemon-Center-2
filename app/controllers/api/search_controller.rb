class Api::ProductsController < ApplicationController
    
    def show
        @products = Product.all
        render :show
    end
end