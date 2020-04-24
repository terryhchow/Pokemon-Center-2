json.cartItems do
    @cart_items.each do |cart_item|
        json.set! cart_item.id do
            json.extract! cart_item, :id, :user_id, :product_id, :quantity
        end
    end
end


json.products do
    current_user.cart_products.each do |cart_product|
        json.set! cart_product.id do
            json.extract! cart_product, :name, :description, :size, :category, :price, :id
        end
    end
end