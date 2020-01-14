# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_01_14_135438) do

  create_table "battles", force: :cascade do |t|
    t.integer "fokemon_id"
    t.integer "challenger"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "fokemons", force: :cascade do |t|
    t.string "name"
    t.string "element_type", default: "water"
    t.integer "hit_points", default: 0
    t.integer "attack_points", default: 0
    t.string "avatar", default: "https://i.ytimg.com/vi/OxgKvRvNd5o/maxresdefault.jpg"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
