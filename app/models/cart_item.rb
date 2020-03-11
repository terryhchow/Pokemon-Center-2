class CartItem < ApplicationRecord
    belongs_to :user
    belongs_to :product

    # def set_defaults
    #     self.quantity  ||= 1
    # end
end
