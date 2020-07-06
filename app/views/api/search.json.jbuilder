
json.array! @products.each do |product|
    json.extract! product, :id, :name. :description, :size, :category, :price

end