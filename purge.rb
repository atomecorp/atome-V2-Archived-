# frozen_string_literal: true


if Dir.exist?('../platforms')
  `mv ../platforms  ./platforms`
  `mv ../atome.js ./www/public/atome/atome.js`
  `mv ../atome.rb ./www/public/atome/atome.rb`
  `mv ../kernel.rb ./kernel.rb`
else
  `mv ./platforms  ../platforms`
  `mv ./www/public/atome/atome.js ../atome.js `
  `mv ./www/public/atome/atome.rb ../atome.rb `
  `mv ./kernel.rb ../kernel.rb `
end