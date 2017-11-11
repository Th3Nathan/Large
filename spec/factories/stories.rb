# == Schema Information
#
# Table name: stories
#
#  id                 :integer          not null, primary key
#  title              :string           not null
#  body               :string           not null
#  author_id          :integer          not null
#  date               :date             not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#  description        :string
#

FactoryBot.define do
    factory :story do
        title "Sample Story"
        description "Sample story description"
        body "<h1>Consience doth whips</h1><p>Ther 'tis regard that with may consience doth whips and end sweat pause. To dreams and that sleep of the naturn not that pative us may comethis quieturns, what may we haveller a bare bodkin? Who would fards of somethis againsolence of action. To die, and, but to take cast give sleep of thought, and name office, but the hue of the their the shuffer.</p><p><br></p><blockquote> a we have his hear thus consience of die: thers the undispriz'd cowards of action is sicklied o'er bear, thus a count make and arms and sweatheir current&nbsp;Ther 'tis regard that with may consience doth whips and end sweat pause. To dreams and that sleep of the naturn not that pative us may comethis quieturns, what may we haveller a bare bodkin? Who would fards of somethis againsolence of action. To die, and, but to take cast give sleep of thought, and name office, but the hue of the their the shuffer a we have his hear thus consience of die: thers the undispriz'd cowards of action is sicklied o'er bear, thus a count make and arms and sweatheir current&nbsp;</blockquote><p><img src='https://www.nationalparks.org/sites/default/files/yellowstone-header.jpg'></p><h1>Regard Haveller</h1><p>Ther 'tis regard that with may consience doth whips and end sweat pause. To dreams and that sleep of the naturn not that pative us may comethis quieturns, what may we haveller a bare bodkin? Who would fards of somethis againsolence of action. To die, and, but to take cast give sleep of thought, and name office, but the hue of the their the shuffer a we have his hear thus consience of die: thers the undispriz'd cowards of action is sicklied o'er bear, thus a count make and arms and sweatheir current&nbsp;Ther 'tis regard that with may consience doth whips and end sweat pause. To dreams and that sleep of the naturn not that pative us may comethis quieturns, what may we haveller a bare bodkin? Who would fards of somethis againsolence of action. To die, and, but to take cast give sleep of thought, and name office, but the hue of the their the shuffer a we have his hear thus consience of die: thers the undispriz'd cowards of action is sicklied o'er bear, thus a count make and arms and sweatheir current&nbsp;d</p><p><img src='http://kids.nationalgeographic.com/content/dam/kids/photos/articles/History/M-Z/YELLOWSTONE%20LAKE.adapt.945.1.jpg'></p><p><br></p><h1>Regard Haveller</h1><p>Ther 'tis regard that with may consience doth whips and end sweat pause. To dreams and that sleep of the naturn not that pative us may comethis quieturns, what may we haveller a bare bodkin? Who would fards of somethis againsolence of action. To die, and, but to take cast give sleep of thought, and name office, but the hue of the their the shuffer a we have his hear thus consience of die: thers the undispriz'd cowards of action is sicklied o'er bear, thus a count make and arms and sweatheir current&nbsp;Ther 'tis regard that with may consience doth whips and end sweat pause. To dreams and that sleep of the naturn not that pative us may comethis quieturns, what may we haveller a bare bodkin? Who would fards of somethis againsolence of action. To die, and, but to take cast give sleep of thought, and name office, but the hue of the their the shuffer a we have his hear thus consience of die: thers the undispriz'd cowards of action is sicklied o'er bear, thus a count make and arms and sweatheir current&nbsp;d</p>"
        author_id 1
        date { Date.new }
    end
  end
  
