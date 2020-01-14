class Fokemon < ApplicationRecord
    has_many :battles
    validates :name, presence: true

end
