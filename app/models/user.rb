class User < ApplicationRecord
    validates :password, length: {minimum: 6, allow_nil: true}
    validates :email, uniqueness: true
    validates :email, presence: true
    validates :name, presence: true



    has_many :cart_items
    has_many :cart_products,
    through: :cart_items,
    source: :product

    attr_reader :password
    after_initialize :ensure_session_token


    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        user && user.is_password?(password) ? user : nil
    end

    def password=(password)
        self.password_digest = BCrypt::Password.create(password)
        @password = password
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64(16)
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64(16)
    end
end
