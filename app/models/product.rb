class Product < ApplicationRecord
    validates :name, presence: true, uniqueness: true
    has_many :cart_items
end
