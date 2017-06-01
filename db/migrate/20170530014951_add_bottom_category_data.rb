class AddBottomCategoryData < ActiveRecord::Migration[5.0]
  def self.up
    # 母婴产品
    category_middle = CategoryMiddle.find_by(name: "母婴产品")
    CategoryBottom.create(name: "奶粉", category_middle: category_middle)
    CategoryBottom.create(name: "奶瓶", category_middle: category_middle)
    CategoryBottom.create(name: "童年时光系列", category_middle: category_middle)
    CategoryBottom.create(name: "辅食研磨器", category_middle: category_middle)
    CategoryBottom.create(name: "尿片", category_middle: category_middle)
    CategoryBottom.create(name: "吸管", category_middle: category_middle)
    CategoryBottom.create(name: "餐具", category_middle: category_middle)
    CategoryBottom.create(name: "餐椅", category_middle: category_middle)
    CategoryBottom.create(name: "洗护品", category_middle: category_middle)
    CategoryBottom.create(name: "其他", category_middle: category_middle)

    # 医药保健品
    category_middle = CategoryMiddle.find_by(name: "医药保健品")
    CategoryBottom.create(name: "维他命", category_middle: category_middle)
    CategoryBottom.create(name: "葡萄粉", category_middle: category_middle)
    CategoryBottom.create(name: "鱼油", category_middle: category_middle)
    CategoryBottom.create(name: "液体钙", category_middle: category_middle)
    CategoryBottom.create(name: "儿童DHA", category_middle: category_middle)
    CategoryBottom.create(name: "螺旋藻", category_middle: category_middle)
    CategoryBottom.create(name: "创可贴", category_middle: category_middle)
    CategoryBottom.create(name: "退烧贴", category_middle: category_middle)
    CategoryBottom.create(name: "其他", category_middle: category_middle)

    # 生活日用品
    category_middle = CategoryMiddle.find_by(name: "生活日用品")
    CategoryBottom.create(name: "成人洗护用品", category_middle: category_middle)
    CategoryBottom.create(name: "运动装备", category_middle: category_middle)
    CategoryBottom.create(name: "玩具", category_middle: category_middle)
    CategoryBottom.create(name: "手动剃须刀", category_middle: category_middle)
    CategoryBottom.create(name: "牙膏", category_middle: category_middle)
    CategoryBottom.create(name: "文具", category_middle: category_middle)
    CategoryBottom.create(name: "书籍", category_middle: category_middle)
    CategoryBottom.create(name: "餐具", category_middle: category_middle)
    CategoryBottom.create(name: "酒具", category_middle: category_middle)
    CategoryBottom.create(name: "茶具", category_middle: category_middle)
    CategoryBottom.create(name: "台灯", category_middle: category_middle)
    CategoryBottom.create(name: "杯子", category_middle: category_middle)
    CategoryBottom.create(name: "其他", category_middle: category_middle)

    # 服装类
    category_middle = CategoryMiddle.find_by(name: "服装类")
    CategoryBottom.create(name: "男鞋", category_middle: category_middle)
    CategoryBottom.create(name: "女鞋", category_middle: category_middle)
    CategoryBottom.create(name: "童鞋", category_middle: category_middle)
    CategoryBottom.create(name: "羽绒服", category_middle: category_middle)
    CategoryBottom.create(name: "童装", category_middle: category_middle)
    CategoryBottom.create(name: "毛衣", category_middle: category_middle)
    CategoryBottom.create(name: "西装", category_middle: category_middle)
    CategoryBottom.create(name: "靴子", category_middle: category_middle)
    CategoryBottom.create(name: "衬衫", category_middle: category_middle)
    CategoryBottom.create(name: "T恤", category_middle: category_middle)
    CategoryBottom.create(name: "毛衣", category_middle: category_middle)
    CategoryBottom.create(name: "大衣", category_middle: category_middle)
    CategoryBottom.create(name: "棉衣", category_middle: category_middle)
    CategoryBottom.create(name: "内衣", category_middle: category_middle)
    CategoryBottom.create(name: "裤装", category_middle: category_middle)
    CategoryBottom.create(name: "帽子", category_middle: category_middle)
    CategoryBottom.create(name: "眼镜", category_middle: category_middle)
    CategoryBottom.create(name: "皮带", category_middle: category_middle)
    CategoryBottom.create(name: "皮带扣", category_middle: category_middle)
    CategoryBottom.create(name: "领带夹", category_middle: category_middle)
    CategoryBottom.create(name: "其他", category_middle: category_middle)

    # 包包
    category_middle = CategoryMiddle.find_by(name: "包包")
    CategoryBottom.create(name: "钱包", category_middle: category_middle)
    CategoryBottom.create(name: "手包", category_middle: category_middle)
    CategoryBottom.create(name: "拎包", category_middle: category_middle)
    CategoryBottom.create(name: "单肩包", category_middle: category_middle)
    CategoryBottom.create(name: "背包", category_middle: category_middle)
    CategoryBottom.create(name: "旅行包", category_middle: category_middle)
    CategoryBottom.create(name: "行李箱", category_middle: category_middle)
    CategoryBottom.create(name: "其他", category_middle: category_middle)

    # 化妆品
    category_middle = CategoryMiddle.find_by(name: "化妆品")
    CategoryBottom.create(name: "唇膏", category_middle: category_middle)
    CategoryBottom.create(name: "眼霜", category_middle: category_middle)
    CategoryBottom.create(name: "面膜", category_middle: category_middle)
    CategoryBottom.create(name: "防晒霜", category_middle: category_middle)
    CategoryBottom.create(name: "香水", category_middle: category_middle)
    CategoryBottom.create(name: "眼影", category_middle: category_middle)
    CategoryBottom.create(name: "睫毛膏", category_middle: category_middle)
    CategoryBottom.create(name: "眉笔", category_middle: category_middle)
    CategoryBottom.create(name: "其他", category_middle: category_middle)

    # 电器
    category_middle = CategoryMiddle.find_by(name: "电器")
    CategoryBottom.create(name: "音箱", category_middle: category_middle)
    CategoryBottom.create(name: "净化器", category_middle: category_middle)
    CategoryBottom.create(name: "果汁机", category_middle: category_middle)
    CategoryBottom.create(name: "咖啡机", category_middle: category_middle)
    CategoryBottom.create(name: "吸奶器", category_middle: category_middle)
    CategoryBottom.create(name: "空气清新机", category_middle: category_middle)
    CategoryBottom.create(name: "空气过滤器", category_middle: category_middle)
    CategoryBottom.create(name: "其他", category_middle: category_middle)

    # 电子数码
    category_middle = CategoryMiddle.find_by(name: "电子数码")
    CategoryBottom.create(name: "手机", category_middle: category_middle)
    CategoryBottom.create(name: "电脑", category_middle: category_middle)
    CategoryBottom.create(name: "平板", category_middle: category_middle)
    CategoryBottom.create(name: "录音笔", category_middle: category_middle)
    CategoryBottom.create(name: "电子游戏机", category_middle: category_middle)
    CategoryBottom.create(name: "无线麦克风", category_middle: category_middle)
    CategoryBottom.create(name: "电子游戏配件", category_middle: category_middle)
    CategoryBottom.create(name: "耳机", category_middle: category_middle)
    CategoryBottom.create(name: "数码相机", category_middle: category_middle)
    CategoryBottom.create(name: "其他", category_middle: category_middle)

    # 电子数码
    category_middle = CategoryMiddle.find_by(name: "食品")
    CategoryBottom.create(name: "泡芙", category_middle: category_middle)
    CategoryBottom.create(name: "坚果", category_middle: category_middle)
    CategoryBottom.create(name: "膨化食品", category_middle: category_middle)
    CategoryBottom.create(name: "饼干", category_middle: category_middle)
    CategoryBottom.create(name: "米粉", category_middle: category_middle)
    CategoryBottom.create(name: "糖果", category_middle: category_middle)
    CategoryBottom.create(name: "巧克力", category_middle: category_middle)
    CategoryBottom.create(name: "果泥", category_middle: category_middle)
    CategoryBottom.create(name: "其他", category_middle: category_middle)

    # 电子数码
    category_middle = CategoryMiddle.find_by(name: "其他")
    CategoryBottom.create(name: "饰品", category_middle: category_middle)
    CategoryBottom.create(name: "手表", category_middle: category_middle)
    CategoryBottom.create(name: "样品", category_middle: category_middle)
    CategoryBottom.create(name: "退货", category_middle: category_middle)
    CategoryBottom.create(name: "工业品", category_middle: category_middle)
    CategoryBottom.create(name: "配件", category_middle: category_middle)
    CategoryBottom.create(name: "其他", category_middle: category_middle)
  end

  def self.down
    category_middle = CategoryMiddle.find_by(name: "母婴产品")
    CategoryBottom.where(:category_middle => category_middle).destroy_all

    category_middle = CategoryMiddle.find_by(name: "医药保健品")
    CategoryBottom.where(:category_middle => category_middle).destroy_all

    category_middle = CategoryMiddle.find_by(name: "生活日用品")
    CategoryBottom.where(:category_middle => category_middle).destroy_all

    category_middle = CategoryMiddle.find_by(name: "服装类")
    CategoryBottom.where(:category_middle => category_middle).destroy_all

    category_middle = CategoryMiddle.find_by(name: "包包")
    CategoryBottom.where(:category_middle => category_middle).destroy_all

    category_middle = CategoryMiddle.find_by(name: "化妆品")
    CategoryBottom.where(:category_middle => category_middle).destroy_all

    category_middle = CategoryMiddle.find_by(name: "电器")
    CategoryBottom.where(:category_middle => category_middle).destroy_all

    category_middle = CategoryMiddle.find_by(name: "电子数码")
    CategoryBottom.where(:category_middle => category_middle).destroy_all

    category_middle = CategoryMiddle.find_by(name: "食品")
    CategoryBottom.where(:category_middle => category_middle).destroy_all

    category_middle = CategoryMiddle.find_by(name: "其他")
    CategoryBottom.where(:category_middle => category_middle).destroy_all
  end
end
