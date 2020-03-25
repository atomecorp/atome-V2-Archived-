# the service object
class Account
  def initialize(balance)
    @content = []
  end

  def deposit(amount = nil)
    @content << {:deposit => amount}
    return self
  end

  def withdraw(amount = nil)
    @content << {:withdraw => amount}
    return self
  end

  def poil (amount = nil)
    @content << {:poil => amount}
    return self
  end

  def toto (amount = nil)
    @content << {:toto => amount}
    return self
  end

  def tutu (amount = nil)
    @content << {:tutu => amount}
    return self
  end

  def to_s
    @content.to_s
  end

end

# the proxy object
class AccountProxy

  def initialize()
    acc = Account.new(100)
    @real_account = acc
    @data = []
  end

  def method_missing(name, *args)
    @data = @real_account.send(name, *args)
    return self
  end

  def to_s
    @data.to_s
  end
end

## client code

atome = AccountProxy.new()
atome.deposit(10).tutu(60)
atome.poil.toto(20)
atome.withdraw(50)
puts atome.withdraw("ok")