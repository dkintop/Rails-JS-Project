class Trainer < ApplicationRecord
    belongs_to :fokemon
    validates :name, uniqueness: true
end
