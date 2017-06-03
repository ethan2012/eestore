# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170603134901) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "category_bottoms", force: :cascade do |t|
    t.string   "name"
    t.integer  "category_middle_id"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.index ["category_middle_id"], name: "index_category_bottoms_on_category_middle_id", using: :btree
  end

  create_table "category_middles", force: :cascade do |t|
    t.string   "name"
    t.integer  "category_top_id"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["category_top_id"], name: "index_category_middles_on_category_top_id", using: :btree
  end

  create_table "category_tops", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "data_migrations", id: false, force: :cascade do |t|
    t.string "version", null: false
    t.index ["version"], name: "unique_data_migrations", unique: true, using: :btree
  end

  create_table "product_images", force: :cascade do |t|
    t.integer  "product_id"
    t.datetime "created_at",          null: false
    t.datetime "updated_at",          null: false
    t.string   "avatar_file_name"
    t.string   "avatar_content_type"
    t.integer  "avatar_file_size"
    t.datetime "avatar_updated_at"
    t.index ["product_id"], name: "index_product_images_on_product_id", using: :btree
  end

  create_table "product_infos", force: :cascade do |t|
    t.integer  "product_id"
    t.string   "description"
    t.float    "length"
    t.float    "width"
    t.float    "height"
    t.float    "weight"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["product_id"], name: "index_product_infos_on_product_id", using: :btree
  end

  create_table "products", force: :cascade do |t|
    t.float    "price"
    t.integer  "user_id"
    t.string   "name"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.float    "number"
    t.integer  "category_bottom_id"
    t.index ["category_bottom_id"], name: "index_products_on_category_bottom_id", using: :btree
    t.index ["user_id"], name: "index_products_on_user_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
  end

  add_foreign_key "category_bottoms", "category_middles"
  add_foreign_key "category_middles", "category_tops"
  add_foreign_key "product_images", "products"
  add_foreign_key "product_infos", "products"
  add_foreign_key "products", "category_bottoms"
  add_foreign_key "products", "users"
end
