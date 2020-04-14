# frozen_string_literal: true

require 'molecule'

class Dummyrenderer
  def self.init(_properties, _atome_id); end
end

describe Atome do
  shared_examples 'ensure atome color is red' do
    it 'should be red' do
      expect(subject.color.atome.first).to eq(:red)
      #      ^^^^^^^^^^^^^^^^^^^^^^^^^
      #      FIXME: Replace this with something that makes sense
    end
  end

  subject do
    described_class.new(params.merge(renderer: :dummyrenderer))
  end

  let(:params) { {} }

  context '#initialize' do
    context 'without parameter' do
      it { is_expected.to be_an(Atome) }
    end

    context 'with a color parameter' do
      let(:params) { { color: :red } }

      include_examples 'ensure atome color is red'
    end
  end

  context '#color' do
    before do
      expect(subject.color(:red)).to eq(subject)
    end

    include_examples 'ensure atome color is red'
  end

  context '#color=' do
    before do
      subject.color = :red
    end

    include_examples 'ensure atome color is red'
  end
end
