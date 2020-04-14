# frozen_string_literal: true

require 'molecule'

describe Atome do
  context 'without parameter' do
    it { is_expected.to be_an(Atome) }
  end
end


