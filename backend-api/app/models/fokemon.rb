class Fokemon < ApplicationRecord
    has_many :trainers
    validates :name, presence: true
    
end
