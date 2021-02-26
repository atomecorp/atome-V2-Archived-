#librairies requises
# require 'rubygems'
require 'rmagick'

@android=[1772]

@requestedsize={:android => @android}


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

  image.trim!
            #---------------------------- sizingit ----------------------------


            #taille de sortie doit etre
            @output_width=resize
            @output_heigth=resize

            @input_height=image.columns.to_f
            @input_width=image.rows.to_f

            input_ratio=@input_width/@input_height
            output_ratio=@output_width.to_f/@output_heigth.to_f


            # if input_ratio < output_ratio
  #             # puts "Cas Nb 1 : le ratio de sortie est supeireur a celui entre"
  #             #l'image est plus large que haute
  #             #ratio=(image.columns.to_f/image.rows.to_f)
  #             image.resize!(@output_heigth*output_ratio, @output_heigth)
  #           else
  #             # puts" Cas Nb 2 : le ratio d'entrée est supeireur a celui de sortie"
  #             #l'image est plus haute que large
  #             #ratio=(image.rows.to_f/image.columns.to_f)
  #             image.resize!(@output_heigth, @output_width/output_ratio)
  #           end
#
  image.trim!
   # image.resize_to_fit!(1772.0, 1772.0)
image.crop_resized(@output_width, @output_width)
# image.resample(72.0, 72.0)



            filetosave = File.basename(savedpixs[1])
            filetosave.slice! File.extname(savedpixs[1])


            if !Dir.exists?(the_dest+"/"+ device_name)
              Dir.mkdir(the_dest+"/"+ device_name, 0700)

            end

            # image.write("#{the_dest}/#{the_dest}/#{device_name}/#{filetosave}_#{resize.to_s}*#{resize.to_s}_px.png")

            image.write("#{the_dest}/#{device_name}/#{filetosave}_#{resize.to_s}*#{resize.to_s}_px.png")
          else

          end

        end
      end

    end
  end

end


resize

# puts "finished"
