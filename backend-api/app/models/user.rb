class User < ApplicationRecord
    has_secure_password
    validates :username, uniqueness: true
    validates :password, length: {
        minimum: 6
    }
end
