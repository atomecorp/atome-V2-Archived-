
#librairies requises
# require 'rubygems'
require 'rmagick'

@icon=[18,20,24,29,30,36,40,48,50,57,58,60,72,76,80,87,96,100,114,120,144,150,152,167,180,192,300,256,512,620,1024]


@requestedsize={:icon=>@icon}

def resize
  the_source = "source"
  the_dest = "icones"
  # test pour voir si un dossier de sortie existe ou non
  if !Dir.exists?(the_dest)
    Dir.mkdir(the_dest, 0700)

  end


  # Entrer ici les inclinaisons voulues pour les photos - initialize aussi le nombre de passes
  nb_rotations=[14]
  nb_version=0

  for rotations in nb_rotations
    nb_version+=1


    source_pixs = Dir[the_source+"/*"]
    size_before =[]
    for pixs in source_pixs

      requested_devices = @requestedsize.keys

      requested_devices.each do |device_name|
        @requestedsize[device_name].each do |resize|
          device_name=device_name.to_s
          if (pixs.include?(".jpg"))or(pixs.include?(".png"))or(pixs.include?(".gif")) or(pixs.include?(".tif")) or(pixs.include?(".bmp"))


            savedpixs=pixs.split(the_source)

            image = Magick::Image.read(pixs).first


            #---------------------------- sizingit ----------------------------


            #taille de sortie doit etre
            @output_width=resize
            @output_heigth=resize

            @input_height=image.columns.to_f
            @input_width=image.rows.to_f

            input_ratio=@input_width/@input_height
            output_ratio=@output_width.to_f/@output_heigth.to_f


            if input_ratio < output_ratio
              # puts "Cas Nb 1 : le ratio de sortie est supeireur a celui entre"
              #l'image est plus large que haute
              #ratio=(image.columns.to_f/image.rows.to_f)
              image.resize!(@output_heigth*output_ratio, @output_heigth)
            else
              # puts" Cas Nb 2 : le ratio d'entrée est supeireur a celui de sortie"
              #l'image est plus haute que large
              #ratio=(image.rows.to_f/image.columns.to_f)
              image.resize!(@output_heigth, @output_width/output_ratio)
            end


            filetosave = File.basename(savedpixs[1])
            filetosave.slice! File.extname(savedpixs[1])


            if !Dir.exists?(the_dest+"/"+ device_name)
              Dir.mkdir(the_dest+"/"+ device_name, 0700)

            end

            # image.write("#{the_dest}/#{the_dest}/#{device_name}/#{filetosave}_#{resize.to_s}*#{resize.to_s}_px.png")

            image.write("#{the_dest}/#{device_name}/#{filetosave}#{resize.to_s}.png")
          else

          end

        end
      end

    end
  end

end


 resize





clear
drawable_list={"drawable"=>["36","72","480*800"],"drawable-hdpi"=>["36","72","480*800"],"drawable-ldpi"=>["18","36","200*320"],"drawable-mdpi"=>["24","48","320*480"],"drawable-xhdpi"=>["48","96","720*1280"],"drawable-xxhdpi"=>["72","144","960*1600"],"drawable-xxxhdpi"=>["96","192","1280*1920"]}
mipmap_list={"mipmap"=>["72"],"mipmap-hdpi"=>["72"],"mipmap-ldpi"=>["36"],"mipmap-mdpi"=>["48"],"mipmap-xhdpi"=>["96"],"mipmap-xxhdpi"=>["144"],"mipmap-xxxhdpi"=>["192"]}


mipmap_list.each do |key,value|
  
  log key
  log value
end