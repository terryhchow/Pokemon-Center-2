
json.set! @product.id do
    json.extract! @product, :name, :description, :size, :category, :price, :id
end