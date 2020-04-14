# frozen_string_literal: true

require 'molecule'

class Dummyrenderer
  def self.init(_properties, _atome_id); end
end

describe Atome do
  subject do
    described_class.new(renderer: :dummyrenderer)
  end

  context '#initialize' do
    context 'without parameter' do
      it { is_expected.to be_an(Atome) }
    end
  end
end


describe Atome do
  context 'box' do
    xit { is_expected.to be_an(Atome)  }
    #xit { is_expected.to be_an(Atome) woith default paramaters such as width, height color x,y }
  end
end



